<?php

  // Support for this PHP code & using PHPMailer can be found here:
  // http://stackoverflow.com/questions/16048347/send-email-using-gmail-smtp-server-through-php-mailer
  // Note: Angular or AJAX should be used on the front end to execute the PHP Script.

  require_once ("class.phpmailer.php");   // Include phpmailer class

  $message=
  'First Name:	'.$_POST['firstname'].'<br />
  Last Name:	'.$_POST['lastname'].'<br />
  Phone:	'.$_POST['phone'].'<br />
  Email:	'.$_POST['emailid'].'<br />
  Comments:	'.$_POST['message'].'
  ';

  $mail = new PHPMailer();        // Instantiate the PHPMailer Class
  $mail->IsSMTP();                // enable SMTP
  $mail->SMTPDebug = 1;           // debugging: 1 = errors and messages, 2 = messages only
  $mail->SMTPAuth = true;         // SMTP authentication enabled
  $mail->SMTPSecure = 'ssl';      // secure transfer enabled + REQUIRED for Gmail (either SSL or TLS)
  $mail->Host = "smtp.gmail.com"; //Gmail SMTP Server to relay thru
  $mail->Port = 465; // Port 465 as we're using SSL... or use Port 587 for TLS
  $mail->IsHTML(true);                               // We're sending a HTML formatted message
  $mail->Username = "webmaster@openhousecic.org.au"; // Gmail account for authentication
  $mail->Password = "*********";                     // Gmail password for authentication
  $mail->SetFrom("webmaster@openhousecic.org.au");   // The email is being sent from this address
  $mail->Subject = "Website Contact Form Enquiry";   // The subject line of the email
  $mail->Body = ($message);                          // The actual email message to be sent
  $mail->AddAddress("office@openhousecic.org.au"); // The email is being sent to this address

 if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
    echo "Message has been sent";
 }

 ?>
