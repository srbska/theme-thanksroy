<?php
$to      = 'e.silverton@gmail.com';
$subject = 'srbska test';
$message = 'test';
$headers = 'From: noreply@srbska.org' . "\r\n" .
    'Reply-To: noreply@srbska.org' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>