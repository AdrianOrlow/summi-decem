<?php 
error_reporting(0);

$conn = pg_connect(getenv('DATABASE_DATA'));

if (!$conn) {
    http_response_code(400);
    echo json_encode(
        array(
            "status" => "Database connection failed"
        )
    );
    exit();
}

?>