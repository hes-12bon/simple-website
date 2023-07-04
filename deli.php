<?php
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone'];
    $date = $_POST['date'];

    $whatsappMessage = urlencode("Full Name: $name \n\nEmail Adress: $email\n\nPhone Number:  $phone_number\n\nBirth Date: $date");

    $whatsappLink = "https://wa.me/+254746 783389?text= document.write($whatsappMessage)";

    header("Location: $whatsappLink");
    exit;
}
?>