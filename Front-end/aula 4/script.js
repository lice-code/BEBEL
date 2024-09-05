class Produto{
   constructor(nome, descricao, preco, tamanho, foto){
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.tamanho = tamanho;
    this.foto = foto;
   } 
    calcularSubTotal(quantidade) {
        return this.preco * quantidade;
    }
}

const produto2 = new Produto("Assassin's Creed Valhalla", "jogo de mundo aberto, mas ainda no mundo de AC", 149.99, "60GB", "img\\OIP.jpg"); 

console.log(produto2);
document.write("Nome:" + produto2.nome + "<br><img src=" + produto2.foto + ">");
document.write("<br>"+"<br>"+"Comprando 2 produtos o subtotal: " + produto2.calcularSubTotal(10)+ "reais");

