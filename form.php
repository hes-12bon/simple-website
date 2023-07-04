<?php
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone'];

    $whatsappMessage = urlencode("Hey Moreen,I wanna join you....\n\nName: $name \n\nEmail: $email\n
    \nPhone Number:  $phone_number");

    $whatsappLink = "https://wa.me/+254 746 783389?text= ($whatsappMessage)";

    header("Location: $whatsappLink");
    exit;
}
?>