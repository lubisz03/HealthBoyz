<?php 
    include("./dbconfig.php");
    include("./dbconnection.php"); 
    include("./models/doctors.php");

    $db = (new DB($db_config))->getConnection();

    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    
    }

    $doctors = new Doctors($db);

    $method = $_SERVER['REQUEST_METHOD'];
   
    $uri = explode('/', $_SERVER['REQUEST_URI']);
    $resource = $uri[3]; 

  
    

    switch($method) {
        case 'GET':
            if ($resource == 'doctors') {
                $doctors_data = $doctors->getAllDoctors();
                echo json_encode($doctors_data);
            }
            else if ($resource == 'booked') {
                $doctor_id = $uri[4];
                $date = $uri[5];

                $bookedHrs = $doctors->getBookedHrs($doctor_id, $date);
                echo json_encode($bookedHrs);
            }
            break;
        case 'POST': 
            $_POST = json_decode(file_get_contents("php://input"),true);

            $name = $_POST['name'];
            $last_name = $_POST['last_name'];
            $e_mail = $_POST['e_mail'];
            $doctor_id = $_POST['doctor_id'];
            $date = $_POST['date'];
            $time = $_POST['time'];

            $doctors->postAppointment($name, $last_name, $e_mail, $doctor_id, $date, $time);
            break;
    }
?>
