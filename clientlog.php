<?php
$email = $pass = "";

$email = $_POST["email"];
$pass = $_POST["pwd"];

$conn = mysqli_connect("localhost","nipurn","ganon2218","projs") or die(" not connected!!");
$result = "SELECT * FROM clientlog WHERE email = '".$email."' and pass = '".$pass."'";
$query = mysqli_query($conn,$result) or die("wrong query!!!!");
if(mysqli_num_rows($query) >= 1 )
{
    header("Location:clientindex.html");
}
else 
{
    header("Location:clientlog.html");
}
?>