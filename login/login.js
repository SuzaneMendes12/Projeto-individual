var formlogin = document.querySelector('#login')
var formcadastro = document.querySelector('#cadastro')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnlogin')
  .addEventListener('click', () => {
    formlogin.style.left = "25px"
    formcadastro.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btncadastro')
  .addEventListener('click', () => {
    formlogin.style.left = "-450px"
    formcadastro.style.left = "25px"
    btnColor.style.left = "110px"
})


function validateLogin() {
  var email = document.getElementById('login').querySelector('input[type="text"]').value;
  var senha = document.getElementById('login').querySelector('input[type="password"]').value;

  if (!email || !senha) {
      alert('Por favor, preencha todos os campos para fazer login.');
      return false;
  }

  alert('Login bem-sucedido!');
  return true;
}

function validateCadastro() {
  var nome = document.getElementById('cadastro').querySelector('input[placeholder="Nome"]').value;
  var sobrenome = document.getElementById('cadastro').querySelector('input[placeholder="Sobrenome"]').value;
  var cpf = document.getElementById('cadastro').querySelector('input[placeholder="CPF"]').value;
  var email = document.getElementById('cadastro').querySelector('input[placeholder="Email"]').value;
  var senha = document.getElementById('cadastro').querySelector('input[placeholder="Senha"]').value;
  var confirmarSenha = document.getElementById('cadastro').querySelector('input[placeholder="Confirmar senha"]').value;

  if (!nome || !sobrenome || !cpf || !email || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos para cadastrar.');
      return false;
  }

  if (senha !== confirmarSenha) {
      alert('As senhas não coincidem. Por favor, verifique.');
      return false;
  }

  alert('Cadastro bem-sucedido!');
  return true;
}
