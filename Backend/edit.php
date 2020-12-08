<?php

require "connect.php";

$data=file_get_contents("php://input");

if(isset($data) && !empty($data)){

    $res=json_decode($data);

    $id=mysqli_real_escape_string($con,(int)$res->sid);
    $fname=mysqli_real_escape_string($con,trim($res->fname));
    $lname=mysqli_real_escape_string($con,trim($res->lname));
    $email=mysqli_real_escape_string($con,$res->email);

    $query = "UPDATE `students` SET `fname`='{$fname}',`lname`='{$lname}',`email`='{$email}' WHERE `sid`={$id}";
    
    if(mysqli_query($con,$query)){
        http_response_code(204);
    }
    else{
        http_response_code(404);
    }


}
?>