<?php

$name_error = $email_error = $phone_error = $message_error = "";
$name = $email = $phone = $success = "";

//form submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
        $name_error = "Please enter your name";
} else {
        $name = test_input($_POST["name"]);
        if(!preg_match("/^[a-zA-Z ]*$/",$name)) {
            $name_error = "Only letters and whitespace allowed";
        }
    }

    if(empty($_POST["email"])) {
        $email_error = "Please enter your Email";
    } else {
        $email = test_input($_POST["email"]);
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $email_error = "Invalid email format";
        }
    }

    if(empty($_POST["message"])) {
        $message = "";
    } else {
        $message = test_input($_POST["message"]);
    }

    if($name_error == "" and $email_error == ""){
        $message_body = "";
        unset($_POST["submit"]);
        foreach ($_POST as $key => $value){
            $message_body .= "$key: $value\n";
        }

        $to = "office@atelierbuchner.at";
        $subject = "Contact Form Submit";
        if (mail($to, $subject, $message, $email, $name)){
            $success = "Message sent, thank you!";
            $name = $email = $phone = $message = "";
        }

    }


}    

function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
        }

        ?>