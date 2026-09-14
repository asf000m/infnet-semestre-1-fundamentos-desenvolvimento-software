function Projeto(nome, valor, prazo) {
  this.nome = nome;
  this.valor = valor;
  this.prazo = prazo;
}

function Freelancer(nome, stack, anosXP) {
  this.nome = nome;
  this.stack = stack;
  this.anosXP = anosXP;

  this.apresentar = () => console.log(`Nome: ${this.nome}\nStack: ${this.stack}\nAnos de experiência: ${this.anosXP} anos`);

  this.ficarDisponivel = () => console.log('O freelancer está disponível para trabalho!');
}


/* # exercício 1 ---------------------------------------- */

const asafe = new Freelancer('Asafe Maia', 'HTML, CSS, JavaScript', 2);
asafe.apresentar();
asafe.ficarDisponivel();

/* # exercício 2 ---------------------------------------- */

const ecommerce = new Projeto('E-commerce', 5000, 180);
const landing_page = new Projeto('Landing Page', 3000, 60);
const app_mobile = new Projeto('App Mobile', 7600, 210);

console.log(app_mobile.prazo);
console.log(landing_page.valor);

/* # exercício 3 ---------------------------------------- */

let tituloPainel_h1 = document.querySelector('#titulo-painel');
tituloPainel_h1.textContent = 'Painel de Controle Avançado';
tituloPainel_h1 = document.querySelector('.descricao-header');
tituloPainel_h1.style.background = 'lightgray';

const primeiroParagrafo_p = document.querySelector('header p');
primeiroParagrafo_p.textContent = 'Bem-vindo ao sistema';

/* # exercício 4 ---------------------------------------- */

const listaNavegacao_ul = document.querySelector('nav ul');
const primeiroItemMenu_li = listaNavegacao_ul.parentNode.firstElementChild.firstElementChild;
const ultimoItemMenu_li = listaNavegacao_ul.lastElementChild;

let itemMenu;
itemMenu = document.createElement('li');
itemMenu.textContent = 'Configurações';

listaNavegacao_ul.appendChild(itemMenu);

/* # exercício 5 ---------------------------------------- */

const imagemPerfil_img = document.querySelector('#perfil img');
imagemPerfil_img.setAttribute('title', 'Usuário Verificado');

/* # exercício 6  ---------------------------------------- */

const statusBox_div = document.querySelector('.status-box');
statusBox_div.classList.add('disponivel');
statusBox_div.classList.remove('status-box');

function alternarStatus(event) {
  if (statusBox_div.classList.contains('disponivel')) {
    statusBox_div.classList.replace('disponivel', 'ocupado');
  } else if (statusBox_div.classList.contains('ocupado')) {
    statusBox_div.classList.replace('ocupado', 'disponivel');
  }
}

const alternarStatus_button = document.createElement('button');
alternarStatus_button.setAttribute('type', 'button');
alternarStatus_button.textContent = 'Alternar Status';
alternarStatus_button.addEventListener('click', alternarStatus);

document.querySelector('main section').appendChild(alternarStatus_button);


/* # exercício 7  ---------------------------------------- */

function fraseAleatoria() {
  const novoParagrafo = document.createElement('p');
  novoParagrafo.textContent = frasesGenericas[Math.floor(Math.random() * frasesGenericas.length)];
  widgetDepoimentos.appendChild(novoParagrafo);
}

const widgetDepoimentos = document.createElement('div');
widgetDepoimentos.setAttribute('id', 'depoimentos-recentes');
const perfil_section = document.querySelector('#perfil');
perfil_section.appendChild(widgetDepoimentos);

const gerarDepoimento = document.createElement('button');
gerarDepoimento.setAttribute('type', 'button');
gerarDepoimento.textContent = 'Gerar Depoimento';
gerarDepoimento.addEventListener('click', fraseAleatoria);
perfil_section.appendChild(gerarDepoimento);

const frasesGenericas = ["Performance Exponencial", "Transformação Core",
  "Escalabilidade Fluida", "Visão Data-Driven", "Impacto Holístico",
  "Agilidade Resiliente", "Inovação Centrada", "Conexão Estratégica",
  "Entrega Consultiva", "Liderança Híbrida"];


/* # exercício 8  ---------------------------------------- */

function removeUltimaSkill() {
  // remove o último item da lista de skills e apresenta uma mensagem de erro caso a lista esteja vazia
  const ultimaSkill = skills_ul.querySelector(':last-child');
  try {
    skills_ul.removeChild(ultimaSkill);
  } catch {
    alert('Sem skills para remover');
  }
}

const skillsSection_section = document.querySelector('#skills-section');

// altera um item aleatório da lista de skills
const skills_ul = document.querySelector('#skills');
const randomListItem = skills_ul.querySelector(`:nth-child(${Math.ceil(Math.random() * 5)})`);
randomListItem.textContent = 'Git e GitHub';

// cria e adiciona na página um botão para remover o último item da lista de skills
const rmUltimaSkill_button = document.createElement('button');
rmUltimaSkill_button.setAttribute('id', 'remove-ultima-skill');
rmUltimaSkill_button.setAttribute('type', 'button');
rmUltimaSkill_button.textContent = 'Remover última skill';
rmUltimaSkill_button.addEventListener('click', removeUltimaSkill);
skillsSection_section.appendChild(rmUltimaSkill_button);

function adicionaSkill() {
  // adiciona uma skill na lista de skills
  const randomIndex = Math.floor(Math.random() * programmingSkills.length);
  const novaSkill = document.createElement('li');
  novaSkill.textContent = programmingSkills[randomIndex];
  skills_ul.appendChild(novaSkill);
}

const programmingSkills = ["JavaScript", "Python", "Java", "C#", "C++", "TypeScript", "Ruby", 
  "Go", "PHP", "Swift", "Kotlin", "Rust", "SQL", "HTML", "CSS", "React", "Angular", "Node.js",
  "Django", "Spring Boot"];

// cria um botão que adiciona uma nova skill na lista de skills
const addSkill_button = document.createElement('button');
addSkill_button.setAttribute('id', 'adiciona-skill');
addSkill_button.setAttribute('type', 'button');
addSkill_button.textContent = 'Adicionar skill';
addSkill_button.addEventListener('click', adicionaSkill);
skillsSection_section.appendChild(addSkill_button);


/* #  exercício 9 ---------------------------------------- */

// cria uma div para a contagem de visualizações e botão
const contadorVisualizacoes_div = document.createElement('div');
contadorVisualizacoes_div.setAttribute('id', 'contador-visualizacoes');

let visualizacoes = 0;

function incrementaVisualizacoes() {
  visualizacoes++;
  verPerfilPublico_button.textContent = 'Visualizando...';
  visualizacoesPerfil_p.textContent = `Visualizações do Perfil: ...`;
  setTimeout(() => {
    visualizacoesPerfil_p.textContent = `Visualizações do Perfil: ${visualizacoes}`;
    verPerfilPublico_button.textContent = 'Ver Perfil Público';
  }, 1000);
}

function mudarCorVerPerfil() {
  if (verPerfilPublico_button.style.backgroundColor === 'lightyellow') {
    verPerfilPublico_button.style.backgroundColor = '';
  } else {
    verPerfilPublico_button.style.backgroundColor = 'lightyellow';
  }
}

const visualizacoesPerfil_p = document.createElement('p');
visualizacoesPerfil_p.textContent = 'Visualizações do Perfil: 0';

const verPerfilPublico_button = document.createElement('button');
verPerfilPublico_button.type = 'button';
verPerfilPublico_button.textContent = 'Ver Perfil Público';

verPerfilPublico_button.addEventListener('click', incrementaVisualizacoes);
verPerfilPublico_button.addEventListener('mouseover', mudarCorVerPerfil);
verPerfilPublico_button.addEventListener('mouseout', mudarCorVerPerfil);

contadorVisualizacoes_div.append(visualizacoesPerfil_p ,verPerfilPublico_button);
perfil_section.appendChild(contadorVisualizacoes_div);


/* # exercício 10  ---------------------------------------- */

window.addEventListener('load', () => {
  console.log('Sistema Carregado');
  console.log('URL:', window.location.href);
  console.log('Idioma:', window.navigator.language);
  // alert("Você será redirecionado para 'https://www.infnet.edu.br/'");
  // window.location.assign('https://www.infnet.edu.br/');
});


/* # exercício 11  ---------------------------------------- */

const deployWrapper_div = document.createElement('div');
deployWrapper_div.id = 'deploy-wrapper';
perfil_section.appendChild(deployWrapper_div);

const deploy_button = document.createElement('button');
deploy_button.type = 'button';
deploy_button.id = 'deploy-btn';
deploy_button.textContent = 'Fazer Deploy';
deployWrapper_div.appendChild(deploy_button);

deploy_button.addEventListener('mouseover', () => deploy_button.style.backgroundColor = 'lightblue');
deploy_button.addEventListener('mouseout', () => deploy_button.style.backgroundColor = '');
deploy_button.addEventListener('mousedown', () => {
  deploy_button.textContent = 'Enviando...';
  setTimeout(() => deploy_button.textContent = 'Fazer Deploy', 1500);
});


/* # exercício 12 ---------------------------------------- */

const nomeUsuario_span = document.querySelector('.nome-usuario');
nomeUsuario_span.textContent = asafe.nome;

// salvar ----------------------------------------
function bookmark() {
  if (bookmarked) {
    bookmarked = false;
    bookmarkBtn_button.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#2f4f4f'><path d='M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z'/></svg>";
  } else {
    bookmarked = true;
    bookmarkBtn_button.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000'><path d='M713-600 600-713l56-57 57 57 141-142 57 57-198 198ZM200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Z'/></svg>";
    alert('Projeto salvo na coleção!');
  }
}

let bookmarked = false;
const bookmarkBtn_button = document.querySelector('.bookmark-btn');
bookmarkBtn_button.addEventListener('click', bookmark);

// like ----------------------------------------
function likePost() {
  if (likeBtn.style.backgroundColor === 'red') {
    likeBtn.style.backgroundColor = 'white';
  } else {
    likeBtn.style.backgroundColor = 'red';
  }
}

const likeBtn = document.querySelector('.like-btn');
likeBtn.addEventListener('click', likePost);

const projetoImagem_img = document.querySelector('.projeto-imagem');
projetoImagem_img.addEventListener('dblclick', likePost);

// comentar ----------------------------------------
function toggleHidden() {
  adicionarComentario.classList.toggle('hidden');
}

const adicionarComentario = document.querySelector('.adicionar-comentario');

const comentsBtn = document.querySelector('.comments-btn');
comentsBtn.addEventListener('click', toggleHidden);


function comentar() {
  if (addComentario_input.value === '') {
    return undefined;
  } else {
    const newDiv = document.createElement('div');
    newDiv.classList.add('comentario');
    
    const newImgPerfil = document.createElement('img');
    newImgPerfil.src = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';
    newImgPerfil.alt = 'Foto de perfil';
    
    const newP = document.createElement('p');
    newP.textContent = addComentario_input.value;
  
    newDiv.append(newImgPerfil, newP);
    comentarios_div.append(newDiv);
  }
}

const comentarios_div = document.querySelector('.comentarios');

const addComentario_input = document.querySelector('#add-comentario');
addComentario_input.addEventListener('focusout', comentar);


/* # exercício 13 ---------------------------------------- */
function validarTodoInput() {
  if (todo_input.value.length < 4) {
    todo_input.style.border = '2px solid red';
    alert('É necessário no mínimo 4 caracteres');
  } else {
    todo_input.style.border = '1px solid lightgray';
  }
}

const todo_input = document.querySelector('.to-do-list input');
todo_input.addEventListener('focusout', validarTodoInput);

function adicionarTarefa() {
  const newRemoveBtn = document.createElement('button');
  newRemoveBtn.type = 'button';
  newRemoveBtn.textContent = 'Remover';
  newRemoveBtn.addEventListener('click', removerTarefa);

  const novaTarefa = document.createElement('span');
  novaTarefa.textContent = todo_input.value;
  novaTarefa.style.paddingRight = '50%';
  novaTarefa.style.marginRight = '2rem';
  novaTarefa.style.paddingBottom = '0.5rem';
  novaTarefa.style.borderBottom = '1px solid lightgray';
  
  const newLi = document.createElement('li');
  newLi.style.marginBottom = '1rem';
  newLi.append(novaTarefa, newRemoveBtn);

  listaTarefas_ul.append(newLi);
}

function removerTarefa(e) {
  console.log(e.target.parentElement);
  e.target.parentElement.remove();
}

const listaTarefas_ul = document.querySelector('.to-do-list ul');
const addTarefa_button = document.querySelector('.to-do-list button');
addTarefa_button.addEventListener('click', adicionarTarefa);


/* # exercício 14 ---------------------------------------- */

// validação nome
function validarNome(nome) {
  return nome.length > 3 && nome.includes('SA') ? true : false;
}
// validação data de fundação
function validarFundacao(data) {
  const dataMinima = new Date('2000/01/01');
  const dataFundacao = new Date(data);
  
  return dataFundacao > dataMinima ? true : false;
}
// validação email
function validarEmail(email) {
  const indexArroba = email.indexOf('@');
  const indexPonto = email.indexOf('.');

  return indexArroba < indexPonto ? true : false;
}
// validação descrição
function validarDescricao(descricao) {
  return descricao.length <= 50 ? true : false;
}

function cadastroEmpresaValidacao() {
  const nomeValido = validarNome(cadastroEmpresa_form.nomeEmpresa.value);
  const fundacaoValida = validarFundacao(cadastroEmpresa_form.fundacaoEmpresa.value);
  const emailValido = validarEmail(cadastroEmpresa_form.emailEmpresa.value);
  const descricaoValida = validarDescricao(cadastroEmpresa_form.descricaoEmpresa.value);

  console.log(nomeValido, fundacaoValida, emailValido, descricaoValida);
  alert('Cadastro enviado!');
  
  return nomeValido && fundacaoValida && emailValido && descricaoValida;
}

const cadastroEmpresa_form = document.querySelector('#cadastro-empresa');


/* # exercício 15 ---------------------------------------- */

// validação login
function validarLogin(login) {
  return login.length <= 8 ? true : false;
}
// validação idade
function vaidarIdade(idade) {
  return idade > 12 ? true : false;
}
// validação senhas
function validarSenhas(senha, confirmacaoSenha) {
  return (senha.length >= 4 && senha.length <= 10) && (senha === confirmacaoSenha) ? true : false;
}
