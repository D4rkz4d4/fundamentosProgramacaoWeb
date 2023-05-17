let inputvlPago = document.querySelector ('#inputvlPago');
let inputvlProduto = document.querySelector ('#inputvlProduto');
let btCalcular = document.querySelector ('#btCalcular');
let h1Troco = document.querySelector ('#h1Troco');

function calcularTroco (){
    let vlPago = Number(inputvlPago.value);
    let vlProduto = Number(inputvlProduto.value);

    h1Troco.textContent =
    "O troco e " +(vlPago - vlProduto);

}

btCalcular.onclick = function(){
    calcularTroco();


}