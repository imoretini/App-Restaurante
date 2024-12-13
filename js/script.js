const login = document.getElementById('email');
const senha = document.getElementById('password');

function validarUsuario(){
    console.log(login.value + senha.value);
    window.location.href = '../view/Pedido.html';

}

function cadastrarUsuario(){
    window.location.href = '../view/index';
    
}
