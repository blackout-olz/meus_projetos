<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <style>
      .card-login {
        padding: 30px 0 0 0;
        width: 350px;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>

    <nav class="navbar navbar-dark bg-dark">
    	<div class="container">
	      <a class="navbar-brand" href="#">
	        <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
	        App Help Desk
	      </a>
      	</div>
    </nav>

    <div class="container">    
      <div class="row">

        <div class="card-login">
          <div class="card">
            <div class="card-header">
              Login
            </div>
            <div class="card-body">
              <form action="validacao.php" method="post">
                <div class="form-group">
                  <input name="email" type="email" class="form-control" placeholder="E-mail">
                </div>
                <div class="form-group">
                  <input name="senha" type="password" class="form-control mt-2" placeholder="Senha">
                </div>

                <?php 
                	if (isset($_GET['login']) AND $_GET['login'] === 'erro') {
                ?>

                <div class="text-danger ms-5">Usuário e/ou senha inválidos</div>

            	<?php } ?>

            	<?php 
                	if (isset($_GET['login']) AND $_GET['login'] === 'erro2') {
                ?>

                <div class="text-warning ms-5">Inicie sua sessão para conseguir acessar outras páginas da aplicação</div>

            	<?php } ?>

                <button class="btn btn-dark btn-lg form-control text-light mt-3" type="submit">Entrar</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  </body>
</html>