class Autor{
    constructor(id, nome, data_nascimento){
    this.id = id
    this.nome = nome
    this.data_nascimento = data_nascimento
    }
    autor(){
        console.log(`${this.id + this.nome + this.data_nascimento}`);
    }
}


class Livro{
        constructor(id,autor, titulo, ano){
            this.id = id;
            this.titulo = titulo;
            this.ano = ano;
            this.autor = autor
        }
        livro(){
        console.log(`${this.id + this.titulo + this.autor  + this.ano}`);
    }
}

class Estudante{
    constructor(id, nome, curso){
        this.id = id;
        this.nome = nome
        this.curso = curso
    }
    estudante(){
    console.log(`${this.id + this.nome + this.curso}`);
}
}

class Emprestimo{
    constructor(id, estudante_id, livro_id, data){
        this.id = id;
        this.estudante_id = estudante_id
        this.livro_id = livro_id
        this.data = data
    }
    emprestimo(){
    console.log(`${this.id + this.livro_id + this.estudante_id + this.data}`);
}
}























        // Função para carregar e ler um arquivo CSV
        function converterCSVparaArray(conteudoCSV) {
 const linhas = conteudoCSV.split('\n');
 const arrayCSV = [];

 linhas.forEach(function (linha) {
 const valores = linha.split(',');
 arrayCSV.push(valores);
 });

 return arrayCSV;
}

lerArquivoCSV(arquivo, function (conteudo) {
 const arrayCSV = converterCSVparaArray(conteudo);
 console.log(arrayCSV);
});









        // Carregar os arquivos CSV
        Promise.all([
            carregarCSV('livros.csv'),
            carregarCSV('autores.csv'),
            carregarCSV('estudantes.csv'),
            carregarCSV('emprestimos.csv')
        ])





        .then(dados => {
            // Processar os dados dos arquivos CSV
            const livros = dados[0];
            const autores = dados[1];
            const estudantes = dados[2];
            const emprestimos = dados[3];







            // Criar um mapa de autores por ID
            const autoresPorId = new Map();
            autores.slice(1).forEach(autor => {
                autoresPorId.set(autor[0], autor[1]);
            });







            // Criar um mapa de estudantes por ID
            const estudantesPorId = new Map();
            estudantes.slice(1).forEach(estudante => {
                estudantesPorId.set(estudante[0], estudante[1]);
            });








            // Preencher a tabela de livros
            const livrosTabela = document.querySelector('#livros-container table tbody');
            livros.slice(1).forEach(livro => {
                const linha = livrosTabela.insertRow();
                const celulaTitulo = linha.insertCell();
                const celulaAutor = linha.insertCell();
                celulaTitulo.textContent = livro[1];
                celulaAutor.textContent = autoresPorId.get(livro[2]);
            });








            // Preencher a tabela de empréstimos
            const emprestimosTabela = document.querySelector('#emprestimos-container table tbody');
            emprestimos.slice(1).forEach(emprestimo => {
                const linha = emprestimosTabela.insertRow();
                const celulaLivro = linha.insertCell();
                const celulaEstudante = linha.insertCell();
                const celulaDataEmprestimo = linha.insertCell();
                celulaLivro.textContent = livros[emprestimo[1]][1];
                celulaEstudante.textContent = estudantesPorId.get(emprestimo[2]);
                celulaDataEmprestimo.textContent = emprestimo[3];
            });









            // Preencher a tabela de autores
            const autoresTabela = document.querySelector('#autores-container table tbody');
            autores.slice(1).forEach(autor => {
                const linha = autoresTabela.insertRow();
                const celulaNome = linha.insertCell();
                celulaNome.textContent = autor[1];
            });





            // Preencher a tabela de estudantes
            const estudantesTabela = document.querySelector('#estudantes-container table tbody');
            estudantes.slice(1).forEach(estudante => {
                const linha = estudantesTabela.insertRow();
                const celulaNome = linha.insertCell();
                celulaNome.textContent = estudante[1];
            });





            // Preencher os selects dos formulários
            const selectAutor = document.querySelector('#form-livro select[name="autor"]');
            const selectLivro = document.querySelector('#form-emprestimo select[name="livro"]');
            const selectEstudante = document.querySelector('#form-emprestimo select[name="estudante"]');

            autores.slice(1).forEach(autor => {
                const option = document.createElement('option');
                option.value = autor[0];
                option.textContent = autor[1];
                selectAutor.appendChild(option);
            });

            livros.slice(1).forEach(livro => {
                const option = document.createElement('option');
                option.value = livro[0];
                option.textContent = livro[1];
                selectLivro.appendChild(option);
            });

            estudantes.slice(1).forEach(estudante => {
                const option = document.createElement('option');
                option.value = estudante[0];
                option.textContent = estudante[1];
                selectEstudante.appendChild(option);
            });








            // Adicionar eventos de submit aos formulários
            document.getElementById('form-livro').addEventListener('submit', function(event) {
                event.preventDefault();
                const titulo = document.getElementById('titulo').value;
                const autorId = document.getElementById('autor').value;
                // Adicionar novo livro ao array de livros
                // Salvar o novo livro no arquivo CSV "livros.csv"
                // Atualizar a tabela de livros
            });






            document.getElementById('form-emprestimo').addEventListener('submit', function(event) {
                event.preventDefault();
                const livroId = document.getElementById('livro').value;
                const estudanteId = document.getElementById('estudante').value;
                const dataEmprestimo = document.getElementById('data_emprestimo').value;
                // Adicionar novo empréstimo ao array de empréstimos
                // Salvar o novo empréstimo no arquivo CSV "emprestimos.csv"
                // Atualizar a tabela de empréstimos
            });






            document.getElementById('form-autor').addEventListener('submit', function(event) {
                event.preventDefault();
                const nomeAutor = document.getElementById('nome_autor').value;
                // Adicionar novo autor ao array de autores
                // Salvar o novo autor no arquivo CSV "autores.csv"
                // Atualizar a tabela de autores
            });





            document.getElementById('form-estudante').addEventListener('submit', function(event) {
                event.preventDefault();
                const nomeEstudante = document.getElementById('nome_estudante').value;
                // Adicionar novo estudante ao array de estudantes
                // Salvar o novo estudante no arquivo CSV "estudantes.csv"
                // Atualizar a tabela de estudantes
            });
        })







        .catch(error => {
            console.error('Erro ao carregar os arquivos CSV:', error);
        });