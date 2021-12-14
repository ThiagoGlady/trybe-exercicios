
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
function mudarTexto() {
    document.getElementsByClassName("center-content")[0].children[1].innerText = "Dois anos de curso";
}

function mudarCorQuadrado1() {
    document.getElementsByTagName("main")[0].style.backgroundColor = "rgb(76,164,109)";
}

function mudarCorQuadrado2() {
    document.getElementsByClassName("main-content")[0].getElementsByClassName("center-content")[0].style.backgroundColor = "white";
}

function mudarH1() {
    document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaEscript";
}

function deixarMaiusculo () {
    for(let i = 0; i < document.getElementsByClassName("center-content")[0].children.length; i += 1) {
        document.getElementsByClassName("center-content")[0].children[i].style.textTransform = "uppercase";
    }
}

function mostrarPConsole () {
    for(let i = 0; i < document.getElementsByClassName("center-content")[0].children.length; i += 1) {
        console.log(document.getElementsByClassName("center-content")[0].children[i].innerText);
    }
}

deixarMaiusculo ();
mudarH1();
mudarCorQuadrado2();
mudarCorQuadrado1();
mudarTexto ();
mostrarPConsole ();

