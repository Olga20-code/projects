<?php

if (!empty($_POST['email']) ) {
    $return_message = "";
    $to = "surikova.work@gmail.com";

    $name = $_POST['name'];
    $name = trim($name);
    $name = htmlspecialchars($name);

    $email = $_POST['email'];
    $email = trim($email);
    $email = htmlspecialchars($email);

    $company = $_POST['company'];
    $company = trim($company);
    $company = htmlspecialchars($company);

    $text = $_POST['text'];
    $text = trim($text);
    $text = htmlspecialchars($text);

    $subject = $_POST['subject'];
    $subject = trim($subject);
    $subject = htmlspecialchars($subject);

    $message = "
    <html> 
        <head> 
            <title>$subject</title> 
        </head> 
        <body>
          <table>
            <tr><td><b>Name: </b></td><td>$name</td></tr>

            <tr><td><b>Email: </b></td><td>$email</td></tr>

            <tr><td><b>Company: </b></td><td>$company</td></tr>

            <tr><td><b>Message: </b></td><td>$text</td></tr>

            <tr><td><b>Subject: </b></td><td>$subject</td></tr>
          </table>
        </body> 
    </html>"; 

    $headers = "From: noreply@website.com/\r\n";
    $headers .= "Content-type: text/html; charset=utf-8 \r\n";
    $send_mail = mail($to, 'Contact form', $message, $headers); 

    if ( $send_mail ) {
      $return_message = "mail success";
    }
    else {
      $return_message = "mail error";
    }
    echo $return_message;
  }

exit();
?>