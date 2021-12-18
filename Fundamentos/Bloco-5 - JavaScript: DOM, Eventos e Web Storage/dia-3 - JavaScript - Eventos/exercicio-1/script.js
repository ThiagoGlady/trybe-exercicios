function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  // Escreva seu código abaixo.
// Exercício 1:

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

let parentDias = document.getElementById("days");
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for(let i = 0; i < dezDaysList.length; i += 1) {
    let criarFilhoLi = document.createElement("li");
    parentDias.appendChild(criarFilhoLi);
    parentDias.children[i].innerText = dezDaysList[i];
    parentDias.children[i].setAttribute("class", "day");
    if(parentDias.children[i].innerText == 24 || parentDias.children[i].innerText == 25 || parentDias.children[i].innerText == 31) {
      parentDias.children[i].classList.add("holiday");
      parentDias.children[i].style.transition = "background-color 2s";
    }
}



// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function criarBotao(palavraDoBotao) {
  let filhoBotao = document.createElement("button");
  document.getElementsByClassName("buttons-container")[0].appendChild(filhoBotao);
  document.getElementsByClassName("buttons-container")[0].lastElementChild.innerText = palavraDoBotao;
  document.getElementsByClassName("buttons-container")[0].lastElementChild.setAttribute("id", "btn-holiday");
}

criarBotao("Feriados");



// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
let checarBotao = false;
let posicaoBotao = document.getElementById("btn-holiday");
let posicaoFeriados = document.getElementsByClassName("holiday");

function ativarDesacionarFeriado(botao) {
  if(checarBotao === false) {
    for(let i = 0; i < posicaoFeriados.length; i += 1) {
      posicaoFeriados[i].style.backgroundColor = "red";
    }
    checarBotao = true;
  }else {
    for(let i = 0; i < posicaoFeriados.length; i += 1) {
      posicaoFeriados[i].style.backgroundColor = "rgb(238,238,238)";
    }
    checarBotao = false;
  }
}

posicaoBotao.addEventListener("click", ativarDesacionarFeriado);



// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function botaoSextaFeira(sextaFeira) {
  let posicaoBotoes = document.getElementsByClassName("buttons-container")[0];
  let botao = document.createElement("button");

  posicaoBotoes.appendChild(botao);
  posicaoBotoes.lastElementChild.setAttribute("id", "btn-friday");
  posicaoBotoes.lastElementChild.innerText = sextaFeira;
}

botaoSextaFeira("Sexta-Feira");



// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function trocarTexto(botaoSexta) {
  for(let i = 5; i <= 26; i += 7) {
    if(document.getElementsByClassName("day")[i].style.fontWeight == "1000") {
      document.getElementsByClassName("day")[i].style.fontWeight = "500";
    }else {
      document.getElementsByClassName("day")[i].style.fontWeight = "1000";
    }
  }
}

document.getElementById("btn-friday").addEventListener("click", trocarTexto);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

let posicaoDias = document.getElementsByClassName("day");

function bigDay(dia) {
  dia.target.style.fontSize = "30px";
}

function smallDay(dia) {
  dia.target.style.fontSize = "18px";
}

for(let i = 0; i < posicaoDias.length; i += 1) {
  posicaoDias[i].addEventListener("mouseover", bigDay);
  posicaoDias[i].addEventListener("mouseout", smallDay);
}

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
let posicaoTarefa = document.getElementsByClassName("my-tasks")[0];

function tarefaAFazer(tarefa) {
  let criarTarefa = document.createElement("span");
  posicaoTarefa.appendChild(criarTarefa);
  pularLinha = tarefa.target.value + "\n";
  posicaoTarefa.lastElementChild.innerText = pularLinha;
}

document.getElementsByTagName("input")[0].addEventListener("change", tarefaAFazer);

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function legendaColorida(cor) {
  let criarLegendaColorida = document.createElement("div");
  posicaoTarefa.appendChild(criarLegendaColorida);
  posicaoTarefa.getElementsByTagName("div")[0].setAttribute("class", "task");
  posicaoTarefa.getElementsByTagName("div")[0].style.backgroundColor  = cor;
}

legendaColorida("green");

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.