function Dado_aleatorio() {
    const random = Math.floor(Math.random() * 6) + 1;
    console.log(random);

    return random;
}

function Operacao_aleatoria() {

  //numeros seguem a ordem: 1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão
  //const operations = ['+', '-', '*', '/'];

  const operations = [1,2,3,4];

  const randomIndex = Math.floor(Math.random() * 4);
  const operacao = operations[randomIndex];
  console.log(operacao);

  return operacao;

}

function Rodar_operacao_1() {

  var random = Operacao_aleatoria();

  if (random == 1) {
    document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_soma.png'/>";
  }
  else if (random == 2) {
    document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_subtracao.png'/>";
  }
  else if (random == 3) {
    document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_multiplicacao.png'/>";
  }
  else if (random == 4) {
    document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_divisao.png'/>";
  }
}

function Rodar_operacao_2() {

  var random = Operacao_aleatoria();

  if (random == 1) {
    document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_soma.png'/>";
  }
  else if (random == 2) {
    document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_subtracao.png'/>";
  }
  else if (random == 3) {
    document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_multiplicacao.png'/>";
  }
  else if (random == 4) {
    document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_divisao.png'/>";
  }
}

function Rodar_dado_1() {
  
  var random = Dado_aleatorio();

  if (random == 1) {
    document.getElementById("dado_1").innerHTML = "<img src='face1.png'/>";
  }
  else if (random == 2) {
    document.getElementById("dado_1").innerHTML = "<img src='face2.png'/>";
  }
  else if (random == 3) {
    document.getElementById("dado_1").innerHTML = "<img src='face3.png'/>";
  }
  else if (random == 4) {
    document.getElementById("dado_1").innerHTML = "<img src='face4.png'/>";
  }
  else if (random == 5) {
    document.getElementById("dado_1").innerHTML = "<img src='face5.png'/>";
  }
  else if (random == 6) {
    document.getElementById("dado_1").innerHTML = "<img src='face6.png'/>";
  }
}

function Rodar_dado_2() {
  
  var random = Dado_aleatorio();

  if (random == 1) {
    document.getElementById("dado_2").innerHTML = "<img src='face1.png'/>";
  }
  else if (random == 2) {
    document.getElementById("dado_2").innerHTML = "<img src='face2.png'/>";
  }
  else if (random == 3) {
    document.getElementById("dado_2").innerHTML = "<img src='face3.png'/>";
  }
  else if (random == 4) {
    document.getElementById("dado_2").innerHTML = "<img src='face4.png'/>";
  }
  else if (random == 5) {
    document.getElementById("dado_2").innerHTML = "<img src='face5.png'/>";
  }
  else if (random == 6) {
    document.getElementById("dado_2").innerHTML = "<img src='face6.png'/>";
  }

}

function Rodar_dado_3() {
  
  var random = Dado_aleatorio();

  if (random == 1) {
    document.getElementById("dado_3").innerHTML = "<img src='face1.png'/>";
  }
  else if (random == 2) {
    document.getElementById("dado_3").innerHTML = "<img src='face2.png'/>";
  }
  else if (random == 3) {
    document.getElementById("dado_3").innerHTML = "<img src='face3.png'/>";
  }
  else if (random == 4) {
    document.getElementById("dado_3").innerHTML = "<img src='face4.png'/>";
  }
  else if (random == 5) {
    document.getElementById("dado_3").innerHTML = "<img src='face5.png'/>";
  }
  else if (random == 6) {
    document.getElementById("dado_3").innerHTML = "<img src='face6.png'/>";
  }
}

function main(){

  Rodar_dado_1();
  Rodar_dado_2();
  Rodar_dado_3();
  Rodar_operacao_1();
  Rodar_operacao_2();
  
}

main();

function Movimentar_tampinha_1() {

  var index = 10;

  if (index == 0) {
    document.getElementById("tampinha_1").style.marginTop = "0px";
  }
  else if (index == 1) {
    document.getElementById("tampinha_1").style.marginTop = "-4%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (index == 2) {
    document.getElementById("tampinha_1").style.marginTop = "-8.5%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (index == 3) {
    document.getElementById("tampinha_1").style.marginTop = "-12.5%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (index == 4) {
    document.getElementById("tampinha_1").style.marginTop = "-17%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (index == 5) {
    document.getElementById("tampinha_1").style.marginTop = "-21%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (index == 6) {
    document.getElementById("tampinha_1").style.marginTop = "-25.5%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (index == 7) {
    document.getElementById("tampinha_1").style.marginTop = "-29.5%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (index == 8) {
    document.getElementById("tampinha_1").style.marginTop = "-33.5%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (index == 9) {
    document.getElementById("tampinha_1").style.marginTop = "-38%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (index == 10) {
    document.getElementById("tampinha_1").style.marginTop = "-42%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
}

function Movimentar_tampinha_2() {

  var index = 0;


  if (index == 0) {
    document.getElementById("tampinha_2").style.marginTop = "0px";
  }
  else if (index == 1) {
    document.getElementById("tampinha_2").style.marginTop = "-4%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (index == 2) {
    document.getElementById("tampinha_2").style.marginTop = "-8.5%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (index == 3) {
    document.getElementById("tampinha_2").style.marginTop = "-12.5%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (index == 4) {
    document.getElementById("tampinha_2").style.marginTop = "-17%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (index == 5) {
    document.getElementById("tampinha_2").style.marginTop = "-21%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (index == 6) {
    document.getElementById("tampinha_2").style.marginTop = "-25.5%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (index == 7) {
    document.getElementById("tampinha_2").style.marginTop = "-29.5%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (index == 8) {
    document.getElementById("tampinha_2").style.marginTop = "-33.5%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (index == 9) {
    document.getElementById("tampinha_2").style.marginTop = "-38%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (index == 10) {
    document.getElementById("tampinha_2").style.marginTop = "-42%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
}

function Movimentar_tampinha_3() {

  var index = 0;


  if (index == 0) {
    document.getElementById("tampinha_3").style.marginTop = "0px";
  }
  else if (index == 1) {
    document.getElementById("tampinha_3").style.marginTop = "-4%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (index == 2) {
    document.getElementById("tampinha_3").style.marginTop = "-8.5%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (index == 3) {
    document.getElementById("tampinha_3").style.marginTop = "-12.5%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (index == 4) {
    document.getElementById("tampinha_3").style.marginTop = "-17%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (index == 5) {
    document.getElementById("tampinha_3").style.marginTop = "-21%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (index == 6) {
    document.getElementById("tampinha_3").style.marginTop = "-25.5%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (index == 7) {
    document.getElementById("tampinha_3").style.marginTop = "-29.5%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (index == 8) {
    document.getElementById("tampinha_3").style.marginTop = "-33.5%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (index == 9) {
    document.getElementById("tampinha_3").style.marginTop = "-38%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (index == 10) {
    document.getElementById("tampinha_3").style.marginTop = "-42%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
}

function Movimentar_tampinha_4() {

  var index = 0;


  if (index == 0) {
    document.getElementById("tampinha_4").style.marginTop = "0px";
  }
  else if (index == 1) {
    document.getElementById("tampinha_4").style.marginTop = "-4%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (index == 2) {
    document.getElementById("tampinha_4").style.marginTop = "-8.5%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (index == 3) {
    document.getElementById("tampinha_4").style.marginTop = "-12.5%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (index == 4) {
    document.getElementById("tampinha_4").style.marginTop = "-17%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (index == 5) {
    document.getElementById("tampinha_4").style.marginTop = "-21%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (index == 6) {
    document.getElementById("tampinha_4").style.marginTop = "-25.5%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (index == 7) {
    document.getElementById("tampinha_4").style.marginTop = "-29.5%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (index == 8) {
    document.getElementById("tampinha_4").style.marginTop = "-33.5%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (index == 9) {
    document.getElementById("tampinha_4").style.marginTop = "-38%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (index == 10) {
    document.getElementById("tampinha_4").style.marginTop = "-42%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
}

function Movimentar_tampinha_5() {

  var index = 0;


  if (index == 0) {
    document.getElementById("tampinha_5").style.marginTop = "0px";
  }
  else if (index == 1) {
    document.getElementById("tampinha_5").style.marginTop = "-4%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (index == 2) {
    document.getElementById("tampinha_5").style.marginTop = "-8.5%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (index == 3) {
    document.getElementById("tampinha_5").style.marginTop = "-12.5%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (index == 4) {
    document.getElementById("tampinha_5").style.marginTop = "-17%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (index == 5) {
    document.getElementById("tampinha_5").style.marginTop = "-21%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (index == 6) {
    document.getElementById("tampinha_5").style.marginTop = "-25.5%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (index == 7) {
    document.getElementById("tampinha_5").style.marginTop = "-29.5%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (index == 8) {
    document.getElementById("tampinha_5").style.marginTop = "-33.5%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (index == 9) {
    document.getElementById("tampinha_5").style.marginTop = "-38%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (index == 10) {
    document.getElementById("tampinha_5").style.marginTop = "-42%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
}