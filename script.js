// --- Constantes ---
const STORAGE_KEYS = {
    EMPRESTIMOS: 'emprestimos',
    ALUNOS: 'alunos',
    LIVROS: 'livros',
    COMENTARIOS: 'comentarios',
    USER_ROLE: 'userRole',
    USUARIO_LOGADO: 'usuarioLogado',
    THEME: 'theme'
};

const STATUS = {
    ATRASADO: 'ATRASADO',
    ABERTO: 'ABERTO',
    CONCLUIDO: 'CONCLUIDO',
    DEVOLVIDO: 'DEVOLVIDO' // Apenas para exibição
};

// --- Funções de Persistência de Dados ---
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key, defaultValue = []) {
    const data = localStorage.getItem(key);
    // Adiciona um try-catch para o caso de dados corrompidos no localStorage
    try {
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error(`Erro ao carregar dados da chave "${key}":`, error);
        return defaultValue;
    }
}

// --- Dados da Aplicação (Mock Database) ---
let emprestimos = loadData(STORAGE_KEYS.EMPRESTIMOS, [
    { id: 1, aluno: 'Maria Oliveira', livro: 'Dom Casmurro', retirada: '2023-10-01', prevista: '2023-10-08', status: STATUS.ATRASADO },
    { id: 2, aluno: 'Pedro Santos', livro: 'Harry Potter e a Pedra Filosofal', retirada: '2023-10-25', prevista: '2023-11-01', status: STATUS.ABERTO }
];

let alunos = loadData(STORAGE_KEYS.ALUNOS, [
    { id: 1, nome: 'Maria Oliveira', matricula: 'RA001', senha: '123' },
    { id: 2, nome: 'Pedro Santos', matricula: 'RA002', senha: '456' },
    { id: 3, nome: 'Davi Soares', matricula: 'admin', senha: 'admin' }
]);

let livros = loadData(STORAGE_KEYS.LIVROS, [
    { id: 1, titulo: 'O Pequeno Príncipe', genero: 'Infantil', capa: 'https://m.media-amazon.com/images/I/71d+v0e+w-L._SL1500_.jpg', estoque: 2, descricao: 'Uma história poética sobre amizade, amor e perda, com ilustrações do autor.', ano: 1943 },
    { id: 2, titulo: 'Dom Casmurro', genero: 'Clássicos', capa: 'https://m.media-amazon.com/images/I/81s8xQj8PjL._SL1500_.jpg', estoque: 3, descricao: 'Um clássico da literatura brasileira que explora o ciúme e a dúvida em um casamento.', ano: 1899 },
    { id: 3, titulo: 'Harry Potter e a Pedra Filosofal', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/81iqZ2HHD-L._SL1500_.jpg', estoque: 5, descricao: 'O primeiro livro da série que apresentou ao mundo o jovem bruxo Harry Potter.', ano: 1997 },
    { id: 4, titulo: '1984', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/819js3EQwbL._SL1500_.jpg', estoque: 2, descricao: 'Uma distopia sombria sobre um futuro totalitário onde o pensamento é controlado.', ano: 1949 },
    { id: 5, titulo: 'O Guia do Mochileiro das Galáxias', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/81e1rTE5LBL._SL1500_.jpg', estoque: 1, descricao: 'Uma comédia de ficção científica que satiriza a burocracia e a busca pelo sentido da vida.', ano: 1979 },
    { id: 6, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91nWOe8uBQL._SL1500_.jpg', estoque: 3, descricao: 'O início da jornada épica de Frodo para destruir o Um Anel e salvar a Terra-média.', ano: 1954 },
    { id: 7, titulo: 'Orgulho e Preconceito', genero: 'Clássicos', capa: 'https://m.media-amazon.com/images/I/81smn5lScCL._SL1500_.jpg', estoque: 2, descricao: 'Um romance clássico sobre amor, classe social e as primeiras impressões na Inglaterra do século XIX.', ano: 1813 },
    { id: 8, titulo: 'Duna', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/81dI19I4GjL._SL1500_.jpg', estoque: 2, descricao: 'Uma saga de ficção científica sobre política, religião e poder no desértico planeta de Arrakis.', ano: 1965 },
    { id: 9, titulo: 'O Hobbit', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91b0C2YNSrL._SL1500_.jpg', estoque: 3, descricao: 'A aventura de Bilbo Bolseiro, um hobbit que é arrastado para uma jornada para recuperar um tesouro de um dragão.', ano: 1937 },
    { id: 10, titulo: 'A Culpa é das Estrelas', genero: 'Romance', capa: 'https://m.media-amazon.com/images/I/817tHNcyAgL._SL1500_.jpg', estoque: 1, descricao: 'A história de amor de dois adolescentes que se conhecem em um grupo de apoio ao câncer.', ano: 2012 },
    { id: 11, titulo: 'Percy Jackson: O Ladrão de Raios', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91c30Jg8dQL._SL1500_.jpg', estoque: 4, descricao: 'Percy Jackson descobre que é um semideus e é acusado de roubar o raio de Zeus.', ano: 2005 },
    { id: 12, titulo: 'It: A Coisa', genero: 'Terror', capa: 'https://m.media-amazon.com/images/I/81c8No6lsuL._SL1500_.jpg', estoque: 2, descricao: 'Um grupo de crianças luta contra uma entidade maligna que aterroriza sua cidade.', ano: 1986 },
    { id: 13, titulo: 'Sherlock Holmes: Um Estudo em Vermelho', genero: 'Mistério', capa: 'https://m.media-amazon.com/images/I/81+y+g+9G+L._SL1500_.jpg', estoque: 2, descricao: 'O primeiro caso de Sherlock Holmes e Dr. Watson juntos, investigando um assassinato misterioso.', ano: 1887 },
    { id: 14, titulo: 'Jogos Vorazes', genero: 'Distopia', capa: 'https://m.media-amazon.com/images/I/71sHw8gTEqL._SL1500_.jpg', estoque: 3, descricao: 'Em uma sociedade distópica, jovens são forçados a lutar até a morte em um evento televisionado.', ano: 2008 },
    { id: 15, titulo: 'O Código Da Vinci', genero: 'Suspense', capa: 'https://m.media-amazon.com/images/I/81AFG2ww2UL._SL1500_.jpg', estoque: 2, descricao: 'Um simbologista de Harvard se envolve em uma caça ao tesouro para desvendar um segredo milenar.', ano: 2003 },
    { id: 16, titulo: 'O Alquimista', genero: 'Ficção', capa: 'https://m.media-amazon.com/images/I/7122h3jWvEL._SL1500_.jpg', estoque: 3, descricao: 'A jornada de um pastor andaluz em busca de um tesouro e de sua Lenda Pessoal.', ano: 1988 },
    { id: 17, titulo: 'O Nome do Vento', genero: 'Fantasia', capa: 'https://editoraarqueiro.com.br/wp-content/uploads/2021/08/O-NOME-DO-VENTO-capa-frente-alta.jpg', estoque: 1, descricao: 'A história de Kvothe, um herói lendário que conta sua vida a um cronista.', ano: 2007 },
    { id: 18, titulo: 'A Metamorfose', genero: 'Ficção', capa: 'https://m.media-amazon.com/images/I/71ss5-d18RL._SL1500_.jpg', estoque: 4, descricao: 'A história surreal de um homem que acorda transformado em um inseto monstruoso.', ano: 1915 },
    { id: 19, titulo: 'Racionais: Sobrevivendo no Inferno', genero: 'Biografia', capa: 'https://m.media-amazon.com/images/I/5155X15-i2L._SL1000_.jpg', estoque: 3, descricao: 'A obra transcreve as letras do álbum de 1997 e as contextualiza com textos de apoio, fotos e documentos, mostrando a importância do grupo para a cultura brasileira.', ano: 2018 },
    { id: 20, titulo: 'Amoras', genero: 'Infantil', capa: 'https://m.media-amazon.com/images/I/51a7O+Y5NGL._SL1000_.jpg', estoque: 4, descricao: 'Numa conversa cheia de afeto, o livro mostra a importância de nos reconhecermos no mundo e nos orgulharmos de quem somos.', ano: 2018 }
]);

let comentarios = loadData(STORAGE_KEYS.COMENTARIOS, [
    { livroId: 1, usuario: 'Maria Oliveira', texto: 'Amei este livro! Uma leitura obrigatória para todas as idades.', data: '05/10/2023', nota: 5 },
    { livroId: 1, usuario: 'Pedro Santos', texto: 'Muito poético, mas um pouco triste no final.', data: '06/10/2023', nota: 4 }
]);

// --- Funções Auxiliares (Helpers) ---
function getLivroDisponibilidade(livro) {
    if (!livro) return { disponiveis: 0, emprestados: 0 };
    const emprestados = emprestimos.filter(e => e.livro === livro.titulo && (e.status === STATUS.ABERTO || e.status === STATUS.ATRASADO)).length;
    const disponiveis = livro.estoque - emprestados;
    return { disponiveis, emprestados };
}

// Função para renderizar o alerta de livros atrasados
function renderizarAlertaAtrasos() {
    const container = document.getElementById('alerta-atrasos-container');
    if (!container) return;

    const emprestimosAtrasados = emprestimos.filter(e => e.status === STATUS.ATRASADO);
    const totalAtrasos = emprestimosAtrasados.length;

    if (totalAtrasos > 0) {
        // Pega a lista de nomes de alunos únicos com pendências
        const alunosComPendencia = [...new Set(emprestimosAtrasados.map(e => e.aluno))];

        let alunosListHtml = '<ul>';
        alunosComPendencia.forEach(aluno => {
            alunosListHtml += `<li>${aluno}</li>`;
        });
        alunosListHtml += '</ul>';

        container.innerHTML = `
            <div class="card alerta-atrasos">
                <h4>⚠️ Alerta de Pendências</h4>
                <p><strong>${totalAtrasos}</strong> livro(s) com devolução atrasada.</p>
                <p>Alunos com pendências:</p>
                ${alunosListHtml}
            </div>
        `;
    } else {
        // Limpa o container se não houver atrasos
        container.innerHTML = '';
    }
}

// Função para renderizar a tabela
function renderizarTabela() {
    renderizarAlertaAtrasos();

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
        if (emp.status === STATUS.ATRASADO) {
            statusClass = 'status-atrasado';
        } else if (emp.status === STATUS.ABERTO) {
            statusClass = 'status-aberto';
        } else if (emp.status === STATUS.CONCLUIDO) {
            statusClass = 'status-concluido'; // Recomenda-se adicionar no CSS: .status-concluido { color: #28a745; font-weight: bold; }
        }
        const statusText = emp.status === STATUS.CONCLUIDO ? STATUS.DEVOLVIDO : emp.status;

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
                ${emp.status !== STATUS.CONCLUIDO ? `
                    <button data-action="devolver" data-id="${emp.id}" style="cursor:pointer; color:blue; text-decoration:underline; background:none; border:none; margin-right: 5px;">
                        Devolver
                    </button>
                    <button data-action="atrasado" data-id="${emp.id}" style="cursor:pointer; color:orange; text-decoration:underline; background:none; border:none; margin-right: 5px;">
                        Atrasado
                    </button>
                    <button data-action="reabrir" data-id="${emp.id}" style="cursor:pointer; color:green; text-decoration:underline; background:none; border:none;">
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
    
    const aluno = document.getElementById('input-aluno').value;
    const livro = document.getElementById('input-livro').value;
    
    const hoje = new Date();
    const prevista = new Date();
    prevista.setDate(hoje.getDate() + 7); // +7 dias

    // Formata para YYYY-MM-DD usando a data local para evitar erro de fuso horário
    const dataRetirada = hoje.toLocaleDateString('pt-BR').split('/').reverse().join('-');
    const dataPrevista = prevista.toLocaleDateString('pt-BR').split('/').reverse().join('-');

    const novo = {
        id: Date.now(), // ID mais robusto
        aluno: aluno,
        livro: livro,
        retirada: dataRetirada,
        prevista: dataPrevista,
        status: STATUS.ABERTO
    };

    emprestimos.push(novo);
    saveData(STORAGE_KEYS.EMPRESTIMOS, emprestimos);
    renderizarTabela();
    this.reset();
    alert('Empréstimo registrado com sucesso!');
});

// Função para mostrar sugestões de alunos com base na digitação
function mostrarSugestoesAlunos(filtro = '') {
    const alunoSuggestions = document.getElementById('aluno-suggestions');
    if (!alunoSuggestions) return;

    alunoSuggestions.innerHTML = '';
    const filtroLowerCase = filtro.toLowerCase();

    // Se o filtro estiver vazio, mostra todos os alunos; senão, filtra a lista
    const alunosParaMostrar = filtro
        ? alunos.filter(aluno =>
            aluno.nome.toLowerCase().includes(filtroLowerCase) ||
            aluno.matricula.toLowerCase().includes(filtroLowerCase)
          )
        : alunos;

    if (alunosParaMostrar.length > 0) {
        alunosParaMostrar.forEach(aluno => {
            const div = document.createElement('div');
            div.textContent = `${aluno.nome} (${aluno.matricula})`;
            div.className = 'suggestion-item';
            div.onclick = () => selecionarAluno(aluno.nome);
            alunoSuggestions.appendChild(div);
        });
        alunoSuggestions.style.display = 'block';
    } else {
        alunoSuggestions.style.display = 'none';
    }
}

// Função para preencher o input ao selecionar um aluno da lista
function selecionarAluno(nome) {
    document.getElementById('input-aluno').value = nome;
    document.getElementById('aluno-suggestions').style.display = 'none';
}

// Função para mostrar sugestões de livros com base na digitação
function mostrarSugestoesLivros(filtro = '') {
    const livroSuggestions = document.getElementById('livro-suggestions');
    if (!livroSuggestions) return;

    livroSuggestions.innerHTML = '';
    const filtroLowerCase = filtro.toLowerCase();

    // Filtra por livros que tenham estoque disponível
    const livrosDisponiveis = livros.filter(livro => {
        const { disponiveis } = getLivroDisponibilidade(livro);
        return disponiveis > 0; 
    });

    // Agora filtra pelo texto digitado
    const livrosParaMostrar = filtro
        ? livrosDisponiveis.filter(livro =>
            livro.titulo.toLowerCase().includes(filtroLowerCase)
          )
        : livrosDisponiveis; // Mostra todos os disponíveis se o campo estiver vazio

    if (livrosParaMostrar.length > 0) {
        livrosParaMostrar.forEach(livro => {
            const div = document.createElement('div');
            div.textContent = livro.titulo;
            div.className = 'suggestion-item';
            div.onclick = () => selecionarLivro(livro.titulo);
            livroSuggestions.appendChild(div);
        });
        livroSuggestions.style.display = 'block';
    } else {
        livroSuggestions.style.display = 'none';
    }
}

// Função para preencher o input ao selecionar um livro da lista
function selecionarLivro(titulo) {
    document.getElementById('input-livro').value = titulo;
    document.getElementById('livro-suggestions').style.display = 'none';
}

// Função para devolver livro
function devolverLivro(id) {
    if (confirm('Confirmar devolução do livro?')) {
        const emprestimo = emprestimos.find(e => e.id === id);
        if (emprestimo) {
            emprestimo.status = STATUS.CONCLUIDO;
            saveData(STORAGE_KEYS.EMPRESTIMOS, emprestimos);
            renderizarTabela();
            renderizarLivros(); // Atualiza a galeria para mostrar o livro como disponível
        }
    }
}

// Função para marcar livro como atrasado manually
function marcarAtrasado(id) {
    const emprestimo = emprestimos.find(e => e.id === id);
    if (emprestimo && emprestimo.status !== STATUS.CONCLUIDO) {
        emprestimo.status = STATUS.ATRASADO;
        saveData(STORAGE_KEYS.EMPRESTIMOS, emprestimos);
        renderizarTabela();
    }
}

// Função para marcar livro como aberto novamente
function marcarAberto(id) {
    const emprestimo = emprestimos.find(e => e.id === id);
    if (emprestimo) {
        emprestimo.status = STATUS.ABERTO;
        saveData(STORAGE_KEYS.EMPRESTIMOS, emprestimos);
        renderizarTabela();
    }
}

// Função para excluir aluno
function excluirAluno(id) {
    if (confirm('Tem certeza que deseja excluir este aluno?')) {
        alunos = alunos.filter(a => a.id !== id);
        saveData(STORAGE_KEYS.ALUNOS, alunos);
        renderizarTabelaAlunos();
    }
}

// Função para renderizar a tabela de alunos
function renderizarTabelaAlunos() {
    const tbody = document.getElementById('tabela-alunos-body');
    const thead = document.getElementById('tabela-alunos-head');
    const totalAlunosEl = document.getElementById('total-alunos');
    tbody.innerHTML = '';
    thead.innerHTML = '';

    const isAdmin = localStorage.getItem(STORAGE_KEYS.USER_ROLE) === 'admin'; // Modo admin ativado para controle total

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
            rowHtml += `<td><button class="btn-excluir" onclick="excluirAluno(${aluno.id})">Excluir</button></td>`;
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
            id: Date.now(), // ID mais robusto
            nome: nome,
            matricula: matricula,
            senha: senha
        };

        alunos.push(novoAluno);
        saveData(STORAGE_KEYS.ALUNOS, alunos);
        renderizarTabelaAlunos();
        this.reset();
        alert('Aluno cadastrado com sucesso!');
    });
}

// Função para excluir livro
function excluirLivro(id) {
    if (confirm('Tem certeza que deseja excluir este livro do catálogo?')) {
        livros = livros.filter(l => l.id !== id);
        saveData(STORAGE_KEYS.LIVROS, livros);
        renderizarLivros();
    }
}

// Função para solicitar empréstimo de livro
function solicitarLivro(id) {
    const livro = livros.find(l => l.id === id);
    if (!livro) return;

    const usuarioLogado = localStorage.getItem(STORAGE_KEYS.USUARIO_LOGADO);
    if (!usuarioLogado) {
        alert('Você precisa estar logado para solicitar um livro.');
        return;
    }

    // Nova verificação de disponibilidade baseada em estoque
    const { disponiveis } = getLivroDisponibilidade(livro);
    
    // Verificação de estoque desativada para permitir solicitação
    // if (disponiveis <= 0) {
    //     alert('Desculpe, este livro não está disponível no momento (todas as cópias estão emprestadas).');
    //     return;
    // }

    // Cria o novo empréstimo
    const hoje = new Date();
    const prevista = new Date();
    prevista.setDate(hoje.getDate() + 7); // Prazo de 7 dias

    const dataRetirada = hoje.toLocaleDateString('pt-BR').split('/').reverse().join('-');
    const dataPrevista = prevista.toLocaleDateString('pt-BR').split('/').reverse().join('-');

    const novoEmprestimo = {
        id: Date.now(),
        aluno: usuarioLogado,
        livro: livro.titulo,
        retirada: dataRetirada,
        prevista: dataPrevista,
        status: STATUS.ABERTO
    };

    emprestimos.push(novoEmprestimo);
    saveData(STORAGE_KEYS.EMPRESTIMOS, emprestimos);
    
    alert(`Empréstimo realizado com sucesso! O livro "${livro.titulo}" agora está com você.`);
    
    // Atualiza as interfaces
    renderizarLivros();
    renderizarTabela();
}

// Função para renderizar os destaques do mês
function renderizarDestaquesDoMes() {
    const container = document.getElementById('destaques-do-mes-container');
    if (!container) return;

    // Seleciona 3 livros aleatórios como destaque
    const destaques = [...livros].sort(() => 0.5 - Math.random()).slice(0, 3);

    if (destaques.length > 0) {
        const placeholderCapa = 'https://via.placeholder.com/180x240?text=Capa+Indispon%C3%ADvel';
        
        const livrosHtml = destaques.map(livro => {
            // Adiciona um badge de "Destaque"
            return `
                <div class="livro-card destaque" onclick="mostrarDetalhesLivro(${livro.id})">
                    <div class="destaque-badge">⭐ Destaque</div>
                    <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" class="livro-capa" onerror="this.onerror=null;this.src='${placeholderCapa}';">
                    <p class="livro-titulo">${livro.titulo}</p>
                </div>
            `;
        }).join('');

        container.innerHTML = `
            <div class="card">
                <h3 class="destaques-titulo">✨ Destaques do Mês</h3>
                <div class="livros-lista" style="justify-content: center;">
                    ${livrosHtml}
                </div>
            </div>
        `;
    } else {
        container.innerHTML = '';
    }
}

// Função para renderizar a galeria de livros
function renderizarLivros() {
    const galleryContainer = document.getElementById('livros-gallery');
    galleryContainer.innerHTML = '<h2>Catálogo de Livros</h2>'; // Limpa e adiciona título

    // Agrupa os livros por gênero
    const livrosPorGenero = livros.reduce((acc, livro) => {
        (acc[livro.genero] = acc[livro.genero] || []).push(livro);
        return acc;
    }, {});

    const placeholderCapa = 'https://via.placeholder.com/180x240?text=Capa+Indispon%C3%ADvel';
    const isAdmin = localStorage.getItem(STORAGE_KEYS.USER_ROLE) === 'admin'; // Verifica o papel do usuário

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
            const { disponiveis } = getLivroDisponibilidade(livro);

            let statusHtml, btnDisabled, btnText;

            if (disponiveis > 0) {
                statusHtml = `<span style="color: #27ae60; font-size: 0.85rem; font-weight: bold; margin-bottom: 5px;">● Disponível (${disponiveis})</span>`;
                btnDisabled = '';
                btnText = 'Solicitar';
            } else {
                statusHtml = `<span style="color: #e74c3c; font-size: 0.85rem; font-weight: bold; margin-bottom: 5px;">● Indisponível</span>`;
                btnDisabled = 'disabled';
                btnText = 'Indisponível';
            }
            
            const requestButton = `<button class="btn-solicitar" onclick="event.stopPropagation(); solicitarLivro(${livro.id})" ${btnDisabled}>${btnText}</button>`;

            return `
                <div class="livro-card" onclick="mostrarDetalhesLivro(${livro.id})">
                    ${deleteButton}
                    <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" class="livro-capa" onerror="this.onerror=null;this.src='${placeholderCapa}';">
                    <p class="livro-titulo">${livro.titulo}</p>
                </div>
            `;
        }).join('');

        listaLivros.innerHTML = livrosHtml;

        containerGenero.appendChild(listaLivros);
        galleryContainer.appendChild(containerGenero);
    }
}

// Função auxiliar para gerar HTML de estrelas
function gerarEstrelasHtml(nota) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += i <= nota ? '<span class="star-filled">★</span>' : '<span class="star-empty">☆</span>';
    }
    return html;
}

// Função para mostrar detalhes do livro em um modal
function mostrarDetalhesLivro(id) {
    const livro = livros.find(l => l.id === id);
    if (!livro) return;

    document.getElementById('modal-capa-livro').src = livro.capa;
    document.getElementById('modal-titulo-livro').textContent = livro.titulo;
    document.getElementById('modal-genero-livro').textContent = `Gênero: ${livro.genero}`;
    document.getElementById('modal-ano-livro').textContent = `Ano: ${livro.ano}`;
    document.getElementById('modal-descricao-livro').textContent = livro.descricao;

    // Lógica de disponibilidade e botão de solicitar
    const { disponiveis } = getLivroDisponibilidade(livro);

    let statusHtml, btnDisabled, btnText;

    if (disponiveis > 0) {
        statusHtml = `<span style="color: #27ae60; font-weight: bold;">● Disponível (${disponiveis} de ${livro.estoque})</span>`;
        btnDisabled = '';
        btnText = 'Solicitar Empréstimo';
    } else {
        statusHtml = `<span style="color: #e74c3c; font-weight: bold;">● Indisponível</span>`;
        btnDisabled = 'disabled';
        btnText = 'Indisponível';
    }
    
    const requestButton = `<button class="btn-solicitar" onclick="solicitarLivro(${livro.id})" ${btnDisabled}>${btnText}</button>`;

    // --- Lógica de Comentários (Feedback) ---
    const sectionComentarios = document.getElementById('modal-comentarios-section');
    if (sectionComentarios) {
        // Filtra comentários deste livro
        const comentariosLivro = comentarios.filter(c => c.livroId === id);
        const isAdmin = localStorage.getItem(STORAGE_KEYS.USER_ROLE) === 'admin';
        
        let htmlComentarios = '<h3 style="margin-top: 30px; border-bottom: 2px solid #667eea; padding-bottom: 5px;">Avaliações da Comunidade</h3>';
        
        htmlComentarios += '<div class="lista-comentarios" style="max-height: 200px; overflow-y: auto; margin-bottom: 20px; padding-right: 5px;">';
        
        if (comentariosLivro.length > 0) {
            // Itera sobre o array original para obter o índice correto para exclusão
            comentarios.forEach((c, index) => {
                if (c.livroId === id) {
                    const btnExcluir = isAdmin ? `<button onclick="excluirComentario(${index}, ${id})" style="float: right; color: #e74c3c; background: none; border: none; cursor: pointer; font-weight: bold;" title="Excluir comentário">X</button>` : '';
                    const estrelasHtml = gerarEstrelasHtml(c.nota || 0);
                    htmlComentarios += `
                        <div class="comentario-item">
                            <div class="comentario-header">
                                <div>
                                    <strong>${c.usuario}</strong>
                                    <span class="stars-display" style="margin-left: 8px;">${estrelasHtml}</span>
                                </div>
                                <div>
                                    <span class="comentario-data">${c.data}</span>
                                    ${btnExcluir}
                                </div>
                            </div>
                            <p class="comentario-texto">${c.texto}</p>
                        </div>
                    `;
                }
            });
        } else {
            htmlComentarios += '<p style="color: #7f8c8d; font-style: italic;">Nenhum comentário ainda. Seja o primeiro a avaliar!</p>';
        }
        htmlComentarios += '</div>';

        // Formulário para novo comentário
        htmlComentarios += `
            <div class="form-comentario">
                <div class="rating-container">
                    <label style="font-weight: bold; margin-right: 10px;">Sua nota:</label>
                    <div class="stars-input">
                        <span onclick="selecionarEstrela(1)">★</span>
                        <span onclick="selecionarEstrela(2)">★</span>
                        <span onclick="selecionarEstrela(3)">★</span>
                        <span onclick="selecionarEstrela(4)">★</span>
                        <span onclick="selecionarEstrela(5)">★</span>
                    </div>
                    <input type="hidden" id="nota-novo-comentario" value="0">
                </div>
                <textarea id="texto-novo-comentario" placeholder="O que você achou deste livro? Deixe seu feedback..." rows="3"></textarea>
                <button onclick="adicionarComentario(${id})" class="btn-primary" style="width: 100%; margin-top: 10px;">Publicar Feedback</button>
            </div>
        `;

        sectionComentarios.innerHTML = htmlComentarios;
    }
    // ----------------------------------------

    document.getElementById('modal-status-livro').innerHTML = statusHtml;
    document.getElementById('modal-botao-container').innerHTML = requestButton;

    document.getElementById('livro-detalhes-modal').style.display = 'flex';
}

// Função para excluir comentário (Admin)
function excluirComentario(index, livroId) {
    if (confirm('Tem certeza que deseja remover este comentário?')) {
        comentarios.splice(index, 1);
        saveData(STORAGE_KEYS.COMENTARIOS, comentarios);
        mostrarDetalhesLivro(livroId); // Atualiza o modal para refletir a exclusão
    }
}

// Função para selecionar estrelas no formulário
function selecionarEstrela(n) {
    document.getElementById('nota-novo-comentario').value = n;
    const stars = document.querySelectorAll('.stars-input span');
    stars.forEach((s, i) => {
        if (i < n) s.classList.add('active');
        else s.classList.remove('active');
    });
}

// Função para adicionar novo comentário
function adicionarComentario(livroId) {
    const textoInput = document.getElementById('texto-novo-comentario');
    const notaInput = document.getElementById('nota-novo-comentario');
    const texto = textoInput.value;
    const nota = parseInt(notaInput.value);
    const usuario = localStorage.getItem(STORAGE_KEYS.USUARIO_LOGADO);

    if (nota === 0) {
        alert('Por favor, selecione uma nota de 1 a 5 estrelas.');
        return;
    }

    if (!texto.trim()) {
        alert('Por favor, escreva um comentário antes de enviar.');
        return;
    }

    const novoComentario = {
        livroId: livroId,
        usuario: usuario || 'Anônimo',
        texto: texto,
        nota: nota,
        data: new Date().toLocaleDateString('pt-BR')
    };

    comentarios.push(novoComentario);
    saveData(STORAGE_KEYS.COMENTARIOS, comentarios);
    
    // Recarrega os detalhes do livro para mostrar o novo comentário imediatamente
    mostrarDetalhesLivro(livroId);
}

// Função para fechar o modal de detalhes do livro
function fecharDetalhesLivro() {
    document.getElementById('livro-detalhes-modal').style.display = 'none';
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
            estoque: parseInt(document.getElementById('input-estoque-livro').value) || 1,
            descricao: document.getElementById('input-descricao-livro').value,
            ano: parseInt(document.getElementById('input-ano-livro').value)
        };

        livros.push(novoLivro);
        saveData(STORAGE_KEYS.LIVROS, livros);
        renderizarLivros();
        this.reset();
        alert('Livro adicionado com sucesso!');
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
        const isAdmin = localStorage.getItem(STORAGE_KEYS.USER_ROLE) === 'admin'; // Verifica o papel do usuário
        if (formContainer) {
            if (isAdmin) {
                formContainer.style.display = 'block';
            } else {
                formContainer.style.display = 'none';
            }
        }
        renderizarDestaquesDoMes();
        renderizarLivros();
    }
}

// Função para alternar o modo escuro
function toggleDarkMode() {
    // Adiciona ou remove a classe 'dark-mode' do body
    document.body.classList.toggle('dark-mode');

    // Salva a preferência do tema no localStorage para persistência
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    } else {
        localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    }
}

// Função de Logout
function logout() {
    localStorage.removeItem(STORAGE_KEYS.USUARIO_LOGADO);
    localStorage.removeItem(STORAGE_KEYS.USER_ROLE);
    window.location.href = 'login.html';
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de Sugestões para Alunos ---
    const inputAluno = document.getElementById('input-aluno');
    const alunoSuggestions = document.getElementById('aluno-suggestions');
    const inputLivro = document.getElementById('input-livro');
    const livroSuggestions = document.getElementById('livro-suggestions');

    // --- Delegação de Eventos para a Tabela de Empréstimos ---
    const tabelaBody = document.getElementById('tabela-emprestimos-body');
    if (tabelaBody) {
        tabelaBody.addEventListener('click', (e) => {
            const button = e.target.closest('button[data-action]');
            if (!button) return;

            const action = button.dataset.action;
            const id = parseInt(button.dataset.id, 10);

            if (action === 'devolver') {
                devolverLivro(id);
            } else if (action === 'atrasado') {
                marcarAtrasado(id);
            } else if (action === 'reabrir') {
                marcarAberto(id);
            }
        });
    }

    if (inputAluno && alunoSuggestions) {
        inputAluno.addEventListener('focus', () => {
            // Ao focar, mostra a lista (completa ou filtrada se já houver texto)
            mostrarSugestoesAlunos(inputAluno.value);
        });
        inputAluno.addEventListener('input', () => {
            mostrarSugestoesAlunos(inputAluno.value);
        });
    }

    // --- Lógica de Sugestões para Livros ---
    if (inputLivro && livroSuggestions) {
        inputLivro.addEventListener('focus', () => {
            mostrarSugestoesLivros(inputLivro.value);
        });
        inputLivro.addEventListener('input', () => {
            mostrarSugestoesLivros(inputLivro.value);
        });
    }

    // Listener global para fechar as listas ao clicar fora
    document.addEventListener('click', (e) => {
        if (alunoSuggestions && e.target !== inputAluno && !alunoSuggestions.contains(e.target)) {
            alunoSuggestions.style.display = 'none';
        }
        if (livroSuggestions && e.target !== inputLivro && !livroSuggestions.contains(e.target)) {
            livroSuggestions.style.display = 'none';
        }
    });    
    // --- Atualiza o ano do Copyright dinamicamente ---
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Inicialização do Modo Escuro ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        // Verifica preferência salva e aplica o tema
        if (localStorage.getItem(STORAGE_KEYS.THEME) === 'dark') {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
        // Adiciona o listener para o clique
        darkModeToggle.addEventListener('change', toggleDarkMode);
    }

    const usuarioLogado = localStorage.getItem(STORAGE_KEYS.USUARIO_LOGADO);
    const userRole = localStorage.getItem(STORAGE_KEYS.USER_ROLE);

    // Proteção de rota: se não estiver logado, volta para o login
    if (!usuarioLogado) {
        window.location.href = 'login.html';
        return; // Interrompe a execução do script
    }

    // Carregar nome do usuário logado
    const elementoUsuario = document.getElementById('usuario-logado');
    if (elementoUsuario) elementoUsuario.textContent = `Olá 👋, ${usuarioLogado}`;

    // Esconder elementos de admin para usuários comuns
    if (userRole !== 'admin') {
        // Esconde a aba 'Alunos'
        const navAlunos = document.querySelector('.sidebar a[onclick="navegar(\'alunos\')"]');
        if (navAlunos) navAlunos.closest('li').style.display = 'none';

        // Esconde o formulário de novo empréstimo manual (admin-only)
        const cardNovoEmprestimo = document.getElementById('form-emprestimo').closest('.card');
        if (cardNovoEmprestimo) cardNovoEmprestimo.style.display = 'none';

        // Esconde o formulário de cadastro de aluno (admin-only)
        const cardNovoAluno = document.getElementById('form-aluno').closest('.card');
        if (cardNovoAluno) cardNovoAluno.style.display = 'none';
    }

    renderizarTabela();
});
