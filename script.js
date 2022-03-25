'use strict';

/*pegando os elementos HTML com a propriedade de selecao de elementos querySelector 
e armazenando em variaveis;*/
const resul = document.querySelector('.spanResul');//elemento section;
const campoSpan = document.querySelector('.tipo');//Elemento div;
const inputOne = document.querySelector('#inputOne');//Elemento input;
const inputTwo = document.querySelector('#inputTwo');//Elemento input;

/*Pegando todos os elements button e armazenando na variavel btns em forma de array[];*/
const btns = document.querySelectorAll('.btn');//Elementos button;

/* Para a aplicacao das operacoes de matematica basica,como adicao,subtracao,
multiplicacao e divisao, aos usuarios, e necessario a connstrucao de 
funcoes correspondentes a cada umma dessas operacoes,respectivamente;*/

/*Adicionando a variavel btns[] o addEventListener para que, quando o botao 
for clicado, essa Arow function seja chamada e execute o seu bloco de comandos;
Lemnbrando que,a cada vez que o botao e clicado, a funcao e chamada e executada;*/

//FUNCAO PARA SOMAR:
btns[0].addEventListener('click',() =>{

  /*Adicionando uma estrutura condicional para verificar se os inputs 
  foram ou nao preenchidos corretamentes*/
  if((inputOne.value === '') || (inputTwo.value === ''))
  {
    resul.textContent = 'Valor invalido!!!';
    resul.style.color = 'red';
  }
  else if((inputOne.value !== '') || (inputTwo.value !== ''))
  {
  /*Como o input do type number retorne uma STRING,temos que converter 
  essa string para o tipo NUMBER, e temos tres opcoes para essa acao(lembrando que pode ter outros):
    -> parseInt => Converte strings para o tipo number, mas retorna apenas numeros inteiros,
       por exemplo: 10,5, o parseInt retornara o numero inteiro anterior: 10.0;
    -> parseFloat => Tamem converte strings para number, e diferente do parseint,
       converte numeros com sua casas decimais;
    -> Number => Converte strings para number,tambem considerando suas casas decimais.
       A principal diferenca e que o Number e uma funcao propria para essa conversao;
       Mas as outras propriedades tambem podem ser utilizadas;*/

    resul.textContent = Number(inputOne.value) + Number(inputTwo.value);
    //Adicionando um respectivo valor da funcao ao elemento div;
    campoSpan.textContent = '+';
    resul.style.color = 'black';
  }
});

//FUNCAO PARA SUBTRAIR:
btns[1].addEventListener('click',() =>{

  if((inputOne.value === '') || (inputTwo.value === ''))
  {
    resul.textContent = 'Valor invalido!!!';
    resul.style.color = 'red';
  }
  else
  {
    resul.textContent = Number(inputOne.value) - Number(inputTwo.value);
    resul.style.color = 'black';
    campoSpan.textContent = '-';
  }
});

//FUNCAO PARA MULTIPLICAR:
btns[2].addEventListener('click',() =>{

  if(((inputOne.value === '') || (inputTwo.value === '')))
  {
     resul.textContent = 'Valor invalido!!!';
     resul.style.color = 'red';
  }
  else
  {
     resul.textContent = Number(inputOne.value) * Number(inputTwo.value);
     resul.style.color = 'black';
     campoSpan.textContent = 'x';
  }
});

//FUNCAO PARA DIVIDIR:
btns[3].addEventListener('click',() =>{

  if((inputOne.value === '') || (inputTwo.value === ''))
  {
    resul.textContent = 'Valor invalido!!!';
    resul.style.color = 'red';
  }
  else
  {
     resul.textContent = (Number(inputOne.value) / Number(inputTwo.value)).toFixed(2);
     resul.style.color = 'black';
     campoSpan.textContent = '/';
  }
});

/*OBS: Perdao pela responsividade do projeto, se estar bem responsivo ou nao, 
pois nao estou atentando para o front-end em sim, e sim para a parte de 
interacao do javaScript na aplicacao;*/