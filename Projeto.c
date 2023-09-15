#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int random_dice(){ //função que gera os números aleatórios do dado

  srand(time(NULL)); //inicializa a semente do gerador de números aleatórios

    for(int i = 0 ; i < 3 ; i++ ) { //gera 3 números aleatórios
    int random = rand() % 6 + 1; //gera números aleatórios entre 1 e 6 
    printf("%d\n", random); //imprime os números aleatórios
  }

  return 0; //retorna 0
}

char random_operation(char operation[1]){ //função que gera as operações aleatórias

  srand(time(NULL));
  
  for(int i = 0 ; i < 3 ; i++ ) { //gera 3 operações aleatórias
    int random = rand() % 4 + 1; //gera números aleatórios entre 1 e 4
    if(random == 1){ //se o número aleatório for 1, a operação será soma
      operation[i] = '+';
    }else if(random == 2){ //se o número aleatório for 2, a operação será subtração
      operation[i] = '-';
    }else if(random == 3){ //se o número aleatório for 3, a operação será multiplicação
      operation[i] = '*';
    }else if(random == 4){ //se o número aleatório for 4, a operação será divisão
      operation[i] = '/';
    }
  }

  return operation[0]; //retorna a operação
  
}

int resultado(){
//pegar o valor do dado e da operação e fazer a conta
//retornar o resultado



}

int main() { //função principal

int resposta; //declaração da variável que armazena a resposta

char operation2[1] = {0}; //declaração da variável que armazena a operação
random_dice(); //chama a função que gera os números aleatórios
random_operation(operation2); //chama a função que gera as operações aleatórias

printf("%c %c\n", operation2[0], operation2[1]); //imprime a operação

scanf("%d", &resposta); //lê a resposta


  return 0;

}

