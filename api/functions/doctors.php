<?php 
    class Doctors {
        private $db;

        public function __construct($dbdata) { 
            $this->db = $dbdata; 
        }


        public function getAllDoctors() {
            $query = "SELECT * FROM doctors";
            $query_results = mysqli_query($this->db, $query);

            $this->checkForQueryErrors($query, $query_results);

            $doctors = array();

            while($row = $query_results->fetch_assoc()) {
                array_push($doctors, array("id" => $row["id"], "name" => $row["name"], "imgUrl" => $row["img_url"], "description" => $row["description"]));
            }

            return $doctors;
        }



        private function checkForQueryErrors($query, $query_results) {
            if (!$query_results) {
              throw new Exception("Error executing query: " . $query . "\nErrno: " . $this->db->errno . "\nError: " . $this->db->error . "\n");
            }
          }

    }
?>