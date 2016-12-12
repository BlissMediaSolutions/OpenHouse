<?php
if(isset($_POST['submit']))
{
$message=
'First Name:	'.$_POST['firstname'].'<br />
Last Name:	'.$_POST['lastname'].'<br />
Phone:	'.$_POST['phone'].'<br />
Email:	'.$_POST['emailid'].'<br />
Comments:	'.$_POST['message'].'
';
    require "php/class.phpmailer.php"; //include phpmailer class

    // Instantiate Class
    $mail = new PHPMailer();

    // Set up SMTP
    $mail->IsSMTP();                // Sets up a SMTP connection
    $mail->SMTPAuth = true;         // Connection with the SMTP does require authorization
    $mail->SMTPSecure = "ssl";      // Connect using a TLS connection
    $mail->Host = "smtp.gmail.com";  //Gmail SMTP server address
    $mail->Port = 465;  //Gmail SMTP port
    $mail->Encoding = '7bit';

    // Authentication
    $mail->Username   = "webmaster@openhousecic.org.au"; // Your full Gmail address
    $mail->Password   = "*******"; // Your Gmail password

    // Compose
    $mail->SetFrom($_POST['emailid'], $_POST['firstname'], $_POST['lastname']);
    $mail->AddReplyTo($_POST['emailid'], $_POST['firstname'], $_POST['lastname']);
    $mail->Subject = "New Contact Form Enquiry";      // Subject (which isn't required)
    $mail->MsgHTML($message);

    // Send To
    $mail->AddAddress("info@bliss.net.au", "Web Contact"); // Where to send it - Recipient
    $result = $mail->Send();		// Send!
	$message = $result ? '<div class="alert alert-success" role="alert"><strong>Success!</strong>Message Sent Successfully!</div>' : '<div class="alert alert-danger" role="alert"><strong>Error!</strong>There was a problem delivering the message.</div>';
	unset($mail);
}
?>
