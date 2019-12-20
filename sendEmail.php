<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "";
    $to = "lewis00001@gmail.com";
    $subject = "";
    $message = "";
    $headers = "From:" . $from;
    mail($to, $subject, $message, $headers);
    echo "<div class='e-conf' style='margin: auto;'><div>The email message was sent.</div>" +
    "<a href='http://lockhart-workroom.com'><div class='e-button'>Return</a></div>";
?>