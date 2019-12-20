<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "userEmail";
    $to = "lewis00001@gmail.com";
    $subject = "Contact";
    $message = "no text added";
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "The email message was sent.";
?>