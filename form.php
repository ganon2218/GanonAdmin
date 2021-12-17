<html>
<body>
<?php
$email = $fname = $lname = $phno = $pass = " ";

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
$addr = clean_input($_POST["addr"]); 
$flag = clean_input($_POST["flag"]); 
$job = clean_input($_POST["job"]); 
$org = clean_input($_POST["org"]);
$img = $_POST["image"];
echo "You have been registered as our Client";

echo "<pre>";
echo print_r($_POST);
echo "</pre>";
echo $img;

 $conn = mysqli_connect("localhost","nipurn","ganon2218","projs") or die(" not connected!!");
  
    $filename = $_FILES["image"]["name"];
    $tempname = $_FILES["image"]["tmp_name"];    
        $folder = "uploads/";
            
        $filetype=$_FILES['image']['type'];
        if($filetype=='image/jpeg' or $filetype=='image/png' or $filetype=='image/gif')
        {
        move_uploaded_file($_FILES['image']['tmp_name'],'uploads/'.$filename);
        $filepath="uploads/".$filename;
        }
        $q = "INSERT INTO clientlog(fname, lname, email, phno, pass, addr, country, job, org, image) VALUES ('{$fname}', '{$lname}', '{$email}', '{$phno}', '{$pass}', '{$addr}', '{$flag}', '{$job}', '{$org}', '{$filename}')";
 $query = mysqli_query($conn,$q) or die("wrong query!!!!");
        
 header("Location:index.html");

?>

</body>
</html>
