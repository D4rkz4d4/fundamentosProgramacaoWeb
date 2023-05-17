let inputQuantidade = document.querySelector ('#inputQuantidade');
let inputvlrKg = document.querySelector ('#inputvlrKg');
let btCalcular = document.querySelector ('#btCalcular');
let h1ValorFinal = document.querySelector ('#h1ValorFinal');

function CalcularValor(){
    let valorKg = Number(inputVlrKg.value);
    let Quantidade = Number(inputQuantidade.value);

    h1ValorFinal.textContent =
    (valorKg * Quantidade);
}

btCalcular.onclick = function(){
    CalcularValor();
}
