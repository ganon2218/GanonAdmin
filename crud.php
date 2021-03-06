<html>
<head>
<meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <style>
        .wrapper{
            width: 600px;
            margin: 0 auto;
        }
        table tr td:last-child{
            width: 120px;
        }
    </style>
    <script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
        });
    </script>
    <script>
function searchClient() {
  str= document.getElementById("query").value;  
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "search query empty";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    alert(str);
    xmlhttp.open("GET","search.php?q="+str,true);
    xmlhttp.send();
  }
}
</script>
</head>
    <body>
      
        
       <center><h1>CRUD controls</h1></center><br>
        
        <center><input type ="text" name="query" id="query" onkeyup="searchClient()" placeholder="Enter search Keywords">
        <!--<button type="button" name="Search">Search</button></center>-->
      
       

       <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12" >
                    <div class="mt-5 mb-3 clearfix">
                        <h2 class="pull-left">Client Details</h2>
                        <a href="form.html" class="btn btn-success pull-right"><i class="fa fa-plus"></i> Add New Client</a>
                    </div>
                    <div id="txtHint">
                    <?php
                    // Include config file
                    require_once "crudconfig.php";
                    
                    // Attempt select query execution
                    $sql = "SELECT * FROM clientlog";
                    if($result = mysqli_query($link, $sql)){
                        if(mysqli_num_rows($result) > 0){
                            echo '<table class="table table-bordered table-striped">';
                                echo "<thead>";
                                    echo "<tr>";
                                        echo "<th>#</th>";
                                        echo "<th>First Name</th>";
                                        echo "<th>Last Name</th>";
                                        echo "<th>Email</th>";
                                        echo "<th>Ph no.</th>";
                                        echo "<th>Action</th>";
                                    echo "</tr>";
                                echo "</thead>";
                                echo "<tbody>";
                                while($row = mysqli_fetch_array($result)){
                                    echo "<tr>";
                                        echo "<td>" . $row['srno'] . "</td>";
                                        echo "<td>" . $row['fname'] . "</td>";
                                        echo "<td>" . $row['lname'] . "</td>";
                                        echo "<td>" . $row['email'] . "</td>";
                                        echo "<td>" . $row['phno'] . "</td>";
                                        echo "<td>";
                                            echo '<a href="crudread.php?srno='. $row['srno'] .'" class="mr-3" title="View Record" data-toggle="tooltip"><span class="fa fa-eye"></span></a>';
                                            echo '<a href="crudupdate1.php?srno='. $row['srno'] .'" class="mr-3" title="Update Record" data-toggle="tooltip"><span class="fa fa-pencil"></span></a>';
                                            echo '<a href="cruddelete.php?srno='. $row['srno'] .'" title="Delete Record" data-toggle="tooltip"><span class="fa fa-trash"></span></a>';
                                        echo "</td>";
                                    echo "</tr>";
                                }
                                echo "</tbody>";                            
                            echo "</table>";
                            // Free result set
                            mysqli_free_result($result);
                        } else{
                            echo '<div class="alert alert-danger"><em>No records were found.</em></div>';
                        }
                    } else{
                        echo "Oops! Something went wrong. Please try again later.";
                    }
 
                    // Close connection
                    mysqli_close($link);
                    ?>
                    </div>
                </div>
            </div> 
                   
        </div>
    </div>
    </body>
</html>