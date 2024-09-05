class Livros{
    constructor(id, autor, ano){
    this.id = id
    this.autor = autor
    this.ano = ano
     }
    infolivro(){
       return `${this.id}  ${this.autor}  ${this.ano}`;
        //console.log(this.id+ " "+ this.nome + " "+ this.data_nascimento);
    }
}

    var lista_livros = []; 
    
    console.log("entrei")
    function lerArquivoCSV(arquivo, callback) {
        const leitor = new FileReader();

        leitor.onload = function (evento) {
            const conteudo = evento.target.result;
            callback(conteudo);
        };

        leitor.readAsText(arquivo);
    }

    function converterCSVparaArray(conteudoCSV) {
        const linhas = conteudoCSV.split('\n');
        const arrayCSV = [];

        linhas.forEach(function (linha) {
            const valores = linha.split(',');
            arrayCSV.push(valores);
        });

        return arrayCSV;
    }

    // Selecionar o formulário e adicionar o evento de submissão
    const livrosCSV = document.getElementById('livrosCSV');

    livrosCSV.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Impede o envio padrão do formulário

        const inputArquivo = document.getElementById('livrosCSV');
        const arquivo = inputArquivo.files[0]; // Seleciona o arquivo CSV

        if (arquivo) {
            lerArquivoCSV(arquivo, function (conteudo) {
                const arrayCSV = converterCSVparaArray(conteudo);
                //console.log(arrayCSV);

                arrayCSV.forEach(function (linha) {
                    //console.log(linha);
                    const arrayinfo = [];

                    linha.forEach(function (info) {
                        const valores = info.split(';');
                        arrayinfo.push(valores);
                        //console.log(valores)
                        const id = valores[0];
                        console.log(id);
                        const autor = valores[1];
                       console.log(autor);
                        const ano = valores[2];
                       console.log(ano);
                        let a = new Livros (id, autor, ano);   
                        a.infolivro();
                        lista_livros.push(a); 
                    });
                    console.log(lista_livros); 
                });                    
            });
        } 
        else {
            console.error("Nenhum arquivo selecionado");
        }
        });



        function tabelaLivros() {
lista_livros.forEach(function (livro) {
    const lista = document.getElementById('minhaTabelaLivros');

    const novoItem = document.createElement('tr');
    novoItem.textContent = livro.infolivro();

    lista.appendChild(novoItem);

});
}