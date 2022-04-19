<?php 
	
	session_start();

	$usuario_autenticado = false;
	$usuario_id = null;
	$usuario_perfil_id = null;

	$perfis = array(1 => 'Administrativo', 2 => 'Usuário');

	$usuarios = array(
		array('id' => 1, 'email' => 'usuario@adm.com.br', 'senha' => '123', 'perfil_id' => 1),
		array('id' => 2, 'email' => 'usuario@user.com.br', 'senha' => '123', 'perfil_id' => 2),
		array('id' => 3, 'email' => 'andre@adm.com.br', 'senha' => '123', 'perfil_id' => 1)
	);

	foreach($usuarios as $user) {
		if ($user['email'] === $_POST['email'] AND $user['senha'] === $_POST['senha']) {
			$usuario_autenticado = true;
			$usuario_id = $user['id'];
			$usuario_perfil_id = $user['perfil_id'];
		} 	
	}

	if ($usuario_autenticado) {
		$_SESSION['autenticado'] = 'SIM';
		$_SESSION['id'] = $usuario_id;
		$_SESSION['perfil_id'] = $usuario_perfil_id;
		header('Location: home.php');
	} else {
		$_SESSION['autenticado'] = 'NAO';
		header('Location: index.php?login=erro');
		}
	
?>