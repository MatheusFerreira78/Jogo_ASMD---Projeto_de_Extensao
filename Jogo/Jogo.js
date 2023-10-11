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

function Rodar_operacao_1(dado_1, dado_2) {

  var dado_1 = dado_1;
  var dado_2 = dado_2;

  var random = Operacao_aleatoria();

  if(random == 4) {
    if(dado_1 % dado_2 != 0){
      while(random == 4) {
        random = Operacao_aleatoria();
      }
    }
  } 

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

  return random;
}

function Rodar_operacao_2(resposta_1, dado_3) {

  var resposta_1 = resposta_1;
  var dado_3 = dado_3;


  var random = Operacao_aleatoria();

  if(random == 4) {
    if(resposta_1 % dado_3 != 0){
      while(random == 4) {
        random = Operacao_aleatoria();
      }
    }
  }

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

  return random;
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

  return random;
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

  return random;
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

  return random;
}

function Movimentar_tampinha_1() {

  if (jogador_1 == 0) {
    document.getElementById("tampinha_1").style.marginTop = "0px";
  }
  else if (jogador_1 == 1) {
    document.getElementById("tampinha_1").style.marginTop = "-4%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (jogador_1 == 2) {
    document.getElementById("tampinha_1").style.marginTop = "-8.5%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (jogador_1 == 3) {
    document.getElementById("tampinha_1").style.marginTop = "-12.5%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (jogador_1 == 4) {
    document.getElementById("tampinha_1").style.marginTop = "-17%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (jogador_1 == 5) {
    document.getElementById("tampinha_1").style.marginTop = "-21%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (jogador_1 == 6) {
    document.getElementById("tampinha_1").style.marginTop = "-25.5%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (jogador_1 == 7) {
    document.getElementById("tampinha_1").style.marginTop = "-29.5%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (jogador_1 == 8) {
    document.getElementById("tampinha_1").style.marginTop = "-33.5%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (jogador_1 == 9) {
    document.getElementById("tampinha_1").style.marginTop = "-38%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
  else if (jogador_1 == 10) {
    document.getElementById("tampinha_1").style.marginTop = "-42%";
    document.getElementById("tampinha_1").style.marginLeft = "-0.2%";
  }
}

function Movimentar_tampinha_2() {

  if (jogador_2 == 0) {
    document.getElementById("tampinha_2").style.marginTop = "0px";
  }
  else if (jogador_2 == 1) {
    document.getElementById("tampinha_2").style.marginTop = "-4%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (jogador_2 == 2) {
    document.getElementById("tampinha_2").style.marginTop = "-8.5%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (jogador_2 == 3) {
    document.getElementById("tampinha_2").style.marginTop = "-12.5%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (jogador_2 == 4) {
    document.getElementById("tampinha_2").style.marginTop = "-17%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (jogador_2 == 5) {
    document.getElementById("tampinha_2").style.marginTop = "-21%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (jogador_2 == 6) {
    document.getElementById("tampinha_2").style.marginTop = "-25.5%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (jogador_2 == 7) {
    document.getElementById("tampinha_2").style.marginTop = "-29.5%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (jogador_2 == 8) {
    document.getElementById("tampinha_2").style.marginTop = "-33.5%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (jogador_2 == 9) {
    document.getElementById("tampinha_2").style.marginTop = "-38%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
  else if (jogador_2 == 10) {
    document.getElementById("tampinha_2").style.marginTop = "-42%";
    document.getElementById("tampinha_2").style.marginLeft = "-0.2%";
  }
}

function Movimentar_tampinha_3() {

  if (jogador_3 == 0) {
    document.getElementById("tampinha_3").style.marginTop = "0px";
  }
  else if (jogador_3 == 1) {
    document.getElementById("tampinha_3").style.marginTop = "-4%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (jogador_3 == 2) {
    document.getElementById("tampinha_3").style.marginTop = "-8.5%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (jogador_3 == 3) {
    document.getElementById("tampinha_3").style.marginTop = "-12.5%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (jogador_3 == 4) {
    document.getElementById("tampinha_3").style.marginTop = "-17%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (jogador_3 == 5) {
    document.getElementById("tampinha_3").style.marginTop = "-21%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (jogador_3 == 6) {
    document.getElementById("tampinha_3").style.marginTop = "-25.5%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (jogador_3 == 7) {
    document.getElementById("tampinha_3").style.marginTop = "-29.5%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (jogador_3 == 8) {
    document.getElementById("tampinha_3").style.marginTop = "-33.5%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (jogador_3 == 9) {
    document.getElementById("tampinha_3").style.marginTop = "-38%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
  else if (jogador_3 == 10) {
    document.getElementById("tampinha_3").style.marginTop = "-42%";
    document.getElementById("tampinha_3").style.marginLeft = "-0.2%";
  }
}

function Movimentar_tampinha_4() {

  if (jogador_4 == 0) {
    document.getElementById("tampinha_4").style.marginTop = "0px";
  }
  else if (jogador_4 == 1) {
    document.getElementById("tampinha_4").style.marginTop = "-4%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (jogador_4 == 2) {
    document.getElementById("tampinha_4").style.marginTop = "-8.5%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (jogador_4 == 3) {
    document.getElementById("tampinha_4").style.marginTop = "-12.5%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (jogador_4 == 4) {
    document.getElementById("tampinha_4").style.marginTop = "-17%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (jogador_4 == 5) {
    document.getElementById("tampinha_4").style.marginTop = "-21%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (jogador_4 == 6) {
    document.getElementById("tampinha_4").style.marginTop = "-25.5%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (jogador_4 == 7) {
    document.getElementById("tampinha_4").style.marginTop = "-29.5%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (jogador_4 == 8) {
    document.getElementById("tampinha_4").style.marginTop = "-33.5%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (jogador_4 == 9) {
    document.getElementById("tampinha_4").style.marginTop = "-38%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
  else if (jogador_4 == 10) {
    document.getElementById("tampinha_4").style.marginTop = "-42%";
    document.getElementById("tampinha_4").style.marginLeft = "-0.2%";
  }
}

function Movimentar_tampinha_5() {

  if (jogador_5 == 0) {
    document.getElementById("tampinha_5").style.marginTop = "0px";
  }
  else if (jogador_5 == 1) {
    document.getElementById("tampinha_5").style.marginTop = "-4%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (jogador_5 == 2) {
    document.getElementById("tampinha_5").style.marginTop = "-8.5%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (jogador_5 == 3) {
    document.getElementById("tampinha_5").style.marginTop = "-12.5%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (jogador_5 == 4) {
    document.getElementById("tampinha_5").style.marginTop = "-17%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (jogador_5 == 5) {
    document.getElementById("tampinha_5").style.marginTop = "-21%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (jogador_5 == 6) {
    document.getElementById("tampinha_5").style.marginTop = "-25.5%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (jogador_5 == 7) {
    document.getElementById("tampinha_5").style.marginTop = "-29.5%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (jogador_5 == 8) {
    document.getElementById("tampinha_5").style.marginTop = "-33.5%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (jogador_5 == 9) {
    document.getElementById("tampinha_5").style.marginTop = "-38%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
  else if (jogador_5 == 10) {
    document.getElementById("tampinha_5").style.marginTop = "-42%";
    document.getElementById("tampinha_5").style.marginLeft = "-0.2%";
  }
}

function calcular(dado1, dado2, dado3, operacao1, operacao2) {
  
  var dado_1 = dado1;
  var dado_2 = dado2;
  var dado_3 = dado3;
  var operacao_1 = operacao1;
  var operacao_2 = operacao2;
  var resultado_1_conta = 0;
  var reposta_correta = 0;

  if (operacao_1 == 1) {
    resultado_1_conta = dado_1 + dado_2;
  }
  else if (operacao_1 == 2) {
    resultado_1_conta = dado_1 - dado_2;
  }
  else if (operacao_1 == 3) {
    resultado_1_conta = dado_1 * dado_2;
  }
  else if (operacao_1 == 4) {
    resultado_1_conta = dado_1 / dado_2;
  }

  if (operacao_2 == 1) {
    reposta_correta = resultado_1_conta + dado_3;
  }
  else if (operacao_2 == 2) {
    reposta_correta = resultado_1_conta - dado_3;
  }
  else if (operacao_2 == 3) {
    reposta_correta = resultado_1_conta * dado_3;
  }
  else if (operacao_2 == 4) {
    reposta_correta = resultado_1_conta / dado_3;
  }

  console.log("Valor dado 1:",dado_1);
  console.log("Operação [1 = soma , 2 = subtração, 3 = multiplicação, 4 = divisão];",operacao_1);
  console.log("Valor dado 2:",dado_2);
  console.log("Resultado de dado 1 com dado 2: ",resultado_1_conta);
  console.log("Operação [1 = soma , 2 = subtração, 3 = multiplicação, 4 = divisão];",operacao_2);
  console.log("Valor dado 3:",dado_3);
  console.log("Resultado de dados 1,2 com dado 3: ",reposta_correta);
  
  return reposta_correta;
}

var jogador_1 = 0;
var jogador_2 = 0;
var jogador_3 = 0;
var jogador_4 = 0;
var jogador_5 = 0;
var vez_jogador = 1;
var resposta_Certa = 0;

function Iniciar_jogo() {

  var dado_1 = Rodar_dado_1();
  var dado_2 = Rodar_dado_2();
  var dado_3 = Rodar_dado_3();
  var operacao_1 = Rodar_operacao_1(dado_1, dado_2);
  var resposta_1 = 0;

  if(operacao_1 == 1) {
    resposta_1 = dado_1 + dado_2;
  }
  else if(operacao_1 == 2) {
    resposta_1 = dado_1 - dado_2;
  }
  else if(operacao_1 == 3) {
    resposta_1 = dado_1 * dado_2;
  }
  else if(operacao_1 == 4) {
    resposta_1 = dado_1 / dado_2;
  }


  var operacao_2 = Rodar_operacao_2(resposta_1, dado_3);

  resposta_Certa = calcular(dado_1, dado_2, dado_3, operacao_1, operacao_2);

}

function verifcar_resposta() {

  const resposta = document.querySelector("#resposta");

  var valor = resposta.value;
  console.log("Valor digitado pelo usuario: ",valor);

  if (valor == resposta_Certa) {
    console.log("Resposta certa");
    alert("Resposta certa");
    resposta.value = "";
    if (vez_jogador == 1) {
      jogador_1 = jogador_1 + 1;
      Movimentar_tampinha_1();
    } else if (vez_jogador == 2) {
      jogador_2 = jogador_2 + 1;
      Movimentar_tampinha_2();
    } else if (vez_jogador == 3) {
      jogador_3 = jogador_3 + 1;
      Movimentar_tampinha_3();
    } else if (vez_jogador == 4) {
      jogador_4 = jogador_4 + 1;
      Movimentar_tampinha_4();
    } else if (vez_jogador == 5) {
      jogador_5 = jogador_5 + 1;
      Movimentar_tampinha_5();
    }
    Iniciar_jogo();
  } else {
    console.log("Resposta errada");
    alert("Resposta errada");
    resposta.value = "";
  }

  vez_jogador++;
  console.log("Vez do jogador: ",vez_jogador);

}
