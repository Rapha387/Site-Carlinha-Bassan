var entrar = document.querySelector('.Entrar')
var telaBloqueio = document.querySelector('.bloqueio')
var telaLogin = document.querySelector('#telaLogin')
var cadastrar = document.querySelector('.Cadastrar')
var telaCadastro = document.querySelector('#telaCadastro')
var telaCadastro2 = document.querySelector('#telaCadastro2')
var mudarCadastro = document.querySelector('.cadastrarJanela')
var mudarLogin = document.querySelector('.entrarJanelaC')
var mudarLoginEtapa2 = document.querySelector('.entrarJanelaC2')
var btnProximo = document.querySelector('#btnProximo')


var telaMenu = document.querySelector('#menuCel')
var btnMenuCel = document.querySelector('#btnMenuCel')
var btnFecharTela = document.querySelector('#imgFecharTela')
var entrarCel = document.querySelector('.EntrarCel')
var cadastrarCel = document.querySelector('.CadastrarCel')


var fecharlogin = document.querySelector('#imgFecharLogin')
var fecharCadastro = document.querySelector('#imgFecharCadastro')
var fecharCadastro2 = document.querySelector('#imgFecharCadastro2')


entrar.addEventListener('click', abrirLogin)
cadastrar.addEventListener('click', abrirCadastro)
mudarCadastro.addEventListener('click',abrirCadastro)
mudarLogin.addEventListener('click', abrirLogin)
mudarLoginEtapa2.addEventListener('click', abrirLogin)
btnProximo.addEventListener('click', abrirCadastro2)
fecharlogin.addEventListener('click', fecharTela)
fecharCadastro.addEventListener('click', fecharTela)
fecharCadastro2.addEventListener('click', fecharTela)


btnMenuCel.addEventListener('click', abrirTela)
btnFecharTela.addEventListener('click', fecharTela)
entrarCel.addEventListener('click', abrirLogin)
cadastrarCel.addEventListener('click', abrirCadastro)



function abrirLogin()
{
    telaBloqueio.classList.remove('escondido');
    telaLogin.classList.remove('escondido');
    this.parentNode.parentNode.classList.add('escondido');
}

function abrirCadastro()
{
    telaBloqueio.classList.remove('escondido');
    telaCadastro.classList.remove('escondido');
    this.parentNode.parentNode.classList.add('escondido');
}

function abrirCadastro2()
{
    telaBloqueio.classList.remove('escondido');
    telaCadastro2.classList.remove('escondido');
    telaCadastro.classList.add('escondido');
}

function abrirTela()
{
    telaMenu.classList.remove('escondido');
}

function fecharTela()
{
    this.parentNode.parentNode.classList.add('escondido');
    telaBloqueio.classList.add('escondido');
}

