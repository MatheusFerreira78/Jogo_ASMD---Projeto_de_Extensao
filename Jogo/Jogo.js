function Dado_aleatorio() {
    const random = Math.floor(Math.random() * 6) + 1;

    return random;
}

function Operacao_aleatoria() {

  //numeros seguem a ordem: 1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão
  //const operations = ['+', '-', '*', '/'];

  const operations = [1,2,3,4];

  const randomIndex = Math.floor(Math.random() * 4);
  const operacao = operations[randomIndex];

  return operacao;

}
/*
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
} */

var Resposta_geral = 0;

function calcular() {
  
    var dado_1 = Dado_aleatorio();
    var dado_2 = Dado_aleatorio();
    var dado_3 = Dado_aleatorio();
    var operacao_1 = Operacao_aleatoria();
    var operacao_2 = Operacao_aleatoria();
    var resultado = 0;
    var resultado_2 = 0;
  
    if (operacao_1 == 1) {
      resultado = dado_1 + dado_2;
    }
    else if (operacao_1 == 2) {
      resultado = dado_1 - dado_2;
    }
    else if (operacao_1 == 3) {
      resultado = dado_1 * dado_2;
    }
    else if (operacao_1 == 4) {
      resultado = dado_1 / dado_2;
    }

    if (operacao_2 == 1) {
      resultado_2 = resultado + dado_3;
    }
    else if (operacao_2 == 2) {
      resultado_2 = resultado - dado_3;
    }
    else if (operacao_2 == 3) {
      resultado_2 = resultado * dado_3;
    }
    else if (operacao_2 == 4) {
      resultado_2 = resultado / dado_3;
    }

    if (dado_1 == 1) {
      document.getElementById("dado_1").innerHTML = "<img src='face1.png'/>";
    }
    else if (dado_1 == 2) {
      document.getElementById("dado_1").innerHTML = "<img src='face2.png'/>";
    }
    else if (dado_1 == 3) {
      document.getElementById("dado_1").innerHTML = "<img src='face3.png'/>";
    }
    else if (dado_1 == 4) {
      document.getElementById("dado_1").innerHTML = "<img src='face4.png'/>";
    }
    else if (dado_1 == 5) {
      document.getElementById("dado_1").innerHTML = "<img src='face5.png'/>";
    }
    else if (dado_1 == 6) {
      document.getElementById("dado_1").innerHTML = "<img src='face6.png'/>";
    }

    if (dado_2 == 1) {
      document.getElementById("dado_2").innerHTML = "<img src='face1.png'/>";
    }
    else if (dado_2 == 2) {
      document.getElementById("dado_2").innerHTML = "<img src='face2.png'/>";
    }
    else if (dado_2 == 3) {
      document.getElementById("dado_2").innerHTML = "<img src='face3.png'/>";
    }
    else if (dado_2 == 4) {
      document.getElementById("dado_2").innerHTML = "<img src='face4.png'/>";
    }
    else if (dado_2 == 5) {
      document.getElementById("dado_2").innerHTML = "<img src='face5.png'/>";
    }
    else if (dado_2 == 6) {
      document.getElementById("dado_2").innerHTML = "<img src='face6.png'/>";
    }

    if (dado_3 == 1) {
      document.getElementById("dado_3").innerHTML = "<img src='face1.png'/>";
    }
    else if (dado_3 == 2) {
      document.getElementById("dado_3").innerHTML = "<img src='face2.png'/>";
    }
    else if (dado_3 == 3) {
      document.getElementById("dado_3").innerHTML = "<img src='face3.png'/>";
    }
    else if (dado_3 == 4) {
      document.getElementById("dado_3").innerHTML = "<img src='face4.png'/>";
    }
    else if (dado_3 == 5) {
      document.getElementById("dado_3").innerHTML = "<img src='face5.png'/>";
    }
    else if (dado_3 == 6) {
      document.getElementById("dado_3").innerHTML = "<img src='face6.png'/>";
    }

    if (operacao_1 == 1) {
      document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_soma.png'/>";
    }
    else if (operacao_1 == 2) {
      document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_subtracao.png'/>";
    }
    else if (operacao_1 == 3) {
      document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_multiplicacao.png'/>";
    }
    else if (operacao_1 == 4) {
      document.getElementById("operacao_1").innerHTML = "<img src='ponteiro_divisao.png'/>";
    }
    
    if (operacao_2 == 1) {
      document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_soma.png'/>";
    }
    else if (operacao_2 == 2) {
      document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_subtracao.png'/>";
    }
    else if (operacao_2 == 3) {
      document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_multiplicacao.png'/>";
    }
    else if (operacao_2 == 4) {
      document.getElementById("operacao_2").innerHTML = "<img src='ponteiro_divisao.png'/>";
    }

    console.log(dado_1);
    console.log(operacao_1);
    console.log(dado_2);
    console.log(resultado);
    console.log(operacao_2);
    console.log(dado_3);
    console.log(resultado_2);
    
    Resposta_geral = resultado_2;
}

function verifcar_resposta() {

  const botao = document.querySelector("#botao_resposta");

  botao.addEventListener("click", function(e) {

    e.preventDefault();

    var resposta = document.querySelector("#resposta");

    var valor = resposta.value;
    console.log(valor);
  });

  if (valor == Resposta_geral) {
    console.log("Acertou");
  } else { 
    console.log("Errou");
  }

}

function main(){

  calcular();
  verifcar_resposta();
  
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