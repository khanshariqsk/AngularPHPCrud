<?php
require "connect.php";

$data=file_get_contents("php://input");

if(isset($data) && !empty($data)){
    
    $result=json_decode($data);

     $fname=mysqli_real_escape_string($con,trim($result->fname));
     $lname=mysqli_real_escape_string($con,trim($result->lname));
     $email=mysqli_real_escape_string($con,$result->email);


    $query="INSERT INTO `students`(`fname`, `lname`, `email`) VALUES ('{$fname}','{$lname}','{$email}')";
    $res=mysqli_query($con,$query);
    if($res){
        http_response_code(201);    
    }
    else{
        http_response_code(422);
    }
}
?>