<?php

	require "libs/PHPMailer/Exception.php";
	require "libs/PHPMailer/OAuthTokenProvider.php";
	require "libs/PHPMailer/OAuth.php";
	require "libs/PHPMailer/PHPMailer.php";
	require "libs/PHPMailer/POP3.php";
	require "libs/PHPMailer/SMTP.php";

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	class Mensagem {
		private $para = null;
		private $assunto = null;
		private $mensagem = null;
		public $status = array('codigo_status' => null, 'descricao_status' => null);

		public function __get($attr) {
			return $this->$attr;
		}

		public function __set($attr, $value) {
			$this->$attr = $value;
		}

		public function mensagemValida() {
			if (empty($this->para) OR empty($this->assunto) OR empty($this->mensagem)) {
				return false;
			}

			return true;
		}
	}

	$mensagem = new Mensagem();

	$mensagem->__set('para', $_POST['para']);
	$mensagem->__set('assunto', $_POST['assunto']);
	$mensagem->__set('mensagem', $_POST['mensagem']);

	if (!$mensagem->mensagemValida()) {
		header("Location: index.php");
	}

	$mail = new PHPMailer(true);

	try {
	    //Server settings
	    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
	    $mail->isSMTP();                                            //Send using SMTP
	    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
	    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	    $mail->Username   = //email;                     //SMTP username
	    $mail->Password   = //password;                               //SMTP password
	    $mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
	    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

	    //Recipients
	    $mail->setFrom('teste111222333@gmail.com', 'Teste'); //email, //name 
	    $mail->addAddress($mensagem->__get('para')); //Addarecipient              //Name is optional
	    //$mail->addReplyTo( email, 'Information');
	    //$mail->addCC('cc@example.com');
	    //$mail->addBCC('bcc@example.com');

	    //Attachments
	    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
	    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

	    //Content
	    $mail->isHTML(true);                                  //Set email format to HTML
	    $mail->Subject = $mensagem->__get('assunto');
	    $mail->Body    = $mensagem->__get('mensagem');
	    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	    $mail->send();
	    $mensagem->status['codigo_status'] = 1;
	    $mensagem->status['descricao_status'] = 'E-mail enviado com sucesso.';
	} catch (Exception $e) {
		$mensagem->status['codigo_status'] = 2;
	    $mensagem->status['descricao_status'] = 'Não foi possível enviar este e-mail. <br> Detalhes do erro: ' . $mail->ErrorInfo;
	}

?>

<html>
	<head>
		<meta charset="utf-8" />
    	<title>App Mail Send</title>

    	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

	</head>

	<body>

		<div class="container">  

			<div class="py-3 text-center">
				<img class="d-block mx-auto mb-2" src="logo.png" alt="" width="72" height="72">
				<h2>Send Mail</h2>
				<p class="lead">Seu app de envio de e-mails particular!</p>
			</div>

			<div class="container">
				
				<?php if ($mensagem->status['codigo_status'] == 1) { ?>

					<h1 class="display-4 text-success">Sucesso!</h1>
					<p><?= $mensagem->status['descricao_status'] ?></p>
					<a href="index.php" class="btn btn-success btn-lg">
						Voltar
					</a>

				<?php } ?>

				<?php if ($mensagem->status['codigo_status'] == 2) { ?>

					<h1 class="display-4 text-danger">Ops!</h1>
					<p><?= $mensagem->status['descricao_status'] ?></p>
					<a href="index.php" class="btn btn-danger btn-lg">
						Voltar
					</a>

				<?php } ?>

			</div>
		</div>
	</body>
</html>	