/*Os links de navegação*/ 
var linkSobreMim = document.querySelector('.item-sobre-mim');
var linkFormacao = document.querySelector('.item-formacao');
var linkPortfolio = document.querySelector('.item-portfolio');
var linkContato = document.querySelector('.item-contato');

/*Seções que já possuem conteúdo*/
var sectionSobreMim = document.querySelector('.secao-sobre-mim');
var sectionFormacao = document.querySelector('.secao-formacao');
var sectionPortfolio = document.querySelector('.secao-portfolio');
var sectionContato = document.querySelector('.secao-contato');

/*Variáveis necessárias para mensagem de envio do formulário*/
var formulario = document.querySelector('#contact-form');
var titulo = document.querySelector('.secao-contato .titulo');
var divMensagemSucesso = document.querySelector('.div-mensagemSucesso')

/*Divs de cada input do formulário*/
var divNome = document.querySelector('.input-contato-nome');
var divEmail = document.querySelector('.input-contato-email');
var divTelefone = document.querySelector('.input-contato-telefone');
var divMensagem = document.querySelector('.input-contato-mensagem');
var botaoOk = document.querySelector('#botao-ok');

/*Inputs do Formulário de Contato*/
var nome = document.getElementById('input-nome');
var email = document.getElementById('input-email');
var telefone = document.getElementById('input-telefone');
var mensagem = document.getElementById('textarea-contato-mensagem');
var botaoEnviar = document.querySelector('.input-contato-submit');

/*Ouvinte de Eventos*/
linkSobreMim.addEventListener('click', mostraSobreMim);
linkFormacao.addEventListener('click', mostraFormacao);
linkPortfolio.addEventListener('click', mostraPortfolio);
linkContato.addEventListener('click', mostraContato);
botaoOk.addEventListener('click', voltaFormulario);

botaoEnviar.addEventListener('click', enviaFormulario);

function mostraSobreMim(event) {
    event.preventDefault();
    fechaSecoes();
    setTimeout(() => {
        sectionSobreMim.style.display = 'flex';
        linkSobreMim.style.opacity = '0.5';
        sectionSobreMim.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function mostraFormacao(event) {
    event.preventDefault();
    fechaSecoes();
    setTimeout(() => {
        sectionFormacao.style.display = 'flex';
        linkFormacao.style.opacity = '0.5';
        sectionFormacao.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function mostraPortfolio(event) {
    event.preventDefault();
    fechaSecoes();
    setTimeout(() => {
        sectionPortfolio.style.display = 'flex';
        linkPortfolio.style.opacity = '0.5';
        sectionPortfolio.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function mostraContato(event) {
    event.preventDefault();
    fechaSecoes();
    setTimeout(() => {
        sectionContato.style.display = 'flex';
        linkContato.style.opacity = '0.5';
        sectionContato.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

/*A seção é escondida, mostrando apenas a que foi chamada*/
function fechaSecoes() {
    sectionSobreMim.style.display = 'none';
    linkSobreMim.style.opacity = '1.0';
    sectionFormacao.style.display = 'none';
    linkFormacao.style.opacity = '1.0';
    sectionPortfolio.style.display = 'none';
    linkPortfolio.style.opacity = '1.0';
    sectionContato.style.display = 'none';
    linkContato.style.opacity = '1.0';
    window.scrollTo(0, 0);
}

function enviaFormulario(event) {
    event.preventDefault();

    var avisos = document.querySelectorAll('.aviso');
    avisos.forEach(aviso => aviso.remove());

    let formularioValido = true;

   if (nome.value == '') {
    formularioValido = false;
    var textoAviso = document.createElement('p');
    textoAviso.textContent = 'Por favor, digite o seu nome!';
    textoAviso.style.color = 'red';
    textoAviso.style.fontFamily = 'Arial';
    textoAviso.style.fontWeight = 'bold';
    textoAviso.style.margin = '2px 0px 0px 0px';
    textoAviso.classList.add('aviso');
    divNome.appendChild(textoAviso);
   }

   if (email.value == '') {
    formularioValido = false;
    var textoAviso = document.createElement('p');
    textoAviso.textContent = 'Por favor, digite o seu email!';
    textoAviso.style.color = 'red';
    textoAviso.style.fontFamily = 'Arial';
    textoAviso.style.fontWeight = 'bold';
    textoAviso.style.margin = '2px 0px 0px 0px';
    textoAviso.classList.add('aviso');
    divEmail.appendChild(textoAviso);
   } 
   
   if (telefone.value == '') {
    formularioValido = false;
    var textoAviso = document.createElement('p');
    textoAviso.textContent = 'Por favor, digite o seu telefone!';
    textoAviso.style.color = 'red';
    textoAviso.style.fontFamily = 'Arial';
    textoAviso.style.fontWeight = 'bold';
    textoAviso.style.margin = '2px 0px 0px 0px';
    textoAviso.classList.add('aviso');
    divTelefone.appendChild(textoAviso);
   } 
   
   if (mensagem.value == '') {
    formularioValido = false;
    var textoAviso = document.createElement('p');
    textoAviso.textContent = 'Por favor, digite sua mensagem!';
    textoAviso.style.color = 'red';
    textoAviso.style.fontFamily = 'Arial';
    textoAviso.style.fontWeight = 'bold';
    textoAviso.style.margin = '2px 0px 0px 0px';
    textoAviso.classList.add('aviso');
    divMensagem.appendChild(textoAviso);
   }

   if (formularioValido) {
    titulo.style.display = 'none';
    formulario.style.display = 'none';
    divMensagemSucesso.style.display = 'flex';
   }

}

function voltaFormulario(event) {
    event.preventDefault();

    titulo.style.display = 'block';
    formulario.style.display = 'flex';
    divMensagemSucesso.style.display = 'none';

    formulario.reset();
}
   
