<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

date_default_timezone_set('America/Sao_Paulo');

$data = file_get_contents("php://input");
$objData = json_decode($data);

$nome = $objData->nome;
$codigo = $objData->codigo;
$qtd = $objData->qtd;
//$foto = $objData->foto;
$valor = $objData->valor;
$descricao = $objData->descricao;
//$idempresa = $objData->idempresa;
$idusuario = $objData->idusuario;

$nome = stripslashes($nome);
$qtd = stripslashes($qtd);
$codigo = stripslashes($codigo);
//$foto = stripslashes($foto);
$valor = stripslashes($valor);
$descricao = stripslashes($descricao);
//$status = stripslashes($status);
//$idempresa = stripslashes($idempresa);
$idusuario = stripslashes($idusuario);

$nome = trim($nome);
$qtd = trim($qtd);
$codigo = trim($codigo);
//$foto = trim($foto);
$valor = trim($valor);
$descricao = trim($descricao);
//$idempresa = trim($idempresa);

$dados; 

require_once 'config.php';


if($conexao){
    $Sql = " update produto set nome_prod = '$nome', quatidade_prod = $qtd, descricao_prod='$descricao', valor_prod=$valor where idproduto = $codigo";

   printf($Sql);
    $query = $conexao->prepare($Sql);
    $query ->execute();

    echo 'produto editado com sucesso';
   
}else{
      $dados = array('mensage' => "Não foi possivel editar os dados! Tente novamente mais tarde.");
      echo json_encode($dados);
};

?>