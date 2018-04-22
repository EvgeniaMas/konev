<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$email = $_POST['user_mail'];
$name = $_POST['user_name'];
$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';																		
$mail->SMTPAuth = true;                               
$mail->Username = 'mftranzit@mail.ru'; 
$mail->Password = 'Bus2018advert'; 
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; 
$mail->setFrom('mftranzit@mail.ru'); 
$mail->addAddress('mf-transit@yandex.ru'); 
$mail->isHTML(true);                                
$mail->Subject = 'Новая заявка';
$mail->Body    = 'Посетитель по имени '  .$name . ' оставил(а) заявку на получение прайс-листа, ее(его) email  ' .$email;
$mail->AltBody = '';
if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thanks.html');
}
?>