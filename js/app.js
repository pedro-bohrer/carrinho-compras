let total = 0
let carrinho = document.getElementById("lista-produtos");
limpar()

function adicionar() {
    //adiciona produtos ao carrinho de compras com sua quantidade
    //calcula valor total da compra
    let produto = document.getElementById("produto");
    let nomeProduto = produto.value.split("-")[0];
    let quantidade = document.getElementById("quantidade").value == 0 ? 1 : document.getElementById("quantidade").value;
    let valorProduto = parseInt(produto.value.match(/\d+/g));
    let valorProdutoQuant = valorProduto * quantidade;

    total = total + valorProdutoQuant;
    document.getElementById("valor-total").innerHTML = `R$${total}`;

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
  </section>`
    
}
function limpar() {
    //limpa carrinho de compra e total das compras
    total = 0
    document.getElementById("valor-total").innerHTML = `R$${total}`;
    carrinho.innerHTML = ""
}