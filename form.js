$(document).ready(function validation() 
{
    var fname_err = false;
    var lname_err = false;
    var email_err = false;
    var phone_err = false;
    var pass_err = false;
    var cpass_err = false;
    //var image_err = false;
    var addr_err = false;
    var flag_err = false;
    var job_err = false;
    var org_err = false;
    
    
    
  

    //fname
    $('#fname').keyup(function () 
    {
        fname_check();
    });

    function fname_check() 
    {
        let fname = $(".fname").val();
        let alpha = /^[A-Za-z]+$/;
        if (fname == "" || fname == undefined)
        {
            $('.fname-msg').html("FName is required").addClass("text-danger")
            fname_err = false;
            return false;


        } 
        else if (alpha.test(fname) == false)
        {
            $(".fname-msg").html("alphabets only!").addClass("text-danger");
            $('#fname').keypress(function (e)
            {
                var regex = new RegExp(/^[a-zA-Z]+$/);
                var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
                if (regex.test(str)) 
                {
                    return true;
                }
                else 
                {
                    e.preventDefault();
                    return false;
                }
            });
            fname_err = false;
            return false;
        } 
        else 
        {
            $('.fname-msg').html("ok").removeClass("text-danger").addClass("text-success");
            fname_err = true;
            //submit();
            return true;
        }  
        
    }
    //lname
    $('#lname').keyup(function ()
    {
        lname_check();
    });
    function lname_check() 
    {
        let lname = $(".lname").val();
        let alpha = /^[A-Za-z]+$/;
        if (lname == "" || lname == undefined)
        {
            $('.lname-msg').html("LName is required").addClass("text-danger")
            lname_err = false;
            return false;


        } 
        else if (alpha.test(lname) == false)
        {
            $(".lname-msg").html("alphabets only!").addClass("text-danger");
            $('#lname').keypress(function (e)
            {
                var regex = new RegExp(/^[a-zA-Z]+$/);
                var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
                if (regex.test(str)) 
                {
                    return true;
                }
                else 
                {
                    e.preventDefault();
                    return false;
                }
            });
            lname_err = false;
            return false;
        } 
        else 
        {
            $('.lname-msg').html("ok").removeClass("text-danger").addClass("text-success");
            lname_err = true;
            //submit();
            return true;
        }
    }

    //email
    $('#email').keyup(function () 
    {
        email_check();
    });
    function email_check() 
    {
        let email = $(".email").val();
        let exp = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (email == "" || email == undefined) 
        {
            $(".email-msg").html("email is required !!").addClass("text-danger");
            f = false;
            email_err = false;
            return false;
        } 
        else if (exp.test(email) == false) 
        {
            $(".email-msg").html("invalid email, email must contain @ , . !(example@gmail.com)!").addClass("text-danger");
            email_err = false;
            return false;
        } 
        else 
        {
            $(".email-msg").html("ok !!").removeClass("text-danger").addClass("text-success");
            email_err = true;
            //submit();
            return true;
        }
    }



    //phone
    $('#phno').keyup(function () 
    {
        phone_check();
    });
    function phone_check() 
    {

        let phone = $(".phno").val();

        if (phone == "" || phone == undefined) 
        {
            $(".phno-msg").html("phone number is required!!").addClass("text-danger");
            f = false;
            phone_err = false;
            return false;

        } 
        else if (phone.length == 10) 
        {
            $(".phno-msg").html("valid").removeClass("text-danger").addClass("text-success");
            phone_err = true;
            //submit();
            return true;
        } 
        else 
        {
            $(".phno-msg").html("phone no is invalid").addClass("text-danger");
            $('#phno').keypress(function (e) 
            {
                var a = [];
                var k = e.which;

                for (i = 48; i < 58; i++)
                    a.push(i);

                if (!(a.indexOf(k) >= 0))
                    e.preventDefault();
            });

            f = false;
            phone_err = false;
            return false;
        }
    }
    /*
    //img
    $('#image').change(function () 
    {
        image_check();
    });

    function image_check() 
    {
        var image = $('#image').val();
        if (image == '' || image == undefined) 
        {
            $(".image-msg").show();
            $(".image-msg").html("choose one file!");
            $(".image-msg").focus();
            image_err = false;
            return false;
        } 
        else 
        {
            $(".image-msg").hide();
        }

        if (image.file[0].size / (1024 * 1024) >= 2) 
        {
            $(".image-msg").show();
            $(".image-msg").html("image size is larger than 2mb!");
            $(".image-msg").focus();
            image_err = false
            return false;
        } 
        else 
        {
            alert(image.file[0].size);
            image_err = true;
            return true;
        }
    }
*/
    //password
    $('#pwd').keyup(function () 
    {
        password_check();
    });
    function password_check() 
    {

        var password = $(".pwd").val();
        let exp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,15})/;
        if (password == '' || password == undefined) 
        {
            $('.pwd-msg').html("Password is required!!").addClass("text-danger");
            f = false;
            pass_err = false;
            return false;
        } 
        else if (exp1.test(password) == false) 
        {
            $('.pwd-msg').html("Password is invalid, it must contain atleast 1 uppercase char, 1 lowercase char,  1 digit and length must 6-15!!").addClass("text-danger");
            f = false;
            pass_err = false;
            return false;
        } 
        else 
        {
            $('.pwd-msg').html("OK!!").removeClass("text-danger").addClass("text-success");
             f = true;
             pas_err=true;
             //submit();
             return true;


        }
    }

    //confirm pass
    $('#cpwd').keyup(function () 
    {
        conpassword_check();
    });
    function conpassword_check() 
    {
        let cpassword = $(".cpwd").val();
        if (cpassword == '' || cpassword == undefined) 
        {
            $('.cpwd-msg').html("Password is required!!").addClass("text-danger");
            cpass_err = false;
            return false;
        } 
         
        else if   (cpassword != $(".pwd").val())
        {
            $('.cpwd-msg').html("invalid!!").removeClass("text-danger").addClass("text-danger");
            //alert(cpassword);
            f = true;
            cpass_err = false;
            return false;

        }
        else 
        {
            $('.cpwd-msg').html("password matched!!!").removeClass("text-danger").addClass("text-success");
            cpass_err = true;
            //submit();
            return true;
        }
    }
    //address
    $('#addr').keypress(function () 
    {
        addr_check();
    });
    function addr_check() 
    {
        let addr = $(".addr").val();
        let alpha = /^[A-Za-z0-9 ]+$/;
        if (addr == "" || addr == undefined) 
        {
            $('.addr-msg').html("Address is required").addClass("text-danger")
            lname_err = false;
            return false;
        }
        else if (alpha.test(addr) == false) 
        {
            $(".addr-msg").html("alphabets and Numbers only!").addClass("text-danger");
            $('#addr').keypress(function (e) 
            {
                var regex = new RegExp(/^[a-zA-Z0-9 ]+$/);
                var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
                if (regex.test(str)) 
                {
                    return true;
                }
                else 
                {
                    e.preventDefault();
                    return false;
                }
            });
            addr_err = false;
            return false;
        } 
        else
        {
            $('.addr-msg').html("ok").removeClass("text-danger").addClass("text-success");
            lname_err = true;
            //submit();
            return true;
        }
    }

    //flag
    $('#flag').keypress(function () 
    {
        flag_check();
    });
    function flag_check() 
    {
        let flag = $(".flag").val();
        let alpha = /^[A-Za-z]+$/;
        if (flag == "" || flag == undefined) 
        {
            $('.flag-msg').html("Nationality is required").addClass("text-danger")
            lname_err = false;
            return false;
        }
        else if (alpha.test(flag) == false) 
        {
            $(".flag-msg").html("alphabets only!").addClass("text-danger");
            $('#flag').keypress(function (e) 
            {
                var regex = new RegExp(/^[a-zA-Z]+$/);
                var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
                if (regex.test(str)) 
                {
                    return true;
                }
                else 
                {
                    e.preventDefault();
                    return false;
                }
            });
            flag_err = false;
            return false;
        } 
        else 
        {
            $('.flag-msg').html("ok").removeClass("text-danger").addClass("text-success");
            flag_err = true;
            //submit();
            return true;
        }
    }

    //job
    $('#job').keypress(function () 
    {
        job_check();
    });
    function job_check() 
    {
        let job = $(".job").val();
        let alpha = /^[A-Za-z ]+$/;
        if (job == "" || job == undefined) 
        {
            $('.job-msg').html("Job Title is required").addClass("text-danger")
            job_err = false;
            return false;


        }
        else if (alpha.test(job) == false) 
        {
            $(".job-msg").html("alphabets only!").addClass("text-danger");
            $('#job').keypress(function (e) 
            {
                var regex = new RegExp(/^[a-zA-Z ]+$/);
                var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
                if (regex.test(str)) 
                {
                    return true;
                }
                else 
                {
                    e.preventDefault();
                    return false;
                }
            });
            job_err = false;
            return false;
        } 
        else
        {
            $('.job-msg').html("ok").removeClass("text-danger").addClass("text-success");
            job_err = true;
            //submit();
            return true;
        }
    }

    //org
    $('#org').keypress(function () 
    {
        org_check();
    });
    function org_check() 
    {
        let org = $(".org").val();
        let alpha = /^[A-Za-z0-9 ]+$/;
        if (job == "" || job == undefined) 
        {
            $('.org-msg').html("Organization name is required").addClass("text-danger")
            org_err = false;
            return false;
        } 
        else if (alpha.test(org) == false) 
        {
            $(".org-msg").html("alphabets only!").addClass("text-danger");
            $('#org').keypress(function (e) 
            {
                var regex = new RegExp(/^[a-zA-Z0-9 ]+$/);
                var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
                if (regex.test(str)) 
                {
                    
                    return true;
                }
                else 
                {
                    e.preventDefault();
                    return false;
                }
            });
            org_err = false;
            return false;
        } 
        else 
        {
            $('.org-msg').html("ok").removeClass("text-danger").addClass("text-success");
            org_err = true;
            //submit();
            return true;
        
        }
    }

    //submit
    $("#mf").submit(function () 
    {
        submit();
    });
    

    function submit()
    {
        fname_err= true;
        lname_err =true;
        email_err =true;
        phone_err=true;
        image__err=true;
        pass_err =true;
        cpass_err =true;
        image__err=true;
        addr_err=true;
        flag_err=true;
        job_err=true;
        org_err=true;
        //image_err=true;


        fname_check();
        lname_check();
        email_check();
        phone_check();
        password_check();
        conpassword_check();
        addr_check();
        flag_check();
        job_check();
        org_check();
        //image_check();
        
        if ((fname_err == true) && (lname_err == true) && (email_err == true) && (phone_err == true) && (pass_err == true) && (cpass_err == true) && (addr_err == true) && (flag_err == true) && (job_err == true) && (org_err == true)) 
        {
            //document.getElementById("submit").disabled=false;  
            alert("submitting"); 
            return true;
            
        } 
        else
        {
            //document.getElementById("submit").disabled=true;
            alert("not submitting");
            alert(fname_err + lname_err + email_err+ phone_err+ pass_err+ cpass_err+ addr_err+ flag_err+ job_err+ org_err);
            $("#mf").preventDefault();
            history.back();
            return false;
        }
    }
});
