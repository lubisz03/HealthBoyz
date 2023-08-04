<?php 
    include("./dbconfig.php");
    include("./dbconnection.php"); 
    include("./models/doctors.php");

    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, PATCH, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

    $db = (new DB($db_config))->getConnection();
    $method = $_SERVER['REQUEST_METHOD'];
    
    $doctors = new Doctors($db);

    // $path = array();
    // preg_match_all('/\/([a-z]|[0-9]|[A-Z])+/', $_SERVER["REQUEST_URI"], $path);
    // $method = $_SERVER["REQUEST_METHOD"];
    // $uri = $path[0];
    // $resource = $uri[0];

    switch($method) {
        case 'GET':
            $doctors_data = $doctors->getAllDoctors();
            echo json_encode($doctors_data);
            break;
    }
?>
