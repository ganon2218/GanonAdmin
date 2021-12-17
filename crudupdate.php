<html>
<body>
<?php
$email = $fname = $lname = $phno = $pass = $srno = " ";

function clean_input($data)
{
 $data = trim($data);
 $data = stripslashes($data);
 $data = htmlspecialchars($data);
 return $data;
}

$fname = clean_input($_POST["fname"]);
$lname = clean_input($_POST["lname"]); 
$email = clean_input($_POST["email"]); 
$phno = clean_input($_POST["phno"]); 
$pass = clean_input($_POST["pwd"]); 
$srno = clean_input($_POST["srno"]);
echo "You have been registered as our Client";

echo "<pre>";
echo print_r($_POST);
echo "</pre>";

 $conn = mysqli_connect("localhost","nipurn","ganon2218","projs") or die(" not connected!!");
  
    
            
        
        $q = "UPDATE clientlog SET fname = '$fname', lname = '$lname', email = '$email', phno = '$phno', pass= '$pass' WHERE srno= $srno";
 $query = mysqli_query($conn,$q) or die("wrong query!!!!");
        
 header("Location:crud.php");

?>

</body>
</html>
