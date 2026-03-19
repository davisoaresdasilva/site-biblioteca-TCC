// Dados simulados (Mock Database)
let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [
    { id: 1, aluno: 'Maria Oliveira', livro: 'Dom Casmurro', retirada: '2023-10-01', prevista: '2023-10-08', status: 'ATRASADO' },
    { id: 2, aluno: 'Pedro Santos', livro: 'Harry Potter e a Pedra Filosofal', retirada: '2023-10-25', prevista: '2023-11-01', status: 'ABERTO' }
];

// Dados simulados de alunos
let alunos = JSON.parse(localStorage.getItem('alunos')) || [
    { id: 1, nome: 'Maria Oliveira', matricula: 'RA001', senha: '123', email: 'maria.o@email.com', telefone: '(11) 98765-4321' },
    { id: 2, nome: 'Pedro Santos', matricula: 'RA002', senha: '456', email: 'pedro.s@email.com', telefone: '(21) 91234-5678' },
    { id: 3, nome: 'Davi Soares', matricula: 'admin', senha: 'admin', email: 'davi.s@email.com', telefone: '(31) 99999-8888' }
];

// Dados simulados de livros com capa e gênero
let livros = JSON.parse(localStorage.getItem('livros')) || [
    { id: 1, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', genero: 'Infantil', capa: 'https://m.media-amazon.com/images/I/71OufPNU0VL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1943, descricao: 'Um piloto cai no deserto do Saara e encontra um jovem príncipe que viaja por planetas. Uma obra atemporal sobre amor, amizade e a essência humana.' },
    { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis', genero: 'Clássicos', capa: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg', estoque: 3, ano: 1899, descricao: 'Bento Santiago relembra sua vida e a dúvida que o atormenta: Capitu o traiu com seu melhor amigo? Um estudo psicológico sobre ciúme e ambiguidade.' },
    { id: 3, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/81ibfYk4qXL._AC_UF1000,1000_QL80_.jpg', estoque: 5, ano: 1997, descricao: 'Um órfão descobre ser um bruxo famoso e ingressa em Hogwarts. Lá, ele aprende magia, faz amigos leais e enfrenta o terrível Lord Voldemort.' },
    { id: 4, titulo: '1984', autor: 'George Orwell', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/91JcKz0qfSL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1949, descricao: 'Em uma sociedade totalitária vigiada pelo Grande Irmão, Winston Smith tenta resistir à opressão e à manipulação da verdade em um futuro distópico sombrio.' },
    { id: 5, titulo: 'O Guia do Mochileiro das Galáxias', autor: 'Douglas Adams', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/81e1rTE5LBL._AC_UF1000,1000_QL80_.jpg', estoque: 1, ano: 1979, descricao: 'Arthur Dent escapa da destruição da Terra com seu amigo alienígena. Juntos, exploram o universo com um guia eletrônico e uma toalha.' },
    { id: 6, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', autor: 'J.R.R. Tolkien', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91Yr0n5lNWL._AC_UF1000,1000_QL80_.jpg', estoque: 3, ano: 1954, descricao: 'Frodo herda um anel capaz de controlar o mundo e precisa destruí-lo na Montanha da Perdição, enfrentando perigos épicos com a Sociedade do Anel.' },
    { id: 7, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', genero: 'Clássicos', capa: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1813, descricao: 'Elizabeth Bennet e o rico Sr. Darcy enfrentam barreiras de orgulho e preconceito social enquanto descobrem o amor na Inglaterra do século XIX.' },
    { id: 8, titulo: 'Duna', autor: 'Frank Herbert', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/41MRn6xK7bL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1965, descricao: 'Paul Atreides lidera nômades no planeta desértico Arrakis, única fonte da especiaria que permite viagens interestelares, em uma saga de política e religião.' },
    { id: 9, titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UF1000,1000_QL80_.jpg', estoque: 3, ano: 1937, descricao: 'Bilbo Bolseiro, um hobbit caseiro, é arrastado pelo mago Gandalf e treze anões em uma jornada perigosa para recuperar um tesouro guardado por um dragão.' },
    { id: 10, titulo: 'A Culpa é das Estrelas', autor: 'John Green', genero: 'Romance', capa: 'https://m.media-amazon.com/images/I/512f45y7q4L._AC_UF1000,1000_QL80_.jpg', estoque: 1, ano: 2012, descricao: 'Dois adolescentes com câncer se apaixonam e buscam um autor recluso em Amsterdã, aprendendo sobre a vida, a morte e o infinito de momentos curtos.' },
    { id: 11, titulo: 'Percy Jackson: O Ladrão de Raios', autor: 'Rick Riordan', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91c30Jg8dQL._AC_UF1000,1000_QL80_.jpg', estoque: 4, ano: 2005, descricao: 'Percy descobre ser filho de Poseidon e é acusado de roubar o raio de Zeus. Ele deve provar sua inocência e impedir uma guerra entre os deuses gregos.' },
    { id: 12, titulo: 'It: A Coisa', autor: 'Stephen King', genero: 'Terror', capa: 'https://m.media-amazon.com/images/I/81c8No6lsuL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1986, descricao: 'Em Derry, um grupo de crianças enfrenta uma entidade maligna que desperta a cada 27 anos para se alimentar de medos, assumindo a forma de um palhaço.' },
    { id: 13, titulo: 'Sherlock Holmes: Um Estudo em Vermelho', autor: 'Arthur Conan Doyle', genero: 'Mistério', capa: 'https://m.media-amazon.com/images/I/81+y+g+9G+L._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1887, descricao: 'Dr. Watson conhece o detetive Sherlock Holmes e juntos investigam um misterioso assassinato em Londres, dando início a uma lendária parceria.' },
    { id: 14, titulo: 'Jogos Vorazes', autor: 'Suzanne Collins', genero: 'Distopia', capa: 'https://m.media-amazon.com/images/I/61I24wOsn8L._AC_UF1000,1000_QL80_.jpg', estoque: 3, ano: 2008, descricao: 'Em uma distopia onde jovens lutam até a morte na TV, Katniss Everdeen se voluntaria para salvar a irmã e acaba desafiando o poder da Capital.' },
    { id: 15, titulo: 'O Código Da Vinci', autor: 'Dan Brown', genero: 'Suspense', capa: 'https://m.media-amazon.com/images/I/81AFG2ww2UL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 2003, descricao: 'Um simbologista e uma criptógrafa seguem pistas em obras de Da Vinci para desvendar um segredo religioso antigo protegido por uma sociedade secreta.' },
    { id: 16, titulo: 'O Alquimista', autor: 'Paulo Coelho', genero: 'Ficção', capa: 'https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UF1000,1000_QL80_.jpg', estoque: 3, ano: 1988, descricao: 'Santiago, um jovem pastor, viaja da Espanha ao Egito em busca de um tesouro, descobrindo que a verdadeira riqueza está na jornada e em ouvir o coração.' },
    { id: 17, titulo: 'O Nome do Vento', autor: 'Patrick Rothfuss', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/71S8u2GrVbL._AC_UF1000,1000_QL80_.jpg', estoque: 1, ano: 2007, descricao: 'Kvothe, um lendário arcanista e músico, narra sua história de infância, tragédia e aprendizado na Universidade, revelando os mistérios por trás do mito.' },
    { id: 18, titulo: 'A Metamorfose', autor: 'Franz Kafka', genero: 'Ficção', capa: 'https://m.media-amazon.com/images/I/71ss5-d18RL._AC_UF1000,1000_QL80_.jpg', estoque: 4, ano: 1915, descricao: 'Gregor Samsa acorda transformado em um inseto gigante. Enquanto luta para se adaptar, observa a reação de repulsa e a mudança de atitude de sua família.' }
];

// Dados simulados de notificações
let notificacoes = JSON.parse(localStorage.getItem('notificacoes')) || [
    { id: 1, titulo: 'Bem-vindo ao BiblioTech', mensagem: 'Seu sistema de gestão foi atualizado.', data: '2023-10-27', lida: false },
    { id: 2, titulo: 'Novo Livro Disponível', mensagem: 'O livro "Clean Code" foi adicionado ao acervo.', data: '2023-10-26', lida: true },
    { id: 3, titulo: 'Lembrete de Devolução', mensagem: 'Verifique os atrasos na aba de empréstimos.', data: '2023-10-25', lida: false }
];

// Função para renderizar alertas de livros atrasados
function renderizarAlertasDeAtraso() {
    const container = document.getElementById('alerta-atrasos-container');
    const atrasados = emprestimos.filter(e => e.status === 'ATRASADO');

    if (!container) return; // Evita erro se o elemento não existir na página

    container.innerHTML = ''; // Limpa alertas antigos

    if (atrasados.length > 0) {
        const listaHtml = atrasados.map(e => `<li><strong>${e.aluno}</strong> com o livro <em>"${e.livro}"</em>.</li>`).join('');

        const alertaHtml = `
            <div class="card alerta-atrasos">
                <h4>Atenção: Livros Atrasados!</h4>
                <p>Os seguintes alunos estão com devoluções pendentes:</p>
                <ul>${listaHtml}</ul>
            </div>
        `;
        container.innerHTML = alertaHtml;
    }
}

// Função para renderizar a tabela
function renderizarTabela() {
    // Salva os dados no localStorage para persistência
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));
    renderizarAlertasDeAtraso(); // Atualiza os alertas de atraso

    const tbody = document.getElementById('tabela-emprestimos-body');
    if (!tbody) return; // Se não estiver na página de empréstimos, sai da função

    tbody.innerHTML = '';

    emprestimos.forEach(emp => {
        const tr = document.createElement('tr');

        // Formatar datas para PT-BR
        // Adiciona T00:00:00 para garantir que o navegador interprete como data local e não UTC
        const dataRet = new Date(emp.retirada + 'T00:00:00').toLocaleDateString('pt-BR');
        const dataPrev = new Date(emp.prevista + 'T00:00:00').toLocaleDateString('pt-BR');

        // Classe de cor e texto para o status
        let statusClass = '';
        if (emp.status === 'ATRASADO') {
            statusClass = 'status-atrasado';
        } else if (emp.status === 'ABERTO') {
            statusClass = 'status-aberto';
        } else if (emp.status === 'CONCLUIDO') {
            statusClass = 'status-concluido'; // Recomenda-se adicionar no CSS: .status-concluido { color: #28a745; font-weight: bold; }
        }
        const statusText = emp.status === 'CONCLUIDO' ? 'DEVOLVIDO' : emp.status;

        // Tenta encontrar a capa do livro no catálogo
        const livroEncontrado = livros.find(l => l.titulo === emp.livro);
        const placeholderMiniatura = 'https://via.placeholder.com/30x45?text=Capa';
        const capaUrl = livroEncontrado ? livroEncontrado.capa : placeholderMiniatura;

        tr.innerHTML = `
            <td>${emp.aluno}</td>
            <td>
                <div style="display: flex; align-items: center; gap: 10px;"><img src="${capaUrl}" class="capa-miniatura" alt="Capa" onerror="this.onerror=null;this.src='${placeholderMiniatura}';"> ${emp.livro}</div>
            </td>
            <td>${dataRet}</td>
            <td>${dataPrev}</td>
            <td class="${statusClass}">${statusText}</td>
            <td>
                ${emp.status !== 'CONCLUIDO' ? `
                    <button onclick="devolverLivro(${emp.id})" class="btn-acao btn-devolver">
                        Devolver
                    </button>
                    <button onclick="marcarAtrasado(${emp.id})" class="btn-acao btn-atrasado">
                        Atrasado
                    </button>
                    <button onclick="marcarAberto(${emp.id})" class="btn-acao btn-reabrir">
                        Reabrir
                    </button>
                ` : `<span>-</span>`}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Função para adicionar novo empréstimo
const formEmprestimo = document.getElementById('form-emprestimo');
if (formEmprestimo) {
    formEmprestimo.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nomeAluno = document.getElementById('input-aluno').value;
    const livro = document.getElementById('input-livro').value;
    const senha = document.getElementById('input-senha-emprestimo').value;

    // 1. Encontrar o aluno pelo nome
    const alunoEncontrado = alunos.find(a => a.nome.toLowerCase() === nomeAluno.toLowerCase());

    // 2. Validar se o aluno existe
    if (!alunoEncontrado) {
        alert('Aluno não encontrado. Por favor, selecione um aluno válido da lista de sugestões.');
        return;
    }

    // 3. Validar a senha do aluno
    if (alunoEncontrado.senha !== senha) {
        alert('Senha do aluno incorreta. Verifique e tente novamente.');
        return;
    }
    
    const hoje = new Date();
    const prevista = new Date();
    prevista.setDate(hoje.getDate() + 7); // +7 dias

    // Formata para YYYY-MM-DD usando a data local para evitar erro de fuso horário
    const dataRetirada = hoje.toLocaleDateString('pt-BR').split('/').reverse().join('-');
    const dataPrevista = prevista.toLocaleDateString('pt-BR').split('/').reverse().join('-');

    const novo = {
        id: emprestimos.length + 1,
        aluno: nomeAluno,
        livro: livro,
        retirada: dataRetirada,
        prevista: dataPrevista,
        status: 'ABERTO'
    };

    emprestimos.push(novo);
    renderizarTabela();
    this.reset();
    
    adicionarNotificacao('Novo Empréstimo', `O livro "${livro}" foi emprestado para ${nomeAluno}.`);
    alert('Empréstimo registrado com sucesso!');
    });
}

// Função para devolver livro
function devolverLivro(id) {
    if (confirm('Confirmar devolução do livro?')) {
        const emprestimo = emprestimos.find(e => e.id === id);
        if (emprestimo) {
            emprestimo.status = 'CONCLUIDO';
            renderizarTabela();
            renderizarLivros(); // Atualiza a galeria para mostrar o livro como disponível
            adicionarNotificacao('Livro Devolvido', `O livro "${emprestimo.livro}" foi devolvido.`);
        }
    }
}

// Função para marcar livro como atrasado manually
function marcarAtrasado(id) {
    const emprestimo = emprestimos.find(e => e.id === id);
    if (emprestimo && emprestimo.status !== 'CONCLUIDO') {
        emprestimo.status = 'ATRASADO';
        renderizarTabela();
    }
}

// Função para marcar livro como aberto novamente
function marcarAberto(id) {
    const emprestimo = emprestimos.find(e => e.id === id);
    if (emprestimo) {
        emprestimo.status = 'ABERTO';
        renderizarTabela();
    }
}

// Função para excluir aluno
function excluirAluno(id) {
    if (confirm('Tem certeza que deseja excluir este aluno?')) {
        alunos = alunos.filter(a => a.id !== id);
        renderizarTabelaAlunos();
    }
}

// Função para renderizar a tabela de alunos
function renderizarTabelaAlunos(termoBusca = '') {
    // Salva a lista atualizada no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos));

    // Filtragem baseada na busca
    const alunosFiltrados = alunos.filter(a => 
        a.nome.toLowerCase().includes(termoBusca.toLowerCase()) || 
        a.matricula.toLowerCase().includes(termoBusca.toLowerCase())
    );

    const tbody = document.getElementById('tabela-alunos-body');
    const thead = document.getElementById('tabela-alunos-head');
    const totalAlunosEl = document.getElementById('total-alunos');
    tbody.innerHTML = '';
    thead.innerHTML = '';

    const isAdmin = true; // Modo admin ativado para controle total

    // Constrói o cabeçalho da tabela dinamicamente
    let headerHtml = `<tr><th>Nome</th><th>Matrícula</th>`;
    headerHtml += `<th>Situação</th>`; // Nova coluna
    if (isAdmin) {
        headerHtml += `<th>Contato</th>`;
        headerHtml += `<th>Senha (Visível para Admin)</th>`;
        headerHtml += `<th>Ações</th>`;
    }
    headerHtml += `</tr>`;
    thead.innerHTML = headerHtml;

    // Preenche o corpo da tabela
    alunosFiltrados.forEach(aluno => {
        // Verifica pendências
        const pendencias = emprestimos.filter(e => e.aluno === aluno.nome && e.status === 'ATRASADO').length;
        const ativos = emprestimos.filter(e => e.aluno === aluno.nome && e.status === 'ABERTO').length;
        
        let statusBadge = '<span class="badge badge-ok">Regular</span>';
        
        if (pendencias > 0) {
            statusBadge = `<span class="badge badge-erro" title="${pendencias} livros atrasados!">${pendencias} Atrasado(s)</span>`;
        } else if (ativos > 0) {
            statusBadge = `<span class="badge badge-info" title="${ativos} livros com o aluno">${ativos} Empréstimo(s)</span>`;
        }

        let rowHtml = `<td data-label="Nome">${aluno.nome}</td><td data-label="Matrícula">${aluno.matricula}</td>`;
        rowHtml += `<td data-label="Situação">${statusBadge}</td>`;
        
        if (isAdmin) {
            const emailLink = aluno.email ? `<a href="mailto:${aluno.email}" class="link-contato">${aluno.email}</a>` : 'N/A';
            const telefoneLink = aluno.telefone ? `<a href="tel:${aluno.telefone}" class="link-contato">${aluno.telefone}</a>` : 'N/A';
            rowHtml += `<td data-label="Contato">${emailLink}<br>${telefoneLink}</td>`;

            rowHtml += `<td data-label="Senha">${aluno.senha} <button class="btn-copiar" onclick="copiarTexto('${aluno.senha}')" title="Copiar senha">📋</button></td>`;
            rowHtml += `<td data-label="Ações" class="coluna-acoes">
                            <button class="btn-acao btn-devolver" onclick="verHistoricoAluno(${aluno.id})" title="Ver Histórico">📜</button>
                            <button class="btn-editar" onclick="abrirModalEdicaoAluno(${aluno.id})">Editar</button>
                            <button class="btn-excluir" onclick="excluirAluno(${aluno.id})">Excluir</button>
                        </td>`;
        }
        tbody.innerHTML += `<tr>${rowHtml}</tr>`;
    });

    // Atualiza a contagem total
    totalAlunosEl.textContent = `Exibindo ${alunosFiltrados.length} de ${alunos.length} alunos`;
}

// Função para cadastrar novo aluno
if (document.getElementById('form-aluno')) {
    document.getElementById('form-aluno').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('input-nome-aluno').value;
        const matricula = document.getElementById('input-matricula-aluno').value;
        const telefone = document.getElementById('input-telefone-aluno').value;
        const email = document.getElementById('input-email-aluno').value;
        const senha = document.getElementById('input-senha-aluno').value;

        const novoAluno = {
            // Gera um ID único e seguro para evitar colisões
            id: alunos.length > 0 ? Math.max(...alunos.map(a => a.id)) + 1 : 1,
            nome: nome,
            matricula: matricula,
            telefone: telefone,
            email: email,
            senha: senha
        };

        alunos.push(novoAluno);
        renderizarTabelaAlunos();
        fecharModalCadastroAluno(); // Fecha o modal após cadastrar
        this.reset();
        alert('Aluno cadastrado com sucesso!');
    });
}

// --- Função de Exportar para CSV ---
function exportarAlunosCSV() {
    if (alunos.length === 0) {
        alert("Não há alunos para exportar.");
        return;
    }

    // Cabeçalho do CSV
    let csvContent = "data:text/csv;charset=utf-8,ID,Nome,Matricula,Email,Telefone\n";

    // Linhas
    alunos.forEach(aluno => {
        csvContent += `${aluno.id},"${aluno.nome}","${aluno.matricula}","${aluno.email || ''}","${aluno.telefone || ''}"\n`;
    });

    // Criação do link de download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "lista_alunos_bibliotech.csv");
    document.body.appendChild(link); // Necessário para Firefox
    link.click();
    document.body.removeChild(link);
}

// --- Função Utilitária para Copiar Texto ---
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert("Senha copiada para a área de transferência!");
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
        // Fallback simples
        const tempInput = document.createElement("input");
        tempInput.value = texto;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Senha copiada!");
    });
}

// --- Função de Busca de Alunos ---
function filtrarAlunos() {
    const termo = document.getElementById('busca-aluno-input').value;
    renderizarTabelaAlunos(termo);
}

// --- Funções de Histórico do Aluno ---
function verHistoricoAluno(id) {
    const aluno = alunos.find(a => a.id === id);
    if (!aluno) return;

    const modal = document.getElementById('historico-aluno-modal');
    const titulo = document.getElementById('titulo-historico-aluno');
    const conteudo = document.getElementById('conteudo-historico-aluno');

    titulo.textContent = `Histórico: ${aluno.nome}`;

    // Filtra empréstimos deste aluno
    const historico = emprestimos.filter(e => e.aluno === aluno.nome);

    if (historico.length === 0) {
        conteudo.innerHTML = '<p>Nenhum empréstimo registrado para este aluno.</p>';
    } else {
        let html = `
            <table class="tabela-dados">
                <thead>
                    <tr>
                        <th>Livro</th>
                        <th>Retirada</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
        `;
        historico.forEach(h => {
            const dataRet = new Date(h.retirada + 'T00:00:00').toLocaleDateString('pt-BR');
            html += `
                <tr>
                    <td>${h.livro}</td>
                    <td>${dataRet}</td>
                    <td><span class="${h.status === 'ATRASADO' ? 'status-atrasado' : (h.status === 'CONCLUIDO' ? 'status-concluido' : 'status-aberto')}">${h.status}</span></td>
                </tr>`;
        });
        html += '</tbody></table>';
        conteudo.innerHTML = html;
    }

    modal.style.display = 'flex';
}

function fecharModalHistorico() {
    document.getElementById('historico-aluno-modal').style.display = 'none';
}

// --- Funções do Modal de Cadastro (Novo) ---
function abrirModalCadastroAluno() {
    document.getElementById('aluno-cadastro-modal').style.display = 'flex';
    document.getElementById('input-nome-aluno').focus();
}

function fecharModalCadastroAluno() {
    document.getElementById('aluno-cadastro-modal').style.display = 'none';
}

// --- Funções de Edição de Aluno ---

function abrirModalEdicaoAluno(id) {
    const aluno = alunos.find(a => a.id === id);
    if (!aluno) return;

    // Preenche o formulário do modal com os dados do aluno
    document.getElementById('edit-aluno-id').value = aluno.id;
    document.getElementById('edit-nome-aluno').value = aluno.nome;
    document.getElementById('edit-matricula-aluno').value = aluno.matricula;
    document.getElementById('edit-telefone-aluno').value = aluno.telefone || '';
    document.getElementById('edit-email-aluno').value = aluno.email || '';
    document.getElementById('edit-senha-aluno').value = ''; // Limpa o campo de senha por segurança

    // Exibe o modal
    document.getElementById('aluno-edicao-modal').style.display = 'flex';
}

function fecharModalEdicaoAluno() {
    document.getElementById('aluno-edicao-modal').style.display = 'none';
}

function salvarEdicaoAluno(event) {
    event.preventDefault();

    const id = parseInt(document.getElementById('edit-aluno-id').value);
    const nome = document.getElementById('edit-nome-aluno').value;
    const matricula = document.getElementById('edit-matricula-aluno').value;
    const telefone = document.getElementById('edit-telefone-aluno').value;
    const email = document.getElementById('edit-email-aluno').value;
    const senha = document.getElementById('edit-senha-aluno').value;

    const alunoIndex = alunos.findIndex(a => a.id === id);
    if (alunoIndex === -1) return;

    alunos[alunoIndex].nome = nome;
    alunos[alunoIndex].matricula = matricula;
    alunos[alunoIndex].telefone = telefone;
    alunos[alunoIndex].email = email;
    
    // Atualiza a senha apenas se um novo valor for inserido
    if (senha.trim() !== '') {
        alunos[alunoIndex].senha = senha;
    }

    renderizarTabelaAlunos(); // Atualiza a tabela na tela
    fecharModalEdicaoAluno();
    alert('Dados do aluno atualizados com sucesso!');
}

// Função para excluir livro
function excluirLivro(id) {
    if (confirm('Tem certeza que deseja excluir este livro do catálogo?')) {
        livros = livros.filter(l => l.id !== id);
        renderizarLivros();
    }
}

// --- Funções de Edição de Livro ---

function abrirModalEdicaoLivro(id) {
    const livro = livros.find(l => l.id === id);
    if (!livro) return;

    // Preenche o formulário com os dados atuais
    document.getElementById('edit-livro-id').value = livro.id;
    document.getElementById('edit-titulo-livro').value = livro.titulo;
    document.getElementById('edit-autor-livro').value = livro.autor || '';
    document.getElementById('edit-genero-livro').value = livro.genero;
    document.getElementById('edit-ano-livro').value = livro.ano;
    document.getElementById('edit-estoque-livro').value = livro.estoque;
    document.getElementById('edit-capa-livro').value = livro.capa;
    document.getElementById('edit-descricao-livro').value = livro.descricao || '';

    // Abre o modal
    document.getElementById('livro-edicao-modal').style.display = 'flex';
}

function fecharModalEdicaoLivro() {
    document.getElementById('livro-edicao-modal').style.display = 'none';
}

function salvarEdicaoLivro(event) {
    event.preventDefault();

    const id = parseInt(document.getElementById('edit-livro-id').value);
    const index = livros.findIndex(l => l.id === id);

    if (index > -1) {
        livros[index].titulo = document.getElementById('edit-titulo-livro').value;
        livros[index].autor = document.getElementById('edit-autor-livro').value;
        livros[index].genero = document.getElementById('edit-genero-livro').value;
        livros[index].ano = parseInt(document.getElementById('edit-ano-livro').value);
        livros[index].estoque = parseInt(document.getElementById('edit-estoque-livro').value);
        livros[index].capa = document.getElementById('edit-capa-livro').value;
        livros[index].descricao = document.getElementById('edit-descricao-livro').value;

        renderizarLivros();
        fecharModalEdicaoLivro();
        adicionarNotificacao('Livro Atualizado', `As informações de "${livros[index].titulo}" foram alteradas.`);
        alert('Livro atualizado com sucesso!');
    }
}

// Função para solicitar empréstimo de livro
function solicitarLivro(id) {
    const livro = livros.find(l => l.id === id);
    if (!livro) return;

    const usuarioLogadoNome = localStorage.getItem('usuarioLogado');
    if (!usuarioLogadoNome) {
        alert('Você precisa estar logado para solicitar um livro.');
        return;
    }

    // Encontra o objeto completo do aluno logado para verificar a senha
    const alunoLogado = alunos.find(a => a.nome.toLowerCase() === usuarioLogadoNome.toLowerCase() || a.matricula.toLowerCase() === usuarioLogadoNome.toLowerCase());

    if (!alunoLogado) {
        alert('Erro: Não foi possível encontrar os dados do usuário logado para verificação.');
        return;
    }

    // Pede a senha do usuário para confirmar a operação
    const senhaInserida = prompt(`Para confirmar o empréstimo do livro "${livro.titulo}", por favor, insira sua senha:`);

    // Se o usuário cancelar o prompt, a operação é abortada
    if (senhaInserida === null) {
        alert('Operação cancelada.');
        return;
    }

    // Valida a senha
    if (alunoLogado.senha !== senhaInserida) {
        alert('Senha incorreta. O empréstimo não foi realizado.');
        return;
    }

    // Nova verificação de disponibilidade baseada em estoque
    const emprestados = emprestimos.filter(e => e.livro === livro.titulo && (e.status === 'ABERTO' || e.status === 'ATRASADO')).length;
    const disponiveis = livro.estoque - emprestados;

    if (disponiveis <= 0) {
        alert('Desculpe, este livro não está disponível no momento (todas as cópias estão emprestadas).');
        return;
    }

    // Cria o novo empréstimo
    const hoje = new Date();
    const prevista = new Date();
    prevista.setDate(hoje.getDate() + 7); // Prazo de 7 dias

    const dataRetirada = hoje.toLocaleDateString('pt-BR').split('/').reverse().join('-');
    const dataPrevista = prevista.toLocaleDateString('pt-BR').split('/').reverse().join('-');

    const novoEmprestimo = {
        id: Date.now(),
        aluno: usuarioLogadoNome,
        livro: livro.titulo,
        retirada: dataRetirada,
        prevista: dataPrevista,
        status: 'ABERTO'
    };

    emprestimos.push(novoEmprestimo);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));
    
    adicionarNotificacao('Solicitação de Livro', `Você solicitou o livro "${livro.titulo}".`);
    alert(`Empréstimo realizado com sucesso! O livro "${livro.titulo}" agora está com você.`);
    
    // Atualiza as interfaces
    renderizarLivros();
    renderizarTabela();
}

// Função para renderizar a galeria de livros
function renderizarLivros() {
    localStorage.setItem('livros', JSON.stringify(livros));
    const galleryContainer = document.getElementById('livros-gallery');
    if (!galleryContainer) return; // Proteção contra null

    galleryContainer.innerHTML = '<h2>Catálogo de Livros</h2>'; // Limpa e adiciona título

    // Agrupa os livros por gênero
    const livrosPorGenero = livros.reduce((acc, livro) => {
        (acc[livro.genero] = acc[livro.genero] || []).push(livro);
        return acc;
    }, {});

    const placeholderCapa = 'https://via.placeholder.com/180x240?text=Capa+Indispon%C3%ADvel';
    const isAdmin = true; // Modo admin ativado

    // Itera sobre cada gênero e cria a seção correspondente
    for (const genero in livrosPorGenero) {
        const containerGenero = document.createElement('div');
        containerGenero.className = 'genero-container';
        containerGenero.innerHTML = `<h3 class="genero-titulo">${genero}</h3>`;

        const listaLivros = document.createElement('div');
        listaLivros.className = 'livros-lista';

        const livrosHtml = livrosPorGenero[genero].map(livro => {
            const deleteButton = isAdmin 
                ? `<button class="btn-excluir-livro" onclick="event.stopPropagation(); excluirLivro(${livro.id})">X</button>` 
                : '';
            const editButton = isAdmin
                ? `<button class="btn-editar-livro" onclick="event.stopPropagation(); abrirModalEdicaoLivro(${livro.id})" title="Editar Livro">✏️</button>`
                : '';
            
            // Calcula disponibilidade com base no estoque
            const emprestados = emprestimos.filter(e => e.livro === livro.titulo && (e.status === 'ABERTO' || e.status === 'ATRASADO')).length;
            const disponiveis = livro.estoque - emprestados;
            
            // Cria um resumo curto (até 80 caracteres) para não esticar demais o card
            const descricaoCurta = livro.descricao ? (livro.descricao.length > 80 ? livro.descricao.substring(0, 80) + '...' : livro.descricao) : 'Sem descrição.';

            let statusHtml, btnDisabled, btnText;

            if (disponiveis > 0) {
                statusHtml = `<span class="status-disponivel">● Disponível (${disponiveis})</span>`;
                btnDisabled = '';
                btnText = 'Solicitar';
            } else {
                statusHtml = `<span class="status-indisponivel">● Indisponível</span>`;
                btnDisabled = 'disabled';
                btnText = 'Indisponível';
            }
            
            const requestButton = `<button class="btn-solicitar" onclick="event.stopPropagation(); solicitarLivro(${livro.id})" ${btnDisabled}>${btnText}</button>`;

            return `
                <div class="livro-card" onclick="mostrarDetalhesLivro(${livro.id})">
                    ${deleteButton}
                    ${editButton}
                    <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" class="livro-capa" onerror="this.onerror=null;this.src='${placeholderCapa}';">
                    <p class="livro-titulo">${livro.titulo}</p>
                    <p class="livro-autor">${livro.autor || 'Autor Desconhecido'}</p>
                    <p class="livro-descricao-card">${descricaoCurta}</p>
                    ${statusHtml}
                    ${requestButton}
                </div>
            `;
        }).join('');

        listaLivros.innerHTML = livrosHtml;

        containerGenero.appendChild(listaLivros);
        galleryContainer.appendChild(containerGenero);
    }
}

// Função para mostrar detalhes do livro em um modal
function mostrarDetalhesLivro(id) {
    const livro = livros.find(l => l.id === id);
    if (!livro) return;

    document.getElementById('modal-capa-livro').src = livro.capa;
    document.getElementById('modal-titulo-livro').textContent = livro.titulo;
    document.getElementById('modal-autor-livro').textContent = livro.autor || 'Autor não informado';
    document.getElementById('modal-descricao-livro').textContent = livro.descricao || 'Sem descrição disponível.';
    
    document.getElementById('modal-genero-livro').innerHTML = `<strong>Gênero:</strong> ${livro.genero}`;
    document.getElementById('modal-ano-livro').innerHTML = `<strong>Ano de Lançamento:</strong> ${livro.ano}`;

    document.getElementById('livro-detalhes-modal').style.display = 'flex';
}

// Função para fechar o modal de detalhes do livro
function fecharDetalhesLivro() {
    document.getElementById('livro-detalhes-modal').style.display = 'none';
}

// Debounce para limitar chamadas de API ao digitar
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Busca livros na API do Google Books para preenchimento automático
async function buscarLivrosNaWeb(query) {
    const suggestionsContainer = document.getElementById('livro-search-suggestions');
    if (query.length < 3) { // Só busca com mais de 2 caracteres
        suggestionsContainer.innerHTML = '';
        suggestionsContainer.style.display = 'none';
        return;
    }
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=5&lang=pt`);
        const data = await response.json();
        mostrarSugestoesDeLivros(data.items || []);
    } catch (error) {
        console.error('Erro ao buscar livros na web:', error);
        suggestionsContainer.innerHTML = '<div class="suggestion-item">Erro ao buscar.</div>';
        suggestionsContainer.style.display = 'block';
    }
}

// Mostra as sugestões de livros encontradas na web
function mostrarSugestoesDeLivros(items) {
    const suggestionsContainer = document.getElementById('livro-search-suggestions');
    suggestionsContainer.innerHTML = '';
    if (items.length === 0) {
        suggestionsContainer.style.display = 'none';
        return;
    }

    items.forEach(item => {
        const { volumeInfo } = item;
        const suggestionDiv = document.createElement('div');
        suggestionDiv.className = 'suggestion-item'; // Usando a classe genérica
        suggestionDiv.textContent = `${volumeInfo.title} (${volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Autor desconhecido'})`;
        
        // Ao clicar, preenche o formulário
        suggestionDiv.onclick = () => preencherFormularioComLivro(volumeInfo);
        suggestionsContainer.appendChild(suggestionDiv);
    });

    suggestionsContainer.style.display = 'block';
}

// Preenche o formulário de cadastro com os dados do livro selecionado
function preencherFormularioComLivro(volumeInfo) {
    document.getElementById('input-titulo-livro').value = volumeInfo.title || '';
    document.getElementById('input-genero-livro').value = volumeInfo.categories ? volumeInfo.categories[0] : '';
    document.getElementById('input-autor-livro').value = volumeInfo.authors ? volumeInfo.authors[0] : '';
    document.getElementById('input-descricao-livro').value = volumeInfo.description || '';
    document.getElementById('input-ano-livro').value = volumeInfo.publishedDate ? volumeInfo.publishedDate.substring(0, 4) : '';
    document.getElementById('input-capa-livro').value = volumeInfo.imageLinks ? (volumeInfo.imageLinks.thumbnail || volumeInfo.imageLinks.smallThumbnail) : '';

    // Esconde as sugestões
    document.getElementById('livro-search-suggestions').style.display = 'none';
}


// Função para cadastrar novo livro
if (document.getElementById('form-livro')) {
    document.getElementById('form-livro').addEventListener('submit', function(e) {
        e.preventDefault();

        const novoLivro = {
            // Gera um ID único baseado no tempo para evitar colisões simples
            id: Date.now(), 
            titulo: document.getElementById('input-titulo-livro').value,
            autor: document.getElementById('input-autor-livro').value,
            genero: document.getElementById('input-genero-livro').value,
            capa: document.getElementById('input-capa-livro').value,
            ano: parseInt(document.getElementById('input-ano-livro').value),
            estoque: parseInt(document.getElementById('input-estoque-livro').value) || 1,
            descricao: document.getElementById('input-descricao-livro').value
        };

        livros.push(novoLivro);
        renderizarLivros();
        this.reset();
        adicionarNotificacao('Acervo Atualizado', `O livro "${novoLivro.titulo}" foi adicionado ao catálogo.`);
        alert('Livro adicionado com sucesso!');
    });

    // --- Funcionalidade de busca de livros na web ---
    const inputTituloLivro = document.getElementById('input-titulo-livro');
    const debouncedSearch = debounce(buscarLivrosNaWeb, 400); // Atraso de 400ms

    inputTituloLivro.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
}

// --- SISTEMA DE NOTIFICAÇÕES ---

/**
 * Alterna a visibilidade do dropdown de notificações.
 */
function toggleDropdownNotificacoes() {
    const dropdown = document.getElementById('dropdown-notificacoes-lista');
    if (dropdown) {
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            // Renderiza o conteúdo sempre que o dropdown for aberto
            renderizarDropdownNotificacoes();
        }
    }
}

function adicionarNotificacao(titulo, mensagem) {
    const novaNotificacao = {
        id: Date.now(),
        titulo: titulo,
        mensagem: mensagem,
        data: new Date().toLocaleDateString('pt-BR'),
        lida: false
    };
    notificacoes.unshift(novaNotificacao); // Adiciona no início
    localStorage.setItem('notificacoes', JSON.stringify(notificacoes));
    atualizarContadorNotificacoes();
    renderizarDropdownNotificacoes(); // Atualiza o dropdown em tempo real
}

function atualizarContadorNotificacoes() {
    const naoLidas = notificacoes.filter(n => !n.lida).length;
    // Atualiza badges em todas as páginas
    const badges = document.querySelectorAll('.badge-notificacao');
    badges.forEach(badge => {
        badge.textContent = naoLidas;
        badge.style.display = naoLidas > 0 ? 'inline-block' : 'none';
    });
}

function renderizarDropdownNotificacoes() {
    const container = document.querySelector('#dropdown-notificacoes-lista .dropdown-body');
    if (!container) return;

    container.innerHTML = '';

    if (notificacoes.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Nenhuma notificação.</p>';
        return;
    }

    // Mostra apenas as 7 notificações mais recentes no dropdown
    const notificacoesRecentes = notificacoes.slice(0, 7);

    notificacoesRecentes.forEach(n => {
        const classeLida = n.lida ? '' : 'nao-lida';
        // A notificação inteira se torna um botão para marcar como lida
        const html = `
            <div class="notificacao-item ${classeLida}" onclick="marcarNotificacaoComoLida(${n.id})">
                <div class="notificacao-info">
                    <h4>${n.titulo}</h4>
                    <p>${n.mensagem}</p>
                    <span class="notificacao-data">${n.data}</span>
                </div>
                ${!n.lida ? '<div style="width: 10px; height: 10px; background-color: #3498db; border-radius: 50%;"></div>' : ''}
            </div>
        `;
        container.innerHTML += html;
    });
}

/**
 * Renderiza a lista completa de notificações na página dedicada.
 */
function renderizarPaginaNotificacoes() {
    const container = document.getElementById('lista-notificacoes');
    if (!container) return;

    container.innerHTML = '';

    if (notificacoes.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 20px;">Nenhuma notificação encontrada.</p>';
        return;
    }

    notificacoes.forEach(n => {
        const classeLida = n.lida ? '' : 'nao-lida';
        const botaoMarcar = !n.lida ? 
            `<button class="btn-acao" style="color: #3498db; font-size: 0.8rem;" onclick="marcarNotificacaoComoLida(${n.id})">Marcar como lida</button>` : 
            '<span style="color: #27ae60; font-size: 0.8rem;">✓ Lida</span>';

        const html = `
            <div class="notificacao-item ${classeLida}">
                <div class="notificacao-info">
                    <h4>${n.titulo}</h4>
                    <p>${n.mensagem}</p>
                    <span class="notificacao-data">${n.data}</span>
                </div>
                <div>${botaoMarcar}</div>
            </div>
        `;
        container.innerHTML += html;
    });
    atualizarContadorNotificacoes();
}

function marcarNotificacaoComoLida(id) {
    const notif = notificacoes.find(n => n.id === id);
    if (notif) {
        // Só atualiza se não estiver lida, para evitar re-renderizações desnecessárias
        if (notif.lida) return;

        notif.lida = true;
        localStorage.setItem('notificacoes', JSON.stringify(notificacoes));
        
        // Atualiza as duas visualizações (página principal e dropdown)
        if (document.getElementById('lista-notificacoes')) {
            renderizarPaginaNotificacoes();
        }
        renderizarDropdownNotificacoes();
        atualizarContadorNotificacoes();
    }
}

function marcarTodasComoLidas() {
    notificacoes.forEach(n => n.lida = true);
    localStorage.setItem('notificacoes', JSON.stringify(notificacoes));
    
    if (document.getElementById('lista-notificacoes')) renderizarPaginaNotificacoes();
    renderizarDropdownNotificacoes();
    atualizarContadorNotificacoes();
}


// Função de navegação entre seções
function navegar(secaoId) {
    // Esconde todas as seções
    document.querySelectorAll('main > section').forEach(sec => {
        sec.style.display = 'none';
    });

    // Mostra a seção clicada
    document.getElementById(`secao-${secaoId}`).style.display = 'block';

    // Atualiza a classe 'active' no menu da sidebar
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.sidebar a[onclick="navegar('${secaoId}')"]`).classList.add('active');

    // Se a seção for de alunos, renderiza a tabela de alunos
    if (secaoId === 'alunos') {
        renderizarTabelaAlunos();
    } else if (secaoId === 'livros') {
        const formContainer = document.getElementById('form-livro-container');
        const isAdmin = true; // Modo admin ativado
        if (formContainer) {
            if (isAdmin) {
                formContainer.style.display = 'block';
            } else {
                formContainer.style.display = 'none';
            }
        }
        renderizarLivros();
    }
}

// Função de Logout
function logout() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('userRole');
    window.location.href = 'login.html';
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderizarTabela();
    renderizarDropdownNotificacoes(); // Popula o dropdown ao carregar
    atualizarContadorNotificacoes(); // Inicia o contador

    // Carregar nome do usuário logado
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
        const elementoUsuario = document.getElementById('usuario-logado');
        if (elementoUsuario) elementoUsuario.textContent = `Olá 👋, ${usuarioLogado}`;
    }

    // --- Lógica do Modo Escuro ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    const applyTheme = (isDark) => {
        document.body.classList.toggle('dark-mode', isDark);
        if (darkModeToggle) {
            darkModeToggle.checked = isDark;
        }
    };

    // Verifica a preferência salva no localStorage ao carregar a página
    const savedTheme = localStorage.getItem('theme');
    // Se não houver tema salvo, usa a preferência do sistema. Senão, usa o tema salvo.
    const initialThemeIsDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(initialThemeIsDark);

    // Adiciona o listener para o botão de toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            const isDark = darkModeToggle.checked;
            applyTheme(isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // --- Autocomplete para formulário de empréstimo ---
    const inputAluno = document.getElementById('input-aluno');
    const inputLivroEmprestimo = document.getElementById('input-livro');

    // Lógica para Alunos
    if (inputAluno) {
        const debouncedAlunoSearch = debounce((query) => {
            const suggestionsContainer = document.getElementById('aluno-suggestions');
            if (!query || query.length < 1) {
                suggestionsContainer.style.display = 'none';
                return;
            }
            const sugestoesFiltradas = alunos.filter(aluno =>
                aluno.nome.toLowerCase().includes(query.toLowerCase())
            );
            
            suggestionsContainer.innerHTML = '';
            if (sugestoesFiltradas.length > 0) {
                sugestoesFiltradas.forEach(aluno => {
                    const suggestionDiv = document.createElement('div');
                    suggestionDiv.className = 'suggestion-item';
                    suggestionDiv.textContent = aluno.nome;
                    suggestionDiv.onclick = () => {
                        inputAluno.value = aluno.nome;
                        suggestionsContainer.style.display = 'none';
                    };
                    suggestionsContainer.appendChild(suggestionDiv);
                });
                suggestionsContainer.style.display = 'block';
            } else {
                suggestionsContainer.style.display = 'none';
            }
        }, 300);

        inputAluno.addEventListener('input', (e) => {
            debouncedAlunoSearch(e.target.value);
        });
    }

    // Lógica para Livros (no empréstimo)
    if (inputLivroEmprestimo) {
        const debouncedLivroSearch = debounce((query) => {
            const suggestionsContainer = document.getElementById('livro-suggestions');
            if (!query || query.length < 1) {
                suggestionsContainer.style.display = 'none';
                return;
            }
            const sugestoesFiltradas = livros.filter(livro =>
                livro.titulo.toLowerCase().includes(query.toLowerCase())
            );
            
            suggestionsContainer.innerHTML = '';
            if (sugestoesFiltradas.length > 0) {
                sugestoesFiltradas.forEach(livro => {
                    const suggestionDiv = document.createElement('div');
                    suggestionDiv.className = 'suggestion-item';
                    suggestionDiv.textContent = livro.titulo;
                    suggestionDiv.onclick = () => {
                        inputLivroEmprestimo.value = livro.titulo;
                        suggestionsContainer.style.display = 'none';
                    };
                    suggestionsContainer.appendChild(suggestionDiv);
                });
                suggestionsContainer.style.display = 'block';
            } else {
                suggestionsContainer.style.display = 'none';
            }
        }, 300);

        inputLivroEmprestimo.addEventListener('input', (e) => {
            debouncedLivroSearch(e.target.value);
        });
    }

    // Esconde as sugestões se o usuário clicar fora da área
    document.addEventListener('click', function(event) {
        document.querySelectorAll('.suggestions-container').forEach(container => {
            if (!container.parentElement.contains(event.target)) {
                container.style.display = 'none';
            }
        });

        // Esconde o dropdown de notificações se clicar fora
        const notificacoesContainer = document.querySelector('.notificacoes-container');
        if (notificacoesContainer && !notificacoesContainer.contains(event.target)) {
            document.getElementById('dropdown-notificacoes-lista').style.display = 'none';
        }
    });
});
