
<html>
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
          <title>GanonAdmin KYC</title>
          <meta content="" name="description">
    <meta content="" name="keywords">
  
    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
  
    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  
    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet">
  
    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">
      
</head>
<body>
<?php
$srno = $_GET["srno"];
?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="form.js"></script>
<h1><center> Update Record</center></h1><br><br>
<form name="mfu" onsubmit="return validation()" method="post" action="crudupdate.php" enctype="multipart/form-data">
<label for="fname">First name</label>
<input type="text" id="fname" class ="fname" name="fname">
<small class="fname-msg" ></small><br><br>
<label for="lname">Last name</label>
<input type="text" id="lname" class ="lname" name="lname">
<small class="lname-msg" ></small><br><br>
<label for="email">Please enter your email address:</label><br>
<input type="email" id="email" class ="email" name="email"><br>
<small class="email-msg" ></small><br><br>
Please enter your phone number:
<input type="text" id="phno" name="phno" class="phno" >
<small class="phno-msg" ></small><br><br>
Please set a password:<br>
<input type="password" id="pwd" name="pwd" class="pwd">
<small class="pwd-msg" ></small><br><br>
Please confirm password:<br>
<input type="password" id="cpwd" name="cpwd" class="cpwd">
<small class="cpwd-msg" ></small><br><br>
<input type="hidden" name="srno" value="<?php echo $srno; ?>">
<input type="reset">
<button type="submit" value="submit" id="submit" class="submit" name="submit">Submit</button>
</form>
</body>
</html>
