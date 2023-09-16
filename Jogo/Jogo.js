function randomDice() {
    const random = Math.floor(Math.random() * 6) + 1;
    console.log(random);

    return random;
}

function randomOperation() {

  //numeros seguem a ordem: 1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão
  //const operations = ['+', '-', '*', '/'];

  const operations = [1,2,3,4];

  const randomIndex = Math.floor(Math.random() * 4);
  const operacao = operations[randomIndex];
  console.log(operacao);

  return operacao;

}

function Rodaroperacao1() {

  var random = randomOperation();

  if (random == 1) {
    document.getElementById("ponteiro1").innerHTML = "<img src='ponteiro_soma.png'/>";
  }
  else if (random == 2) {
    document.getElementById("ponteiro1").innerHTML = "<img src='ponteiro_subtracao.png'/>";
  }
  else if (random == 3) {
    document.getElementById("ponteiro1").innerHTML = "<img src='ponteiro_multiplicacao.png'/>";
  }
  else if (random == 4) {
    document.getElementById("ponteiro1").innerHTML = "<img src='ponteiro_divisao.png'/>";
  }
}

function Rodaroperacao2() {

  var random = randomOperation();

  if (random == 1) {
    document.getElementById("ponteiro2").innerHTML = "<img src='ponteiro_soma.png'/>";
  }
  else if (random == 2) {
    document.getElementById("ponteiro2").innerHTML = "<img src='ponteiro_subtracao.png'/>";
  }
  else if (random == 3) {
    document.getElementById("ponteiro2").innerHTML = "<img src='ponteiro_multiplicacao.png'/>";
  }
  else if (random == 4) {
    document.getElementById("ponteiro2").innerHTML = "<img src='ponteiro_divisao.png'/>";
  }
}

function Rodardado1() {
  
  var random = randomDice();

  if (random == 1) {
    document.getElementById("dado1").innerHTML = "<img src='face1.png'/>";
  }
  else if (random == 2) {
    document.getElementById("dado1").innerHTML = "<img src='face2.png'/>";
  }
  else if (random == 3) {
    document.getElementById("dado1").innerHTML = "<img src='face3.png'/>";
  }
  else if (random == 4) {
    document.getElementById("dado1").innerHTML = "<img src='face4.png'/>";
  }
  else if (random == 5) {
    document.getElementById("dado1").innerHTML = "<img src='face5.png'/>";
  }
  else if (random == 6) {
    document.getElementById("dado1").innerHTML = "<img src='face6.png'/>";
  }
}

function Rodardado2() {
  
  var random = randomDice();

  if (random == 1) {
    document.getElementById("dado2").innerHTML = "<img src='face1.png'/>";
  }
  else if (random == 2) {
    document.getElementById("dado2").innerHTML = "<img src='face2.png'/>";
  }
  else if (random == 3) {
    document.getElementById("dado2").innerHTML = "<img src='face3.png'/>";
  }
  else if (random == 4) {
    document.getElementById("dado2").innerHTML = "<img src='face4.png'/>";
  }
  else if (random == 5) {
    document.getElementById("dado2").innerHTML = "<img src='face5.png'/>";
  }
  else if (random == 6) {
    document.getElementById("dado2").innerHTML = "<img src='face6.png'/>";
  }

}

function Rodardado3() {
  
  var random = randomDice();

  if (random == 1) {
    document.getElementById("dado3").innerHTML = "<img src='face1.png'/>";
  }
  else if (random == 2) {
    document.getElementById("dado3").innerHTML = "<img src='face2.png'/>";
  }
  else if (random == 3) {
    document.getElementById("dado3").innerHTML = "<img src='face3.png'/>";
  }
  else if (random == 4) {
    document.getElementById("dado3").innerHTML = "<img src='face4.png'/>";
  }
  else if (random == 5) {
    document.getElementById("dado3").innerHTML = "<img src='face5.png'/>";
  }
  else if (random == 6) {
    document.getElementById("dado3").innerHTML = "<img src='face6.png'/>";
  }
}
  
function main(){

  Rodardado1();
  Rodardado2();
  Rodardado3();
  Rodaroperacao1();
  Rodaroperacao2();
  
}

main();