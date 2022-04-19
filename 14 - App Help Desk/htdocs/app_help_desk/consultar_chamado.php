<?php require_once("validador_de_acesso.php") ?>

<?php

  $chamados = array();

  $arquivo = fopen('../../app_help_desk/arquivo.hd', 'r');

  while (!feof($arquivo)) {

    $registro = fgets($arquivo);

    if ($_SESSION['perfil_id'] == 2) {
      $registro_array = explode('#', $registro);

      if ($registro_array[0] != $_SESSION['id']) {
        continue;
      }
     }

    $chamados[] = $registro;

  }

?>

<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <style>
      .card-consultar-chamado {
        padding: 30px 0 0 0;
        width: 100%;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>

    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="home.php">
          <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
          App Help Desk
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="logoff.php">Encerrar sessão</a>
          </li>
        </ul>
        </div>
    </nav>

    <div class="container">    
      <div class="row">

        <div class="card-consultar-chamado">
          <div class="card">
            <div class="card-header">
              Consulta de chamado
            </div>
            
            <div class="card-body">

              <?php foreach($chamados as $chamado) { ?>
              <?php 
                $chamado_dados = explode('#', $chamado);

                if (count($chamado_dados) < 3) {
                  continue;
                }
              ?>

              <div class="card mb-3 bg-light">
                <div class="card-body">
                  <h5 class="card-title"><?= $chamado_dados[1] ?></h5>
                  <h6 class="card-subtitle mb-2 text-muted"><?= $chamado_dados[2] ?></h6>
                  <p class="card-text"><?= $chamado_dados[3] ?></p>

                </div>
              </div>

              <?php } ?>

              <div class="row mt-5">
                <div class="col-6">
                  <a class="btn btn-lg btn-warning btn-block" href="home.php">Voltar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>