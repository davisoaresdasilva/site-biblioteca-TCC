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
let livros = JSON.parse(localStorage.getItem('livros')) || [ // Consolidado com dados de home.html
    { id: 1, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', genero: 'Infantil', capa: 'https://m.media-amazon.com/images/I/71OufPNU0VL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1943, descricao: 'Um piloto cai no deserto do Saara e encontra um jovem príncipe que viaja por planetas. Uma obra atemporal sobre amor, amizade e a essência humana.', avaliacao: 5 },
    { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis', genero: 'Clássicos', capa: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg', estoque: 3, ano: 1899, descricao: 'Bento Santiago relembra sua vida e a dúvida que o atormenta: Capitu o traiu com seu melhor amigo? Um estudo psicológico sobre ciúme e ambiguidade.', avaliacao: 4 },
    { id: 3, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/81ibfYk4qXL._AC_UF1000,1000_QL80_.jpg', estoque: 5, ano: 1997, descricao: 'Um órfão descobre ser um bruxo famoso e ingressa em Hogwarts. Lá, ele aprende magia, faz amigos leais e enfrenta o terrível Lord Voldemort.', avaliacao: 5 },
    { id: 4, titulo: '1984', autor: 'George Orwell', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/91JcKz0qfSL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1949, descricao: 'Em uma sociedade totalitária vigiada pelo Grande Irmão, Winston Smith tenta resistir à opressão e à manipulação da verdade em um futuro distópico sombrio.', avaliacao: 4 },
    { id: 5, titulo: 'O Guia do Mochileiro das Galáxias', autor: 'Douglas Adams', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/81e1rTE5LBL._AC_UF1000,1000_QL80_.jpg', estoque: 1, ano: 1979, descricao: 'Arthur Dent escapa da destruição da Terra com seu amigo alienígena. Juntos, exploram o universo com um guia eletrônico e uma toalha.', avaliacao: 4 },
    { id: 6, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', autor: 'J.R.R. Tolkien', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91Yr0n5lNWL._AC_UF1000,1000_QL80_.jpg', estoque: 3, ano: 1954, descricao: 'Frodo herda um anel capaz de controlar o mundo e precisa destruí-lo na Montanha da Perdição, enfrentando perigos épicos com a Sociedade do Anel.', avaliacao: 5 },
    { id: 7, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', genero: 'Clássicos', capa: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1813, descricao: 'Elizabeth Bennet e o rico Sr. Darcy enfrentam barreiras de orgulho e preconceito social enquanto descobrem o amor na Inglaterra do século XIX.', avaliacao: 4 },
    { id: 8, titulo: 'Duna', autor: 'Frank Herbert', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/41MRn6xK7bL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1965, descricao: 'Paul Atreides lidera nômades no planeta desértico Arrakis, única fonte da especiaria que permite viagens interestelares, em uma saga de política e religião.', avaliacao: 5 },
    { id: 9, titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UF1000,1000_QL80_.jpg', estoque: 3, ano: 1937, descricao: 'Bilbo Bolseiro, um hobbit caseiro, é arrastado pelo mago Gandalf e treze anões em uma jornada perigosa para recuperar um tesouro guardado por um dragão.', avaliacao: 5 },
    { id: 10, titulo: 'A Culpa é das Estrelas', autor: 'John Green', genero: 'Romance', capa: 'https://m.media-amazon.com/images/I/512f45y7q4L._AC_UF1000,1000_QL80_.jpg', estoque: 1, ano: 2012, descricao: 'Dois adolescentes com câncer se apaixonam e buscam um autor recluso em Amsterdã, aprendendo sobre a vida, a morte e o infinito de momentos curtos.', avaliacao: 4 },
    { id: 11, titulo: 'Percy Jackson: O Ladrão de Raios', autor: 'Rick Riordan', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91c30Jg8dQL._AC_UF1000,1000_QL80_.jpg', estoque: 4, ano: 2005, descricao: 'Percy descobre ser filho de Poseidon e é acusado de roubar o raio de Zeus. Ele deve provar sua inocência e impedir uma guerra entre os deuses gregos.', avaliacao: 4 },
    { id: 12, titulo: 'It: A Coisa', autor: 'Stephen King', genero: 'Terror', capa: 'https://m.media-amazon.com/images/I/81c8No6lsuL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1986, descricao: 'Em Derry, um grupo de crianças enfrenta uma entidade maligna que desperta a cada 27 anos para se alimentar de medos, assumindo a forma de um palhaço.', avaliacao: 3 },
    { id: 13, titulo: 'Sherlock Holmes: Um Estudo em Vermelho', autor: 'Arthur Conan Doyle', genero: 'Mistério', capa: 'https://m.media-amazon.com/images/I/81+y+g+9G+L._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 1887, descricao: 'Dr. Watson conhece o detetive Sherlock Holmes e juntos investigam um misterioso assassinato em Londres, dando início a uma lendária parceria.', avaliacao: 4 },
    { id: 14, titulo: 'Jogos Vorazes', autor: 'Suzanne Collins', genero: 'Distopia', capa: 'https://m.media-amazon.com/images/I/61I24wOsn8L._AC_UF1000,1000_QL80_.jpg', estoque: 3, ano: 2008, descricao: 'Em uma distopia onde jovens lutam até a morte na TV, Katniss Everdeen se voluntaria para salvar a irmã e acaba desafiando o poder da Capital.', avaliacao: 4 },
    { id: 15, titulo: 'O Código Da Vinci', autor: 'Dan Brown', genero: 'Suspense', capa: 'https://m.media-amazon.com/images/I/81AFG2ww2UL._AC_UF1000,1000_QL80_.jpg', estoque: 2, ano: 2003, descricao: 'Um simbologista e uma criptógrafa seguem pistas em obras de Da Vinci para desvendar um segredo religioso antigo protegido por uma sociedade secreta.', avaliacao: 3 },
    { id: 16, titulo: 'O Alquimista', autor: 'Paulo Coelho', genero: 'Ficção', capa: 'https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UF1000,1000_QL80_.jpg', estoque: 3, ano: 1988, descricao: 'Santiago, um jovem pastor, viaja da Espanha ao Egito em busca de um tesouro, descobrindo que a verdadeira riqueza está na jornada e em ouvir o coração.', avaliacao: 4 },
    { id: 17, titulo: 'O Nome do Vento', autor: 'Patrick Rothfuss', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/71S8u2GrVbL._AC_UF1000,1000_QL80_.jpg', estoque: 1, ano: 2007, descricao: 'Kvothe, um lendário arcanista e músico, narra sua história de infância, tragédia e aprendizado na Universidade, revelando os mistérios por trás do mito.', avaliacao: 5 },
    { id: 18, titulo: 'A Metamorfose', autor: 'Franz Kafka', genero: 'Ficção', capa: 'https://m.media-amazon.com/images/I/71ss5-d18RL._AC_UF1000,1000_QL80_.jpg', estoque: 4, ano: 1915, descricao: 'Gregor Samsa acorda transformado em um inseto gigante. Enquanto luta para se adaptar, observa a reação de repulsa e a mudança de atitude de sua família.', avaliacao: 3 }
];

// Dados simulados de notificações
let notificacoes = JSON.parse(localStorage.getItem('notificacoes')) || [
    { id: 1, titulo: 'Bem-vindo ao BiblioTech', mensagem: 'Seu sistema de gestão foi atualizado.', data: '2023-10-27', lida: false, prioridade: 'media' },
    { id: 2, titulo: 'Novo Livro Disponível', mensagem: 'O livro "Clean Code" foi adicionado ao acervo.', data: '2023-10-26', lida: true, prioridade: 'baixa' },
    { id: 3, titulo: 'Lembrete de Devolução', mensagem: 'Verifique os atrasos na aba de empréstimos.', data: '2023-10-25', lida: false, prioridade: 'alta' }
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
    
    adicionarNotificacao('Novo Empréstimo', `O livro "${livro}" foi emprestado para ${nomeAluno}.`, 'media');
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
            adicionarNotificacao('Livro Devolvido', `O livro "${emprestimo.livro}" foi devolvido.`, 'baixa');
        }
    }
}

// Função para marcar livro como atrasado manually
function marcarAtrasado(id) {
    const emprestimo = emprestimos.find(e => e.id === id);
    if (emprestimo && emprestimo.status !== 'CONCLUIDO') {
        emprestimo.status = 'ATRASADO';
        renderizarTabela();
        adicionarNotificacao('ALERTA DE ATRASO', `O empréstimo de "${emprestimo.livro}" para ${emprestimo.aluno} está atrasado!`, 'alta');
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

    const isAdmin = localStorage.getItem('userRole') === 'admin';

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
    if (totalAlunosEl) totalAlunosEl.textContent = `Exibindo ${alunosFiltrados.length} de ${alunos.length} alunos`;
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
    fecharModalComAnimacao('historico-aluno-modal');
}

/**
 * Helper para fechar modais com animação.
 */
function fecharModalComAnimacao(modalId, contentSelector = '.modal-content') {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const content = modal.querySelector(contentSelector);
    content.classList.add('closing');
    content.addEventListener('animationend', () => {
        modal.style.display = 'none';
        content.classList.remove('closing');
    }, { once: true });
}

// --- Funções do Modal de Cadastro (Novo) ---
function abrirModalCadastroAluno() {
    document.getElementById('aluno-cadastro-modal').style.display = 'flex';
    document.getElementById('input-nome-aluno').focus();
}

function fecharModalCadastroAluno() {
    fecharModalComAnimacao('aluno-cadastro-modal');
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
    fecharModalComAnimacao('aluno-edicao-modal');
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
    fecharModalComAnimacao('livro-edicao-modal');
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
        adicionarNotificacao('Livro Atualizado', `As informações de "${livros[index].titulo}" foram alteradas.`, 'baixa');
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
    
    adicionarNotificacao('Solicitação de Livro', `Você solicitou o livro "${livro.titulo}".`, 'baixa');
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
    const isAdmin = localStorage.getItem('userRole') === 'admin';

    let totalCards = 0;
    // Itera sobre cada gênero e cria a seção correspondente
    for (const genero in livrosPorGenero) {
        const containerGenero = document.createElement('div');
        containerGenero.className = 'genero-container';
        containerGenero.innerHTML = `<h3 class="genero-titulo">${genero}</h3>`;

        const listaLivros = document.createElement('div');
        listaLivros.className = 'livros-lista';

        const livrosHtml = livrosPorGenero[genero].map(livro => {
            const delay = (totalCards++) * 0.05;
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
                <div class="livro-card" style="animation-delay: ${delay}s" onclick="mostrarDetalhesLivro(${livro.id})">
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

    // Atualiza status de disponibilidade e botão no modal
    const statusContainer = document.getElementById('modal-status-livro');
    const btnContainer = document.getElementById('modal-botao-container');
    
    if (statusContainer && btnContainer) {
        const emprestados = emprestimos.filter(e => e.livro === livro.titulo && (e.status === 'ABERTO' || e.status === 'ATRASADO')).length;
        const disponiveis = livro.estoque - emprestados;

        if (disponiveis > 0) {
            statusContainer.innerHTML = `<span class="status-disponivel">● Disponível (${disponiveis} unidades)</span>`;
            btnContainer.innerHTML = `<button class="btn-primary" style="width: 100%" onclick="solicitarLivro(${livro.id})">Solicitar Empréstimo</button>`;
        } else {
            statusContainer.innerHTML = `<span class="status-indisponivel">● Indisponível no momento</span>`;
            btnContainer.innerHTML = `<button class="btn-primary" style="width: 100%; background: #bdc3c7; cursor: not-allowed;" disabled>Indisponível</button>`;
        }
    }

    document.getElementById('livro-detalhes-modal').style.display = 'flex';
}

// Função para fechar o modal de detalhes do livro
function fecharDetalhesLivro() {
    fecharModalComAnimacao('livro-detalhes-modal');
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
        adicionarNotificacao('Acervo Atualizado', `O livro "${novoLivro.titulo}" foi adicionado ao catálogo.`, 'baixa');
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

function adicionarNotificacao(titulo, mensagem, prioridade = 'baixa') {
    const novaNotificacao = {
        id: Date.now(),
        titulo: titulo,
        mensagem: mensagem,
        data: new Date().toLocaleDateString('pt-BR'),
        lida: false,
        prioridade: prioridade
    };
    notificacoes.unshift(novaNotificacao); // Adiciona no início
    localStorage.setItem('notificacoes', JSON.stringify(notificacoes));
    atualizarContadorNotificacoes();
    renderizarDropdownNotificacoes(); // Atualiza o dropdown em tempo real

    // Toca o som apenas se a notificação for considerada urgente (alta prioridade)
    if (prioridade === 'alta') {
        playNotificationSound();
    }
}

function atualizarContadorNotificacoes() {
    const naoLidas = notificacoes.filter(n => !n.lida).length;
    // Atualiza badges em todas as páginas
    const badges = document.querySelectorAll('.badge-notificacao');
    badges.forEach(badge => {
        badge.textContent = naoLidas;
        badge.style.display = naoLidas > 0 ? 'inline-block' : 'none';
    });

    // Adiciona ou remove o efeito de pulso no ícone do sino conforme o status das notificações
    const sinos = document.querySelectorAll('.sino-notificacao');
    sinos.forEach(sino => {
        if (naoLidas > 0) sino.classList.add('animar-pulso');
        else sino.classList.remove('animar-pulso');
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
        const classePrioridade = n.prioridade === 'alta' ? 'prioridade-alta' : '';
        // A notificação inteira se torna um botão para marcar como lida
        const html = `
            <div class="notificacao-item ${classeLida} ${classePrioridade}" onclick="marcarNotificacaoComoLida(${n.id})">
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
        const classePrioridade = n.prioridade === 'alta' ? 'prioridade-alta' : '';
        const botaoMarcar = !n.lida ? 
            `<button class="btn-acao" style="color: #3498db; font-size: 0.8rem;" onclick="marcarNotificacaoComoLida(${n.id})">Marcar como lida</button>` : 
            '<span style="color: #27ae60; font-size: 0.8rem;">✓ Lida</span>';

        const html = `
            <div class="notificacao-item ${classeLida} ${classePrioridade}">
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
function navegar(secaoId, event = null) {
    // Esconde todas as seções
    document.querySelectorAll('main > section').forEach(sec => {
        sec.style.display = 'none';
    });

    // Mostra a seção clicada
    document.getElementById(`secao-${secaoId}`).style.display = 'block';
    const mainTitleElement = document.getElementById('main-content-title');
    if (mainTitleElement) {
        mainTitleElement.textContent = getSectionTitle(secaoId);
    }

    // Atualiza a classe 'active' no menu da sidebar de forma robusta
    if (event) event.preventDefault();
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        const onclickAttr = link.getAttribute('onclick') || "";
        if (onclickAttr.includes(`'${secaoId}'`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const isAdmin = localStorage.getItem('userRole') === 'admin';

    // Se a seção for de alunos, renderiza a tabela de alunos
    if (secaoId === 'alunos') {
        if (!isAdmin) {
            alert('Acesso restrito: Apenas administradores podem acessar a gestão de alunos.');
            navegar('home');
            return;
        }
        renderizarTabelaAlunos();
    } else if (secaoId === 'livros') {
        const formContainer = document.getElementById('form-livro-container');
        if (formContainer) {
            if (isAdmin) {
                formContainer.style.display = 'block';
            } else {
                formContainer.style.display = 'none';
            }
        }
        renderizarLivros();
    } else if (['home', 'destaques', 'favoritos', 'catalogo'].includes(secaoId)) {
        renderizarTudo();
    } else if (secaoId === 'clube-livro') {
        renderizarChat();
    }
}

// Função de Logout
function logout() {
    // Adiciona a classe de fade-out ao body para uma transição suave
    document.body.classList.add('fade-out');

    // Aguarda o tempo da animação (500ms) antes de redirecionar
    setTimeout(() => {
        localStorage.removeItem('usuarioLogado');
        localStorage.removeItem('userRole');
        // Nota: Removendo o clear global das mensagens para suportar a persistência por usuário
        window.location.href = 'login.html';
    }, 500);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    navegar('home', null); // Inicia na seção "Início"
    renderizarTabela();
    renderizarDropdownNotificacoes(); // Popula o dropdown ao carregar
    atualizarContadorNotificacoes(); // Inicia o contador (do home.html)
    
    // --- Ouvinte do botão de Microfone ---
    const micBtn = document.getElementById('ai-mic-btn');
    if (micBtn) {
        micBtn.addEventListener('click', startVoiceRecognition);
    }

    // Ativa a escuta passiva do comando de voz "Ok BiblioTech"
    iniciarEscutaHotword();

    // Controle de visibilidade do menu lateral baseado no perfil
    const isAdmin = localStorage.getItem('userRole') === 'admin';
    const navItemAlunos = document.getElementById('nav-item-alunos');
    if (navItemAlunos) {
        navItemAlunos.style.display = isAdmin ? 'block' : 'none';
    }

    // --- Lógica do Controle de Som ---
    const soundToggle = document.getElementById('sound-toggle');
    const soundLabel = document.getElementById('sound-label');
    
    if (soundToggle) {
        const savedSound = localStorage.getItem('sound_enabled');
        soundToggle.checked = savedSound !== 'false'; // Padrão é true
        if (soundLabel) soundLabel.textContent = soundToggle.checked ? '🔊' : '🔇';

        soundToggle.addEventListener('change', () => {
            localStorage.setItem('sound_enabled', soundToggle.checked);
            if (soundLabel) soundLabel.textContent = soundToggle.checked ? '🔊' : '🔇';
        });
    }

    // Carregar nome do usuário logado
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
        const elementoUsuario = document.getElementById('usuario-logado');
        if (elementoUsuario) elementoUsuario.textContent = `Olá 👋, ${usuarioLogado}`;
    }

    // --- Lógica Unificada do Modo Escuro ---
    const themeToggle = document.getElementById('theme-toggle') || document.getElementById('dark-mode-toggle');

    const applyTheme = (isDark) => {
        document.body.classList.toggle('dark-mode', isDark);
        if (themeToggle) themeToggle.checked = isDark;
    };

    const savedTheme = localStorage.getItem('theme');
    const initialThemeIsDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(initialThemeIsDark);

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            applyTheme(themeToggle.checked);
            playClickSound();
            localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
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

// --- Funções de Destaques, Favoritos, Recomendações (do home.html) ---
let favoritos = JSON.parse(localStorage.getItem('meus_favoritos')) || [];

// Novo: Armazena os livros curtidos por cada usuário
let userLikes = JSON.parse(localStorage.getItem('user_likes')) || {};

/**
 * Adiciona ou remove um livro da lista de curtidas do usuário logado.
 * Atualiza o localStorage e re-renderiza a interface.
 * @param {number} bookId O ID do livro a ser curtido/descurtido.
 */
function toggleLike(bookId) {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        alert('Você precisa estar logado para curtir um livro!');
        return;
    }

    // Garante que o array de likes para o usuário existe
    if (!userLikes[usuarioLogado]) {
        userLikes[usuarioLogado] = [];
    }

    const index = userLikes[usuarioLogado].indexOf(bookId);
    const livroCurtido = livros.find(l => l.id === bookId);

    if (index === -1) {
        userLikes[usuarioLogado].push(bookId);
        playClickSound(); // Feedback sonoro para curtir
        adicionarNotificacao('Livro Curtido', `Você curtiu o livro "${livroCurtido.titulo}".`, 'baixa');
    } else {
        userLikes[usuarioLogado].splice(index, 1);
        adicionarNotificacao('Livro Descurtido', `Você descurtiu o livro "${livroCurtido.titulo}".`, 'baixa');
/**
 * Renderiza o painel de estatísticas rápidas na Home
 */
function renderizarEstatisticas() {
    const container = document.getElementById('stats-dashboard');
    if (!container) return;

    const totalLivros = livros.length;
    const totalAlunos = alunos.length;
    const emprestimosAtivos = emprestimos.filter(e => e.status !== 'CONCLUIDO').length;
    const totalAtrasados = emprestimos.filter(e => e.status === 'ATRASADO').length;

    container.innerHTML = `
        <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-info">
                <span class="stat-value">${totalLivros}</span>
                <span class="stat-label">Livros</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-info">
                <span class="stat-value">${totalAlunos}</span>
                <span class="stat-label">Alunos</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">📑</div>
            <div class="stat-info">
                <span class="stat-value">${emprestimosAtivos}</span>
                <span class="stat-label">Ativos</span>
            </div>
        </div>
        <div class="stat-card ${totalAtrasados > 0 ? 'atrasado-alerta' : ''}">
            <div class="stat-icon">⚠️</div>
            <div class="stat-info">
                <span class="stat-value">${totalAtrasados}</span>
                <span class="stat-label">Atrasos</span>
            </div>
        </div>
    `;
}

/**
 * Calcula o gênero mais frequente nos empréstimos do usuário logado
 */
function obterGeneroFavorito(usuarioNome) {
    const meusEmprestimos = emprestimos.filter(e => e.aluno === usuarioNome);
    if (meusEmprestimos.length === 0) return null;

    const contagemGeneros = {};
    meusEmprestimos.forEach(emp => {
        const livro = livros.find(l => l.titulo === emp.livro);
        if (livro) {
            contagemGeneros[livro.genero] = (contagemGeneros[livro.genero] || 0) + 1;
        }
    });

    // Retorna o gênero com maior contagem
    return Object.keys(contagemGeneros).reduce((a, b) => contagemGeneros[a] > contagemGeneros[b] ? a : b);
}

/**
 * Renderiza livros recomendados baseados no perfil de leitura do aluno
 */
function renderizarRecomendacoesPerfil() {
    const container = document.getElementById('recomendacoes-perfil-container');
    if (!container) return;

    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        container.innerHTML = '';
        return;
    }

    const generoFavorito = obterGeneroFavorito(usuarioLogado);
    
    if (!generoFavorito) {
        container.innerHTML = `
            <div class="card-informativo">
                <p>💡 <strong>Dica:</strong> Pegue seu primeiro livro emprestado para receber recomendações personalizadas!</p>
            </div>`;
        return;
    }

    // Filtra livros do mesmo gênero que o usuário ainda não pegou (opcional, aqui pegamos todos do gênero)
    const sugestoes = livros.filter(l => l.genero === generoFavorito).slice(0, 4);

    container.innerHTML = `
        <h2 style="margin-top: 30px;">🎯 Recomendado para seu perfil: ${generoFavorito}</h2>
        <div class="grid-livros" id="grid-recomendacoes-perfil"></div>
    `;

    const grid = document.getElementById('grid-recomendacoes-perfil');
    sugestoes.forEach((l, i) => grid.appendChild(criarCard(l, mostrarRecomendacoes, i * 0.1)));
}

// Estrelas
function gerarEstrelas(nota) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<span class="${i <= nota ? 'estrela-cheia' : 'estrela-vazia'}">★</span>`;
    }
    return html;
}

// Criar Card
function criarCard(livro, callback, delay = 0) {
    const card = document.createElement('div');
    card.className = 'livro-card';
    card.onclick = () => callback(livro);
    // Aplica o efeito de stagger (atraso na animação)
    card.style.animationDelay = `${delay}s`;
    
    // Adiciona o ID do livro ao card para facilitar a identificação
    const isFav = favoritos.includes(livro.id);
    
    card.innerHTML = `
        <button class="btn-favorito ${isFav ? 'ativo' : ''}" onclick="event.stopPropagation(); toggleFavorito(${livro.id})">❤</button>
        <img src="${livro.capa}" class="capa" alt="${livro.titulo}" onerror="this.onerror=null;this.src='https://via.placeholder.com/150x220?text=Sem+Capa'">
        <div class="genero">${livro.genero}</div>
        <div class="titulo">${livro.titulo}</div>
        <div class="autor">${livro.autor}</div>
        <div class="avaliacao">${gerarEstrelas(livro.avaliacao || 0)}</div>
    `;
    return card;
}

function toggleFavorito(id) {
    const idx = favoritos.indexOf(id);
    idx === -1 ? favoritos.push(id) : favoritos.splice(idx, 1);
    localStorage.setItem('meus_favoritos', JSON.stringify(favoritos));
    renderizarTudo(); // Re-renderiza todas as seções que dependem de favoritos (Destaques, Favoritos, Catálogo)
}

function mostrarRecomendacoes(selecionado) {
    const container = document.getElementById('recomendacoes');
    const secao = document.getElementById('secao-recomendacoes');
    const filtrados = livros.filter(l => l.genero === selecionado.genero && l.id !== selecionado.id);
    
    container.innerHTML = '';
    if (filtrados.length > 0) {
        filtrados.slice(0, 3).forEach(l => container.appendChild(criarCard(l, mostrarRecomendacoes)));
        secao.style.display = 'block';
        // Garante que a seção de recomendações seja visível e role para ela
        // Isso é importante pois a seção pode estar oculta inicialmente
        secao.scrollIntoView({ behavior: 'smooth' });
    } else {
        secao.style.display = 'none';
    }
}

function renderizarTudo() {
    renderizarEstatisticas();
    renderizarRecomendacoesPerfil();
    // Destaques
    const gridDestaques = document.getElementById('grid-destaques');
    if (gridDestaques) {
        gridDestaques.innerHTML = '';
        livros.filter(l => l.avaliacao === 5).forEach((l, i) => gridDestaques.appendChild(criarCard(l, mostrarRecomendacoes, i * 0.08)));
    }

    // Favoritos
    const secaoFav = document.getElementById('secao-favoritos');
    const gridFav = document.getElementById('grid-favoritos');
    if (gridFav) {
        gridFav.innerHTML = '';
        const listaFav = livros.filter(l => favoritos.includes(l.id));
        if (listaFav.length > 0) {
            if (secaoFav) secaoFav.style.display = 'block';
            listaFav.forEach((l, i) => gridFav.appendChild(criarCard(l, mostrarRecomendacoes, i * 0.08)));
        } else if (secaoFav) { 
            secaoFav.style.display = 'none'; 
        }
    }

    // Catálogo
    const catalogo = document.getElementById('catalogo');
    if (catalogo) {
        catalogo.innerHTML = '';
        livros.forEach((l, i) => catalogo.appendChild(criarCard(l, mostrarRecomendacoes, i * 0.05)));
    }
}

/**
 * Incrementa as curtidas de uma mensagem e atualiza o armazenamento
 */
function reagirMensagem(id) {
    const index = mensagensChat.findIndex(m => m.id === id);
    if (index !== -1) {
        mensagensChat[index].likes = (mensagensChat[index].likes || 0) + 1;
        const user = localStorage.getItem('usuarioLogado') || 'default';
        localStorage.setItem(`chat_messages_${user}`, JSON.stringify(mensagensChat));
        renderizarChat(); // Re-renderiza para atualizar os contadores na tela
    }
}

// --- Chat Logic (do home.html) ---
const chatForm = document.getElementById('chat-form');
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');

let mensagensChat = []; // Inicializado dinamicamente no renderizarChat

function addChatMessage(text, type, user = "Usuário", time = null, save = true, image = null, id = Date.now(), likes = 0) {
    const currentTime = time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const initials = user.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    
    const msg = document.createElement('div');
    msg.className = `message ${type}`;
    msg.innerHTML = `
        <div class="message-avatar">${initials}</div>
        <div class="message-content">
            <small class="message-user">${user}</small>
            ${image ? `<img src="${image}" class="message-image" alt="Imagem enviada" onclick="window.open(this.src)">` : ''}
            ${text ? `<span>${text}</span>` : ''}
            <div class="message-footer">
                <span class="chat-time">${currentTime}</span>
                <button class="btn-react" onclick="reagirMensagem(${id})">❤️ <span class="like-count">${likes}</span></button>
            </div>
        </div>
    `;
    
    if (chatWindow) { // Verifica se o elemento do chat existe
        chatWindow.appendChild(msg);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    if (save) {
        const userLogged = localStorage.getItem('usuarioLogado') || 'default';
        mensagensChat.push({ id, text, type, user, time: currentTime, image, likes });
        localStorage.setItem(`chat_messages_${userLogged}`, JSON.stringify(mensagensChat));
    }
}

function renderizarChat() {
    if (!chatWindow || document.getElementById('secao-clube-livro').style.display === 'none') return; // Verifica se o elemento existe e a seção está visível
    chatWindow.innerHTML = '';

    const user = localStorage.getItem('usuarioLogado') || 'default';
    mensagensChat = JSON.parse(localStorage.getItem(`chat_messages_${user}`)) || [];

    if (mensagensChat.length === 0) {
        addChatMessage("Bem-vindos ao clube! O que estão lendo hoje?", 'received', "BiblioBot");
    } else {
        mensagensChat.forEach(m => addChatMessage(m.text, m.type, m.user, m.time, false, m.image, m.id, m.likes));
    }
}
function limparChat() {
    if (confirm("Deseja realmente apagar todo o histórico de conversas?")) {
        const user = localStorage.getItem('usuarioLogado') || 'default';
        mensagensChat = [];
        localStorage.removeItem(`chat_messages_${user}`);
        renderizarChat();
    }
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.className = 'typing';
    typingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    if (chatWindow) { // Verifica se o elemento do chat existe
        chatWindow.appendChild(typingDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

if (chatForm) { // Adiciona o listener apenas se o formulário do chat existir
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = chatInput.value.trim();
        const userNome = localStorage.getItem('usuarioLogado') || 'Você';
        if (val) {
            addChatMessage(val, 'sent', userNome);
            chatInput.value = '';
            
            setTimeout(() => {
                showTypingIndicator();
                setTimeout(() => {
                    hideTypingIndicator();
                    const botResponses = [
                        {msg: "Concordo plenamente!", user: "Maria Oliveira"},
                        {msg: "Alguém já leu o capítulo 5 de 1984?", user: "Pedro Santos"},
                        {msg: "Duna é fantástico!", user: "Davi Soares"}
                    ];
                    const resp = botResponses[Math.floor(Math.random()*botResponses.length)];
                    addChatMessage(resp.msg, 'received', resp.user);
                }, 1500);
            }, 600);
        }
    });
}

// --- Lógica para envio de Imagens no Chat ---
const chatImageInput = document.getElementById('chat-image-input');
if (chatImageInput) {
    chatImageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const base64Image = event.target.result;
                const userNome = localStorage.getItem('usuarioLogado') || 'Você';
                addChatMessage("", 'sent', userNome, null, true, base64Image);
                chatImageInput.value = ''; // Reseta para permitir enviar a mesma imagem novamente
            };
            reader.readAsDataURL(file);
        }
    });
}

// --- AI Assistant Logic (do home.html) ---
const aiModal = document.getElementById('ai-assistant-modal');
const aiChatWindow = document.getElementById('ai-chat-window'); // Elemento da janela de chat da IA
const aiChatForm = document.getElementById('ai-chat-form');
const aiMessageInput = document.getElementById('ai-message-input');

const GREETINGS_IA = [
    "Oi! Quer ajuda pra achar um livro incrível hoje?",
    "Me conta o que você gosta de ler que eu te dou boas sugestões!",
    "Perdido na biblioteca? Relaxa, eu te guio 📖",
    "Se você não sabe o que ler, eu tenho várias ideias pra você!",
    "Estou aqui pra facilitar sua vida na biblioteca 😊",
    "Precisa de ajuda com um trabalho? Posso sugerir fontes confiáveis!",
    "Encontre rapidamente livros e artigos para sua pesquisa.",
    "Posso te ajudar a montar uma bibliografia de qualidade.",
    "Buscando conteúdo para estudar? Eu te mostro o caminho.",
    "Transformo sua pesquisa em algo simples e organizado.",
    "Sua biblioteca inteligente, disponível 24 horas por dia.",
    "Com tecnologia de IA, encontro o que você precisa em segundos.",
    "Pesquisa rápida, precisa e personalizada com inteligência artificial.",
    "Descubra novos livros com recomendações inteligentes.",
    "Conectando você ao conhecimento de forma inovadora."
];

let aiChatMessages = []; // Inicializado no openAIAssistant

// Contexto de áudio global para o assistente (Web Audio API)
let aiAudioCtx = null;
let recognitionHotword = null;
let isHotwordEnabled = true;

/**
 * Gera um som sutil de clique de teclado programaticamente.
 */
function playTypingSound() {
    try {
        // Verifica se o som está ativado nas configurações
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle && !soundToggle.checked) return;

        if (!aiAudioCtx) aiAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (aiAudioCtx.state === 'suspended') aiAudioCtx.resume();

        const osc = aiAudioCtx.createOscillator();
        const gain = aiAudioCtx.createGain();

        osc.type = 'sine'; // Som suave
        // Frequência aleatória entre 400Hz e 450Hz para simular teclas diferentes
        osc.frequency.setValueAtTime(400 + Math.random() * 50, aiAudioCtx.currentTime);

        gain.gain.setValueAtTime(0.01, aiAudioCtx.currentTime); // Volume bem baixo (1%)
        gain.gain.exponentialRampToValueAtTime(0.001, aiAudioCtx.currentTime + 0.02);

        osc.connect(gain);
        gain.connect(aiAudioCtx.destination);

        osc.start();
        osc.stop(aiAudioCtx.currentTime + 0.02);
    } catch (e) {
        // Silencioso se o navegador bloquear áudio
    }
}

/**
 * Gera um som de "click" mecânico curto.
 */
function playClickSound() {
    try {
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle && !soundToggle.checked) return;

        if (!aiAudioCtx) aiAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (aiAudioCtx.state === 'suspended') aiAudioCtx.resume();

        const osc = aiAudioCtx.createOscillator();
        const gain = aiAudioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, aiAudioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, aiAudioCtx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.1, aiAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, aiAudioCtx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(aiAudioCtx.destination);
        osc.start();
        osc.stop(aiAudioCtx.currentTime + 0.05);
    } catch (e) {}
}

/**
 * Gera um som suave de notificação (chime).
 */
function playNotificationSound() {
    try {
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle && !soundToggle.checked) return;

        if (!aiAudioCtx) aiAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (aiAudioCtx.state === 'suspended') aiAudioCtx.resume();

        const osc = aiAudioCtx.createOscillator();
        const gain = aiAudioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, aiAudioCtx.currentTime); // Nota C5
        osc.frequency.exponentialRampToValueAtTime(659.25, aiAudioCtx.currentTime + 0.15); // Sobe para E5

        gain.gain.setValueAtTime(0.1, aiAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, aiAudioCtx.currentTime + 0.4);

        osc.connect(gain);
        gain.connect(aiAudioCtx.destination);
        osc.start();
        osc.stop(aiAudioCtx.currentTime + 0.4);
    } catch (e) {}
}

function openAIAssistant() {
    // Inicializa o contexto de áudio no primeiro clique (requisito de segurança dos navegadores)
    if (!aiAudioCtx) aiAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    if (aiModal) { // Verifica se o modal existe
        aiModal.style.display = 'flex'; // Mostra o modal
        const user = localStorage.getItem('usuarioLogado') || 'default';
        aiChatMessages = JSON.parse(localStorage.getItem(`ai_chat_messages_${user}`)) || [];
        renderAIChat();
        aiMessageInput.focus();
    }
}

function closeAIAssistant() {
    fecharModalComAnimacao('ai-assistant-modal', '.ai-modal-content');
}

function addAIMessage(text, type, save = true, isTypewriter = false) {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const msg = document.createElement('div');
    msg.className = `message ${type}`;
    
    const textSpan = document.createElement('span');
    const timeSpan = document.createElement('span');
    timeSpan.className = 'chat-time';
    timeSpan.textContent = currentTime;

    msg.appendChild(textSpan);
    msg.appendChild(timeSpan);

    if (aiChatWindow) { // Verifica se o elemento da janela de chat da IA existe
        aiChatWindow.appendChild(msg);
        aiChatWindow.scrollTop = aiChatWindow.scrollHeight;
    }

    if (isTypewriter) {
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                const char = text.charAt(i);
                textSpan.textContent += char;
                
                // Toca o som apenas se não for um espaço, para um efeito mais real
                if (char !== ' ') playTypingSound();

                i++;
                aiChatWindow.scrollTop = aiChatWindow.scrollHeight;

                // Velocidade natural: variação randômica entre 15ms e 65ms
                let speed = Math.random() * 50 + 15;

                // Pausas dramáticas em pontuações
                if (['.', '!', '?'].includes(char)) speed += 400;
                else if ([',', ';', ':'].includes(char)) speed += 200;

                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    } else {
        textSpan.textContent = text;
    }

    if (save) {
        const user = localStorage.getItem('usuarioLogado') || 'default';
        aiChatMessages.push({ text, type, time: currentTime });
        localStorage.setItem(`ai_chat_messages_${user}`, JSON.stringify(aiChatMessages));
    }
}

function renderAIChat() {
    if (!aiChatWindow) return; // Verifica se o elemento da janela de chat da IA existe
    aiChatWindow.innerHTML = '';

    if (aiChatMessages.length === 0) {
        // Escolhe uma saudação aleatória se não houver histórico
        const randomGreeting = GREETINGS_IA[Math.floor(Math.random() * GREETINGS_IA.length)];
        addAIMessage(randomGreeting, 'received', false);
    } else {
        // Renderiza o histórico salvo para o usuário
        aiChatMessages.forEach(m => {
            const msg = document.createElement('div');
            msg.className = `message ${m.type}`;
            msg.innerHTML = `<span>${m.text}</span><span class="chat-time">${m.time}</span>`;
            aiChatWindow.appendChild(msg);
        });
        aiChatWindow.scrollTop = aiChatWindow.scrollHeight;
    }
}

function showAITypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'ai-typing-indicator';
    typingDiv.className = 'typing';
    typingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    if (aiChatWindow) { // Verifica se o elemento da janela de chat da IA existe
        aiChatWindow.appendChild(typingDiv);
        aiChatWindow.scrollTop = aiChatWindow.scrollHeight;
    }
}

function hideAITypingIndicator() {
    const indicator = document.getElementById('ai-typing-indicator');
    if (indicator) indicator.remove();
}

/**
 * Chama a API do Gemini para processar a pergunta do usuário com base no acervo atual.
 */
async function processAIInput(userMessage) {
    const url = `http://localhost:3000/api/chat`;

    // Preparamos o contexto da biblioteca para a IA
    const contextoSistema = `Você é o BiblioBot, assistente da biblioteca BiblioTech. 
    O acervo atual em JSON é: ${JSON.stringify(livros.map(l => ({titulo: l.titulo, autor: l.autor, genero: l.genero, estoque: l.estoque})))}.
    Responda de forma curta e amigável. Se o usuário pedir recomendação, use apenas os livros do acervo.`;

    const payload = {
        userMessage: userMessage,
        context: contextoSistema
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Erro na API da IA:", error);
        return "Desculpe, estou com problemas para me conectar ao meu cérebro digital. Tente novamente em instantes!";
    }
}

if (aiChatForm) { // Adiciona o listener apenas se o formulário do chat da IA existir
    aiChatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userMessage = aiMessageInput.value.trim();
        if (!userMessage) return;
        addAIMessage(userMessage, 'sent');
        aiMessageInput.value = '';
        showAITypingIndicator();
        
        // Chamada real para a IA
        const aiResponse = await processAIInput(userMessage);
        
        hideAITypingIndicator();
        addAIMessage(aiResponse, 'received', true, true);
    });
}

/**
 * Inicializa e gerencia o reconhecimento de voz para a IA.
 */
function startVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Desculpe, seu navegador não suporta reconhecimento de voz. Tente usar o Google Chrome ou Microsoft Edge.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    const micBtn = document.getElementById('ai-mic-btn');

    recognition.onstart = () => {
        micBtn.classList.add('recording');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (aiMessageInput) {
            aiMessageInput.value = transcript;
            // Dispara o evento de submit do formulário automaticamente após falar
            aiChatForm.dispatchEvent(new Event('submit'));
        }
    };

    recognition.onerror = () => {
        micBtn.classList.remove('recording');
    };

    recognition.onend = () => {
        micBtn.classList.remove('recording');
    };

    recognition.start();
}

/**
 * Inicia a escuta em segundo plano pelo comando de ativação "Ok BiblioTech".
 */
function iniciarEscutaHotword() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    // Verificação silenciosa (não alerta se falhar aqui para não incomodar o usuário)
    if (!SpeechRecognition) return;

    recognitionHotword = new SpeechRecognition();
    recognitionHotword.lang = 'pt-BR';
    recognitionHotword.continuous = true; // Mantém a escuta ativa
    recognitionHotword.interimResults = false;
    const listeningBar = document.getElementById('ai-listening-bar');

    recognitionHotword.onstart = () => {
        if (listeningBar) listeningBar.style.display = 'flex';
    };

    recognitionHotword.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
        
        // Verifica se a frase de ativação foi detectada
        if (transcript.includes('ok bibliotech') || transcript.includes('ok biblioteca')) {
            // Aplica efeito visual em todos os logos encontrados
            const logos = document.querySelectorAll('.logo');
            logos.forEach(logo => {
                logo.classList.add('logo-listening-effect');
                // Remove a classe após a animação (1s) para poder disparar novamente depois
                setTimeout(() => logo.classList.remove('logo-listening-effect'), 1000);
            });

            openAIAssistant();
        }
    };

    recognitionHotword.onerror = () => {
        if (listeningBar) listeningBar.style.display = 'none';
    };

    // Reinicia automaticamente se o navegador interromper por silêncio
    recognitionHotword.onend = () => { 
        if (listeningBar) listeningBar.style.display = 'none';
        if (isHotwordEnabled) {
            try { recognitionHotword.start(); } catch(e) {} 
        }
    };

    try { recognitionHotword.start(); } catch (e) {}
}

/**
 * Desativa temporariamente o comando de ativação por voz.
 */
function pararEscutaHotword() {
    isHotwordEnabled = false;
    if (recognitionHotword) {
        recognitionHotword.stop();
    }
    const listeningBar = document.getElementById('ai-listening-bar');
    if (listeningBar) listeningBar.style.display = 'none';
}

// Função auxiliar para obter o título da seção
function getSectionTitle(secaoId) {
    switch (secaoId) {
        case 'home': return '🏠 Início';
        // Os títulos de Empréstimos, Livros e Alunos já são definidos no HTML
        case 'emprestimos': return 'Painel de Controle';
        case 'livros': return 'Catálogo de Livros';
        case 'alunos': return 'Gestão de Alunos';
        case 'destaques': return '✨ Destaques da Semana';
        case 'catalogo': return '📖 Catálogo Completo';
        case 'favoritos': return '⭐ Meus Favoritos';
        case 'clube-livro': return '💬 Clube do Livro';
        default: return 'BiblioTech'; // Título padrão
    }
}
