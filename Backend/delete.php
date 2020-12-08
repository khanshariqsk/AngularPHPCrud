<?php
require "connect.php";
//$id=$_GET["id"];
$id=$_GET["id"];

$query = "DELETE FROM `students` WHERE `sid`='{$id}' LIMIT 1";

$res = mysqli_query($con,$query);

if($res){
    
    http_response_code(204);
}
else{
    http_response_code(404);
}

?>