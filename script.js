// Dados simulados (Mock Database)
let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [
    { id: 1, aluno: 'Maria Oliveira', livro: 'Dom Casmurro', retirada: '2023-10-01', prevista: '2023-10-08', status: 'ATRASADO' },
    { id: 2, aluno: 'Pedro Santos', livro: 'Harry Potter e a Pedra Filosofal', retirada: '2023-10-25', prevista: '2023-11-01', status: 'ABERTO' }
];

// Dados simulados de alunos
let alunos = JSON.parse(localStorage.getItem('alunos')) || [
    { id: 1, nome: 'Maria Oliveira', matricula: 'RA001', senha: '123' },
    { id: 2, nome: 'Pedro Santos', matricula: 'RA002', senha: '456' },
    { id: 3, nome: 'Davi Soares', matricula: 'admin', senha: 'admin' }
];

// Dados simulados de livros com capa e gênero
let livros = JSON.parse(localStorage.getItem('livros')) || [
    { id: 1, titulo: 'O Pequeno Príncipe', genero: 'Infantil', capa: 'https://m.media-amazon.com/images/I/71d+v0e+w-L._SL1500_.jpg', estoque: 2, ano: 1943 },
    { id: 2, titulo: 'Dom Casmurro', genero: 'Clássicos', capa: 'https://m.media-amazon.com/images/I/81s8xQj8PjL._SL1500_.jpg', estoque: 3, ano: 1899 },
    { id: 3, titulo: 'Harry Potter e a Pedra Filosofal', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/81iqZ2HHD-L._SL1500_.jpg', estoque: 5, ano: 1997 },
    { id: 4, titulo: '1984', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/819js3EQwbL._SL1500_.jpg', estoque: 2, ano: 1949 },
    { id: 5, titulo: 'O Guia do Mochileiro das Galáxias', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/81e1rTE5LBL._SL1500_.jpg', estoque: 1, ano: 1979 },
    { id: 6, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91nWOe8uBQL._SL1500_.jpg', estoque: 3, ano: 1954 },
    { id: 7, titulo: 'Orgulho e Preconceito', genero: 'Clássicos', capa: 'https://m.media-amazon.com/images/I/81smn5lScCL._SL1500_.jpg', estoque: 2, ano: 1813 },
    { id: 8, titulo: 'Duna', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/81dI19I4GjL._SL1500_.jpg', estoque: 2, ano: 1965 },
    { id: 9, titulo: 'O Hobbit', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91b0C2YNSrL._SL1500_.jpg', estoque: 3, ano: 1937 },
    { id: 10, titulo: 'A Culpa é das Estrelas', genero: 'Romance', capa: 'https://m.media-amazon.com/images/I/817tHNcyAgL._SL1500_.jpg', estoque: 1, ano: 2012 },
    { id: 11, titulo: 'Percy Jackson: O Ladrão de Raios', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91c30Jg8dQL._SL1500_.jpg', estoque: 4, ano: 2005 },
    { id: 12, titulo: 'It: A Coisa', genero: 'Terror', capa: 'https://m.media-amazon.com/images/I/81c8No6lsuL._SL1500_.jpg', estoque: 2, ano: 1986 },
    { id: 13, titulo: 'Sherlock Holmes: Um Estudo em Vermelho', genero: 'Mistério', capa: 'https://m.media-amazon.com/images/I/81+y+g+9G+L._SL1500_.jpg', estoque: 2, ano: 1887 },
    { id: 14, titulo: 'Jogos Vorazes', genero: 'Distopia', capa: 'https://m.media-amazon.com/images/I/71sHw8gTEqL._SL1500_.jpg', estoque: 3, ano: 2008 },
    { id: 15, titulo: 'O Código Da Vinci', genero: 'Suspense', capa: 'https://m.media-amazon.com/images/I/81AFG2ww2UL._SL1500_.jpg', estoque: 2, ano: 2003 },
    { id: 16, titulo: 'O Alquimista', genero: 'Ficção', capa: 'https://m.media-amazon.com/images/I/7122h3jWvEL._SL1500_.jpg', estoque: 3, ano: 1988 },
    { id: 17, titulo: 'O Nome do Vento', genero: 'Fantasia', capa: 'https://editoraarqueiro.com.br/wp-content/uploads/2021/08/O-NOME-DO-VENTO-capa-frente-alta.jpg', estoque: 1, ano: 2007 },
    { id: 18, titulo: 'A Metamorfose', genero: 'Ficção', capa: 'https://m.media-amazon.com/images/I/71ss5-d18RL._SL1500_.jpg', estoque: 4, ano: 1915 }
];

// Função para renderizar a tabela
function renderizarTabela() {
    // Salva os dados no localStorage para persistência
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));

    const tbody = document.getElementById('tabela-emprestimos-body');
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
document.getElementById('form-emprestimo').addEventListener('submit', function(e) {
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
    alert('Empréstimo registrado com sucesso!');
});

// Função para devolver livro
function devolverLivro(id) {
    if (confirm('Confirmar devolução do livro?')) {
        const emprestimo = emprestimos.find(e => e.id === id);
        if (emprestimo) {
            emprestimo.status = 'CONCLUIDO';
            renderizarTabela();
            renderizarLivros(); // Atualiza a galeria para mostrar o livro como disponível
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
function renderizarTabelaAlunos() {
    // Salva a lista atualizada no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos));

    const tbody = document.getElementById('tabela-alunos-body');
    const thead = document.getElementById('tabela-alunos-head');
    const totalAlunosEl = document.getElementById('total-alunos');
    tbody.innerHTML = '';
    thead.innerHTML = '';

    const isAdmin = true; // Modo admin ativado para controle total

    // Constrói o cabeçalho da tabela dinamicamente
    let headerHtml = `<tr><th>Nome</th><th>Matrícula</th>`;
    if (isAdmin) {
        headerHtml += `<th>Senha (Visível para Admin)</th>`;
        headerHtml += `<th>Ações</th>`;
    }
    headerHtml += `</tr>`;
    thead.innerHTML = headerHtml;

    // Preenche o corpo da tabela
    alunos.forEach(aluno => {
        let rowHtml = `<td>${aluno.nome}</td><td>${aluno.matricula}</td>`;
        if (isAdmin) {
            rowHtml += `<td>${aluno.senha}</td>`;
            rowHtml += `<td>
                            <button class="btn-editar" onclick="abrirModalEdicaoAluno(${aluno.id})">Editar</button>
                            <button class="btn-excluir" onclick="excluirAluno(${aluno.id})">Excluir</button>
                        </td>`;
        }
        tbody.innerHTML += `<tr>${rowHtml}</tr>`;
    });

    // Atualiza a contagem total
    totalAlunosEl.textContent = `Total de Alunos: ${alunos.length}`;
}

// Função para cadastrar novo aluno
if (document.getElementById('form-aluno')) {
    document.getElementById('form-aluno').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('input-nome-aluno').value;
        const matricula = document.getElementById('input-matricula-aluno').value;
        const senha = document.getElementById('input-senha-aluno').value;

        const novoAluno = {
            id: alunos.length + 1,
            nome: nome,
            matricula: matricula,
            senha: senha
        };

        alunos.push(novoAluno);
        renderizarTabelaAlunos();
        this.reset();
        alert('Aluno cadastrado com sucesso!');
    });
}

// --- Funções de Edição de Aluno ---

function abrirModalEdicaoAluno(id) {
    const aluno = alunos.find(a => a.id === id);
    if (!aluno) return;

    // Preenche o formulário do modal com os dados do aluno
    document.getElementById('edit-aluno-id').value = aluno.id;
    document.getElementById('edit-nome-aluno').value = aluno.nome;
    document.getElementById('edit-matricula-aluno').value = aluno.matricula;
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
    const senha = document.getElementById('edit-senha-aluno').value;

    const alunoIndex = alunos.findIndex(a => a.id === id);
    if (alunoIndex === -1) return;

    alunos[alunoIndex].nome = nome;
    alunos[alunoIndex].matricula = matricula;
    
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
    
    alert(`Empréstimo realizado com sucesso! O livro "${livro.titulo}" agora está com você.`);
    
    // Atualiza as interfaces
    renderizarLivros();
    renderizarTabela();
}

// Função para renderizar a galeria de livros
function renderizarLivros() {
    localStorage.setItem('livros', JSON.stringify(livros));
    const galleryContainer = document.getElementById('livros-gallery');
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
            
            // Calcula disponibilidade com base no estoque
            const emprestados = emprestimos.filter(e => e.livro === livro.titulo && (e.status === 'ABERTO' || e.status === 'ATRASADO')).length;
            const disponiveis = livro.estoque - emprestados;
            
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
                    <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" class="livro-capa" onerror="this.onerror=null;this.src='${placeholderCapa}';">
                    <p class="livro-titulo">${livro.titulo}</p>
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
    document.getElementById('modal-genero-livro').textContent = `Gênero: ${livro.genero}`;
    document.getElementById('modal-ano-livro').textContent = `Ano: ${livro.ano}`;

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
            genero: document.getElementById('input-genero-livro').value,
            capa: document.getElementById('input-capa-livro').value,
            ano: parseInt(document.getElementById('input-ano-livro').value),
            estoque: parseInt(document.getElementById('input-estoque-livro').value) || 1
        };

        livros.push(novoLivro);
        renderizarLivros();
        this.reset();
        alert('Livro adicionado com sucesso!');
    });

    // --- Funcionalidade de busca de livros na web ---
    const inputTituloLivro = document.getElementById('input-titulo-livro');
    const debouncedSearch = debounce(buscarLivrosNaWeb, 400); // Atraso de 400ms

    inputTituloLivro.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });

    // Esconde as sugestões se o usuário clicar fora da área
    document.addEventListener('click', function(e) {
        const suggestionsContainer = document.getElementById('livro-search-suggestions');
        if (suggestionsContainer && !suggestionsContainer.contains(e.target) && e.target.id !== 'input-titulo-livro') {
            suggestionsContainer.style.display = 'none';
        }
    });
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
});
