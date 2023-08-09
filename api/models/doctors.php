<?php 
    class Doctors {
        private $db;

        public function __construct($dbdata) { 
            $this->db = $dbdata; 
        }


        public function getAllDoctors() {
            $sql = "SELECT * FROM doctors";

            $stmt = $this->db->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();

            $this->checkForQueryErrors($sql, $result);

            $doctors = array();

            while($row = $result->fetch_assoc()) {
                array_push($doctors, array("id" => $row["id"], "name" => $row["name"], "imgUrl" => $row["img_url"], "description" => $row["description"]));
            }

            return $doctors;
        }

        public function getBookedHrs($doctor_id, $date) {
            $sql = "SELECT * FROM appointments WHERE doctor_id = ? AND date = ?";

            $stmt = $this->db->prepare($sql);
            $stmt->bind_param('is', $doctor_id, $date,);
            $stmt->execute();
            $result = $stmt->get_result();

            $this->checkForQueryErrors($sql, $result);

            $bookedHrs = array();

            while($row = $result->fetch_assoc()) {
                array_push($bookedHrs, $row["time"]);
            }
            
            return $bookedHrs;
        }

        public function postAppointment($name, $last_name, $e_mail, $doctor_id, $date, $time) {
            $sql = "INSERT INTO appointments (name, last_name, e_mail, doctor_id, date, time) VALUES (?, ?, ?, ?, ?, ?)";

            $stmt = $this->db->prepare($sql);
            $stmt->bind_param('sssiss', $name, $last_name, $e_mail, $doctor_id, $date, $time);
            $stmt->execute();
        }



        private function checkForQueryErrors($query, $query_results) {
            if (!$query_results) {
              throw new Exception("Error executing query: " . $query . "\nErrno: " . $this->db->errno . "\nError: " . $this->db->error . "\n");
            }
          }

    }
?>