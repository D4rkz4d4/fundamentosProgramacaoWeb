let resultado = document.querySelector ('#resultado');
let input01 = document.querySelector ('#input01');
let input02 = document.querySelector ('#input02');
let btSoma = document.querySelector('#btSoma');

function somar(){
    let vlr1 = Number(input01.value)
    let vlr2 = Number(input02.value)
    resultado.innerHTML = vlr1 - vlr2
}

btSoma.onclick = function(){
    somar();
}