<?php
require "connect.php";
$id=$_GET["id"];
$query="SELECT * FROM `students` WHERE `sid`={$id}";
$res=mysqli_query($con,$query);

if($res){

    $row=mysqli_fetch_assoc($res);
    echo json_encode($row);

}
else{
    http_response_code(404);
}
    
?>