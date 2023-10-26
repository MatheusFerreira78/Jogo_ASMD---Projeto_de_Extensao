var jogador_1 = 0;
var jogador_2 = 0;
var jogador_3 = 0;
var jogador_4 = 0;
var jogador_5 = 0;
var nome1, nome2, nome3, nome4, nome5;
var vez_jogador = 1;
var resposta_Certa = 0;
var contar_vez_rodar_dados = 0;

function Dado_aleatorio() {
	const random = Math.floor(Math.random() * 6) + 1;

	return random;
}

function Operacao_aleatoria() {

	//numeros seguem a ordem: 1 = soma, 2 = subtração, 3 = multiplicação, 4 = divisão
	//const operations = ['+', '-', '*', '/'];

	const operations = [1, 2, 3, 4];

	const randomIndex = Math.floor(Math.random() * 4);
	const operacao = operations[randomIndex];

	return operacao;

}

function Rodar_operacao_1(dado_1, dado_2) {

	var dado_1 = dado_1;
	var dado_2 = dado_2;

	var random = Operacao_aleatoria();

	if (random == 4) {
		if (dado_1 % dado_2 != 0) {
			while (random == 4) {
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

	if (random == 4) {
		if (resposta_1 % dado_3 != 0) {
			while (random == 4) {
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

	console.log("Valor dado 1:", dado_1);
	console.log("Operação [1 = soma , 2 = subtração, 3 = multiplicação, 4 = divisão];", operacao_1);
	console.log("Valor dado 2:", dado_2);
	console.log("Resultado de dado 1 com dado 2: ", resultado_1_conta);
	console.log("Operação [1 = soma , 2 = subtração, 3 = multiplicação, 4 = divisão];", operacao_2);
	console.log("Valor dado 3:", dado_3);
	console.log("Resultado de dados 1,2 com dado 3: ", reposta_correta);

	return reposta_correta;
}

function Iniciar_jogo() {

	var dado_1 = Rodar_dado_1();
	var dado_2 = Rodar_dado_2();
	var dado_3 = Rodar_dado_3();
	var operacao_1 = Rodar_operacao_1(dado_1, dado_2);
	var resposta_1 = 0;

	if (operacao_1 == 1) {
		resposta_1 = dado_1 + dado_2;
	}
	else if (operacao_1 == 2) {
		resposta_1 = dado_1 - dado_2;
	}
	else if (operacao_1 == 3) {
		resposta_1 = dado_1 * dado_2;
	}
	else if (operacao_1 == 4) {
		resposta_1 = dado_1 / dado_2;
	}


	var operacao_2 = Rodar_operacao_2(resposta_1, dado_3);

	resposta_Certa = calcular(dado_1, dado_2, dado_3, operacao_1, operacao_2);

	if(vez_jogador == 1){
		document.querySelector("#tampa").innerHTML = "<img src='tampa-de-garrafa-1.png'/>";
	}

}

function verifcar_resposta() {

	const resposta = document.querySelector("#resposta");

	var valor = resposta.value;
	console.log("Valor digitado pelo usuario: ", valor);

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
}

function vez(){

	vez_jogador = vez_jogador + 1;

	if(vez_jogador == 6){
		vez_jogador = 1;
	}
	
	console.log("Vez do jogador: ", vez_jogador);
	
	if(vez_jogador == 1){
		document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-1.png'/>";
	}
	else if(vez_jogador == 2){
		document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-2.png'/>";
	}
	else if(vez_jogador == 3){
		document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-3.png'/>";
	}
	else if(vez_jogador == 4){
		document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-4.png'/>";
	}
	else if(vez_jogador == 5){
		document.getElementById("tampa").innerHTML = "<img src='tampa-de-garrafa-5.png'/>";
	}
}

const btn_Iniciar = document.querySelector("#botao");
const btn_Verificar = document.querySelector("#botao_resposta");
const btn_botao_prox = document.querySelector("#botao_prox");
const btn_Rodar_dado = document.querySelector("#rodar_dado");

btn_Iniciar.addEventListener("click", function(){
	
	const titulo_1 = document.querySelector("#titulo_1");
	const titulo_2 = document.querySelector("#titulo_2");
	const formulario = document.querySelector("#formulario");
	const regras = document.querySelector("#regras");

	titulo_1.hidden = true;
	titulo_2.hidden = true;
	formulario.hidden = true;
	regras.hidden = true;

	const titulo = document.querySelector("#D_titulo_principal");
	const vez_jogadores = document.querySelector("#D_vez_jogadores");
	const dados_jogadores = document.querySelector("#D_dados_jogadores");
	const tabuleiro = document.querySelector("#D_tabuleiro_jogadores");
	const tampinhas_jogadores = document.querySelector("#D_tampinhas_jogadores");
	const btn_Verificar = document.querySelector("#D_botao_verificar");
	const meuInput = document.querySelector("#D_campo_resposta");
	const btn_botao_proximo = document.querySelector("#D_botao_proximo");
	const btn_Rodar_dado = document.querySelector("#D_rodar_dado");
	const nome_jogadores = document.querySelector("#D_nome_jogadores");
	const placar = document.querySelector("#D_placar");

	btn_Iniciar.hidden = true;

	titulo.hidden = false;
	vez_jogadores.hidden = false;
	dados_jogadores.hidden = false;
	tabuleiro.hidden = false;
	tampinhas_jogadores.hidden = false;
	btn_Verificar.hidden = false;
	meuInput.hidden = false;
	btn_botao_proximo.hidden = false;
	btn_Rodar_dado.hidden = false;
	nome_jogadores.hidden = false;
	placar.hidden = false;

	Iniciar_jogo();
	pegarNOmes();
	mostrarNOmes();
	mostrar_pontos_placar();
});

btn_Verificar.addEventListener("click", function(event){
	event.preventDefault();
	verifcar_resposta();
	vez();
	mostrarNOmes();
	mostrar_pontos_placar();

	btn_Rodar_dado.hidden = false;
});

btn_botao_prox.addEventListener("click", function(){
	vez();
	mostrarNOmes();

	btn_Rodar_dado.hidden = false;
})

btn_Rodar_dado.addEventListener("click", function(){
	Iniciar_jogo();

	btn_Rodar_dado.hidden = true;
})

function verificarCampo() {

	const meuInput = document.querySelector("#resposta");
	const btn_Verificar = document.querySelector("#botao_resposta");

	if (meuInput.value.trim() === '') {
	btn_Verificar.disabled = true;
	} else {
	btn_Verificar.disabled = false;
	}
}

// adicona um ouvinte de evento para o evento de entrada no campo de texto
const meuInput = document.querySelector("#resposta");
meuInput.addEventListener('input', verificarCampo);

// Use um loop de verificação a cada 500 milissegundos (meio segundo)
setInterval(verificarCampo, 500);

function pegarNOmes(){

	nome1 = document.querySelector("#nome1").value;
	nome2 = document.querySelector("#nome2").value;
	nome3 = document.querySelector("#nome3").value;
	nome4 = document.querySelector("#nome4").value;
	nome5 = document.querySelector("#nome5").value;
	
	console.log(nome1);
	console.log(nome2);
	console.log(nome3);
	console.log(nome4);
	console.log(nome5);
}

function mostrarNOmes(){

	if(vez_jogador == 1){
		document.getElementById("nome").textContent = nome1
		document.getElementById("nome").style.color = "#35b724"
	} else if (vez_jogador == 2){
		document.getElementById("nome").textContent = nome2
		document.getElementById("nome").style.color = "#b22323"
	} else if (vez_jogador == 3){
		document.getElementById("nome").textContent = nome3
		document.getElementById("nome").style.color = "#3b23b2"
	} else if (vez_jogador == 4){
		document.getElementById("nome").textContent = nome4
		document.getElementById("nome").style.color = "#bb4708"
	} else if (vez_jogador == 5){
		document.getElementById("nome").textContent = nome5
		document.getElementById("nome").style.color = "#a11896"
	}
}

function mostrar_pontos_placar(){
	
	document.getElementById("nome_jogadores_1").textContent = nome1;
	document.getElementById("nome_placar_1").textContent = jogador_1

	document.getElementById("nome_jogadores_2").textContent = nome2;
	document.getElementById("nome_placar_2").textContent = jogador_2

	document.getElementById("nome_jogadores_3").textContent = nome3;
	document.getElementById("nome_placar_3").textContent = jogador_3

	document.getElementById("nome_jogadores_4").textContent = nome4;
	document.getElementById("nome_placar_4").textContent = jogador_4

	document.getElementById("nome_jogadores_5").textContent = nome5;
	document.getElementById("nome_placar_5").textContent = jogador_5

}