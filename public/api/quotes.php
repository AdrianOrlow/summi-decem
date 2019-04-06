<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once 'config/database.php';

$request_method = $_SERVER["REQUEST_METHOD"];
switch($request_method) {
    case 'GET':
        $person_id = isset($_GET['person_id']) ? $_GET['person_id'] : null;

        if ($person_id) {
            $query = 'SELECT id, person_id FROM quotes WHERE person_id = $1';
            $result = pg_query_params($conn, $query, array($person_id));
        } else {
            $query = 'SELECT id, person_id FROM quotes';
            $result = pg_query($conn, $query);
        }

        if (pg_num_rows($result) > 0) {
            http_response_code(200); 
            $quotes_ids = pg_fetch_all($result);
            echo json_encode(
                array(
                    "quotes" => $quotes_ids
                )
            );
        } else {
            http_response_code(404);
        }
    break;

	default:
		http_response_code(400);
		break;
}
?>