<?php

if(isset($_POST['email']) && !empty($_POST['email'])){
    $nome = addcslashes($_POST['name']);
    $email = addcslashes($_POST['email']);
    $mensagem = addcslashes($_POST['message']);
    $subject = addcslashes($_POST['subject']);

    $to = "teste@inbrafe.com.br";
    $body = "Nome: " .$nome. "\r\n"."Email: " .$email. "\r\n"."Mensagem" .$mensagem;
    $header = "From: testematheus@inbrafe.com.br"."\r\n"."Reply-To :".$email."\r\n"."X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){
        echo("Email enviado com sucesso.");

    }
    else{
        echo("Email não pode ser enviado.");
    }   
}
?>
