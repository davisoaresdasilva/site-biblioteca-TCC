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
    { id: 1, titulo: 'O Pequeno Príncipe', genero: 'Infantil', capa: 'https://m.media-amazon.com/images/I/71d+v0e+w-L._SL1500_.jpg', estoque: 2, descricao: 'Uma história poética sobre amizade, amor e perda, com ilustrações do autor.', resumo: 'Um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma jornada filosófica e poética sobre a vida e a natureza humana.' },
    { id: 2, titulo: 'Dom Casmurro', genero: 'Clássicos', capa: 'https://m.media-amazon.com/images/I/81s8xQj8PjL._SL1500_.jpg', estoque: 3, descricao: 'Um clássico da literatura brasileira que explora o ciúme e a dúvida em um casamento.', resumo: 'Bentinho, já um homem idoso, narra a história de seu amor de infância por Capitu, levantando a suspeita de uma traição que o atormentou por toda a vida.' },
    { id: 3, titulo: 'Harry Potter e a Pedra Filosofal', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/81iqZ2HHD-L._SL1500_.jpg', estoque: 5, descricao: 'O primeiro livro da série que apresentou ao mundo o jovem bruxo Harry Potter.', resumo: 'Harry Potter descobre em seu 11º aniversário que é um bruxo e que está convidado para estudar na Escola de Magia e Bruxaria de Hogwarts. Lá, ele faz amigos e descobre a verdade sobre a morte de seus pais.' },
    { id: 4, titulo: '1984', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/819js3EQwbL._SL1500_.jpg', estoque: 2, descricao: 'Uma distopia sombria sobre um futuro totalitário onde o pensamento é controlado.', resumo: 'Winston Smith vive em um regime totalitário onde o Grande Irmão está sempre vigiando. Ele começa a questionar o sistema e se apaixona por Julia, mas a rebelião tem um preço alto.' },
    { id: 5, titulo: 'O Guia do Mochileiro das Galáxias', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/81e1rTE5LBL._SL1500_.jpg', estoque: 1, descricao: 'Uma comédia de ficção científica que satiriza a burocracia e a busca pelo sentido da vida.', resumo: 'Arthur Dent é salvo da destruição da Terra por seu amigo Ford Prefect, um alienígena. Juntos, eles embarcam em uma aventura maluca pela galáxia, guiados por um livro peculiar.' },
    { id: 6, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91nWOe8uBQL._SL1500_.jpg', estoque: 3, descricao: 'O início da jornada épica de Frodo para destruir o Um Anel e salvar a Terra-média.', resumo: 'Frodo Bolseiro, um hobbit, herda o Um Anel de seu tio e descobre que ele precisa ser destruído para evitar que o mal domine a Terra-média. Ele forma a Sociedade do Anel para ajudá-lo em sua perigosa missão.' },
    { id: 7, titulo: 'Orgulho e Preconceito', genero: 'Clássicos', capa: 'https://m.media-amazon.com/images/I/81smn5lScCL._SL1500_.jpg', estoque: 2, descricao: 'Um romance clássico sobre amor, classe social e as primeiras impressões na Inglaterra do século XIX.', resumo: 'Elizabeth Bennet, uma jovem inteligente e espirituosa, entra em conflito com o orgulhoso Sr. Darcy. Eles superam seus preconceitos e orgulho para encontrar o amor.' },
    { id: 8, titulo: 'Duna', genero: 'Ficção Científica', capa: 'https://m.media-amazon.com/images/I/81dI19I4GjL._SL1500_.jpg', estoque: 2, descricao: 'Uma saga de ficção científica sobre política, religião e poder no desértico planeta de Arrakis.', resumo: 'Paul Atreides e sua família se mudam para o planeta desértico de Arrakis, a única fonte da especiaria melange. Após uma traição, Paul lidera uma revolução para retomar o controle do planeta.' },
    { id: 9, titulo: 'O Hobbit', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91b0C2YNSrL._SL1500_.jpg', estoque: 3, descricao: 'A aventura de Bilbo Bolseiro, um hobbit que é arrastado para uma jornada para recuperar um tesouro de um dragão.', resumo: 'Bilbo Bolseiro, um hobbit que adora o conforto de sua casa, é convencido a se juntar a um grupo de anões em uma missão para recuperar seu tesouro roubado pelo dragão Smaug.' },
    { id: 10, titulo: 'A Culpa é das Estrelas', genero: 'Romance', capa: 'https://m.media-amazon.com/images/I/817tHNcyAgL._SL1500_.jpg', estoque: 1, descricao: 'A história de amor de dois adolescentes que se conhecem em um grupo de apoio ao câncer.', resumo: 'Hazel Grace Lancaster, uma paciente com câncer, se apaixona por Augustus Waters. Juntos, eles embarcam em uma jornada para encontrar o autor de seu livro favorito.' },
    { id: 11, titulo: 'Percy Jackson: O Ladrão de Raios', genero: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/91c30Jg8dQL._SL1500_.jpg', estoque: 4, descricao: 'Percy Jackson descobre que é um semideus e é acusado de roubar o raio de Zeus.', resumo: 'Percy Jackson, um garoto com TDAH e dislexia, descobre que é filho de Poseidon e é enviado para um acampamento para semideuses. Ele precisa provar sua inocência após ser acusado de roubar o raio de Zeus.' },
    { id: 12, titulo: 'It: A Coisa', genero: 'Terror', capa: 'https://m.media-amazon.com/images/I/81c8No6lsuL._SL1500_.jpg', estoque: 2, descricao: 'Um grupo de crianças luta contra uma entidade maligna que aterroriza sua cidade.', resumo: 'Em uma pequena cidade, um grupo de crianças conhecido como "O Clube dos Otários" enfrenta uma entidade maligna que assume a forma de seus piores medos, mais comumente um palhaço chamado Pennywise.' },
    { id: 13, titulo: 'Sherlock Holmes: Um Estudo em Vermelho', genero: 'Mistério', capa: 'https://m.media-amazon.com/images/I/81+y+g+9G+L._SL1500_.jpg', estoque: 2, descricao: 'O primeiro caso de Sherlock Holmes e Dr. Watson juntos, investigando um assassinato misterioso.', resumo: 'Dr. Watson conhece o excêntrico Sherlock Holmes e os dois se mudam para a Baker Street. Eles logo se envolvem na investigação de um assassinato que os leva a uma história de amor e vingança.' },
    { id: 14, titulo: 'Jogos Vorazes', genero: 'Distopia', capa: 'https://m.media-amazon.com/images/I/71sHw8gTEqL._SL1500_.jpg', estoque: 3, descricao: 'Em uma sociedade distópica, jovens são forçados a lutar até a morte em um evento televisionado.', resumo: 'Katniss Everdeen se voluntaria para participar dos Jogos Vorazes no lugar de sua irmã mais nova. Ela precisa usar suas habilidades de caça para sobreviver em uma arena mortal.' },
    { id: 15, titulo: 'O Código Da Vinci', genero: 'Suspense', capa: 'https://m.media-amazon.com/images/I/81AFG2ww2UL._SL1500_.jpg', estoque: 2, descricao: 'Um simbologista de Harvard se envolve em uma caça ao tesouro para desvendar um segredo milenar.', resumo: 'Robert Langdon, um simbologista, é chamado para investigar um assassinato no Louvre. Ele descobre uma série de pistas que o levam a uma sociedade secreta e a um segredo que pode abalar as fundações do cristianismo.' },
    { id: 16, titulo: 'O Alquimista', genero: 'Ficção', capa: 'https://m.media-amazon.com/images/I/7122h3jWvEL._SL1500_.jpg', estoque: 3, descricao: 'A jornada de um pastor andaluz em busca de um tesouro e de sua Lenda Pessoal.', resumo: 'Santiago, um jovem pastor, tem um sonho recorrente sobre um tesouro nas pirâmides do Egito. Ele decide seguir sua "Lenda Pessoal" e embarca em uma jornada de autodescoberta.' },
    { id: 17, titulo: 'O Nome do Vento', genero: 'Fantasia', capa: 'https://editoraarqueiro.com.br/wp-content/uploads/2021/08/O-NOME-DO-VENTO-capa-frente-alta.jpg', estoque: 1, descricao: 'A história de Kvothe, um herói lendário que conta sua vida a um cronista.', resumo: 'Kvothe, um estalajadeiro, revela seu passado como um herói lendário. Ele narra sua infância, sua luta pela sobrevivência e sua busca por conhecimento e vingança.' },
    { id: 18, titulo: 'A Metamorfose', genero: 'Ficção', capa: 'https://m.media-amazon.com/images/I/71ss5-d18RL._SL1500_.jpg', estoque: 4, descricao: 'A história surreal de um homem que acorda transformado em um inseto monstruoso.', resumo: 'Gregor Samsa, um caixeiro-viajante, acorda um dia transformado em um inseto gigante. Ele se torna um fardo para sua família e é forçado a viver isolado em seu quarto.' }
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
                    <button onclick="devolverLivro(${emp.id})" style="cursor:pointer; color:blue; text-decoration:underline; background:none; border:none; margin-right: 5px;">
                        Devolver
                    </button>
                    <button onclick="marcarAtrasado(${emp.id})" style="cursor:pointer; color:orange; text-decoration:underline; background:none; border:none; margin-right: 5px;">
                        Atrasado
                    </button>
                    <button onclick="marcarAberto(${emp.id})" style="cursor:pointer; color:green; text-decoration:underline; background:none; border:none;">
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
        id: emprestimos.length + 1,
        aluno: aluno,
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

    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        alert('Você precisa estar logado para solicitar um livro.');
        return;
    }

    // Nova verificação de disponibilidade baseada em estoque
    const emprestados = emprestimos.filter(e => e.livro === livro.titulo && (e.status === 'ABERTO' || e.status === 'ATRASADO')).length;
    const disponiveis = livro.estoque - emprestados;

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
    document.getElementById('modal-descricao-livro').textContent = livro.descricao;
    document.getElementById('modal-resumo-livro').textContent = livro.resumo;

    document.getElementById('livro-detalhes-modal').style.display = 'flex';
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
            descricao: 'Descrição do livro adicionado.',
            resumo: 'Resumo do livro adicionado.'
        };

        livros.push(novoLivro);
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
});
