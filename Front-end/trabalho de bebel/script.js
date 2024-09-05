class Autor{
    constructor(id, nome, data_nascimento){
    this.id = id
    this.nome = nome
    this.data_nascimento = data_nascimento
     }
    infoautor(){
       return `${this.id}  ${this.nome}  ${this.data_nascimento}`;
        //console.log(this.id+ " "+ this.nome + " "+ this.data_nascimento);
    }
}

    var lista_autores = []; 
    
    
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
    const autorCSV = document.getElementById('AutorCSV');

    autorCSV.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Impede o envio padrão do formulário

        const inputArquivo = document.getElementById('arquivoCSV');
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
                        //console.log(id);
                        const nome = valores[1];
                       // console.log(nome);
                        const data_nascimento = valores[2];
                       // console.log(data_nascimento);
                        let a = new Autor (id, nome, data_nascimento);   
                        a.infoautor();
                        lista_autores.push(a); 
                    });
                    console.log(lista_autores); 
                });                    
            });
        } 
        else {
            console.error("Nenhum arquivo selecionado");
        }
        });



        function tabelaAutores() {
lista_autores.forEach(function (autor) {
    const lista = document.getElementById('minhaTabela');

    const novoItem = document.createElement('tr');
    novoItem.textContent = autor.infoautor();

    lista.appendChild(novoItem);

});
}
