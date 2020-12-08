<?php
require "connect.php";

$query = "SELECT * FROM `students`";
$data=[];

if($res=mysqli_query($con,$query)){

    $count=0;
    while($rows=mysqli_fetch_assoc($res)){
        
        $data[$count]["sid"]=$rows["sid"];
        $data[$count]["fname"]=$rows["fname"];
        $data[$count]["lname"]=$rows["lname"];
        $data[$count]["email"]=$rows["email"];
        $count++;
    }
    echo json_encode($data);
}
else{
    http_response_code(404);
}
?>
