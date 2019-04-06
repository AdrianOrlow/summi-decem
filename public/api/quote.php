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
        $quote_id = $_GET['quote_id'];
        
        $query = 'SELECT quotes.id, text, name, source, created_on FROM quotes JOIN persons ON quotes.person_id = persons.id AND quotes.id = $1';
        $result = pg_query_params($conn, $query, array($quote_id));

        if (pg_num_rows($result) > 0) {
            http_response_code(200);
            while ($row = pg_fetch_row($result)) {
                echo json_encode(
                    array(
                        "id" => intval($row[0]),
                        "text" => $row[1],
                        "author" => $row[2],
                        "source" => $row[3], 
                        "created_on" => $row[4]
                    )
                );
            }
        } else {
            http_response_code(404);
        }
    break;

    case 'POST':
        $json = file_get_contents('php://input');
        $data = json_decode($json);

        $values = array(
            $data->person_id,
            $data->source,
            $data->text,
            date("Y-m-d H:i:s")
        );

        $isTooShort = max(strlen($data->text), strlen($data->source)) < 10;

        if (!$isTooShort) {
            $query = 'INSERT INTO proposed_quotes (person_id, source, text, created_on) VALUES($1,$2,$3,$4)';
            $result = pg_query_params($conn, $query, $values);
        }

        if ($result) {
            http_response_code(200);
        } else {
            http_response_code(400);
        }
    break;

	default:
		http_response_code(400);
		break;
}
?>