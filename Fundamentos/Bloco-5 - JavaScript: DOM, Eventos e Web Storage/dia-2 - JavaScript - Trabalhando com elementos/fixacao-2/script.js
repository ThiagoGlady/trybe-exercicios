let irmao = document.createElement("section");
irmao.innerText = "testando";
document.getElementById("pai").appendChild(irmao);

document.getElementById("elementoOndeVoceEsta").appendChild(document.createElement("section"));

let filho = document.createElement("section");
document.getElementById("elementoOndeVoceEsta").firstElementChild.appendChild(filho);

document.getElementById("primeiroFilhoDoFilho").lastElementChild.parentElement.parentElement.nextElementSibling;