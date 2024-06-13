// ***** Validações error *****

const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const data = document.getElementById("dataNasc");
const email = document.getElementById("email");
const celular = document.getElementById("cel");
const telefone = document.getElementById("tel");
const mae = document.getElementById("mae");
const cpf = document.getElementById("cpf");
const cep = document.getElementById("cep");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputFullname();
    checkInputEmail();
    checkInputDate();
    checkInputCel();
    checkInputTel();
    checkInputMae();
    checkInputCpf();
    checkInputCep();
    checkInputUsername();
    checkInputPassword();
    checkInputConfirmPassword();
    
  });


  function checkInputFullname() {
    const fullnameValue = fullname.value;

    if(fullnameValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(fullname, "Preencha o seu nome completo.")
    }else {
        const formItem = fullname.parentElement;
        formItem.className = "input-box"
    }


  }

  function checkInputDate() {
    const dataValue = data.value;

    if(dataValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(data, "Preencha com sua data de nascimento.")
    }else {
        const formItem = data.parentElement;
        formItem.className = "input-box"
    }


  }


  function checkInputEmail() {
    const emailValue = email.value;

    if(emailValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(email, "O e-mail é obrigatório.")
    }else {
        const formItem = email.parentElement;
        formItem.className = "input-box"
    }


  }


  function checkInputCel() {
    const celValue = cel.value;

    if(celValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(cel, "O celular é obrigatório.")
    }else {
        const formItem = cel.parentElement;
        formItem.className = "input-box"
    }

  }


  function checkInputTel() {
    const telValue = tel.value;

    if(telValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(tel, "O telefone é obrigatório.")
    }else {
        const formItem = tel.parentElement;
        formItem.className = "input-box"
    }

  }


  function checkInputMae() {
    const maeValue = mae.value;

    if(maeValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(mae, "Nome da mãe é obrigatório.")
    }else {
        const formItem = mae.parentElement;
        formItem.className = "input-box"
    }

  }


  function checkInputCpf() {
    const cpfValue = cpf.value;

    if(cpfValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(cpf, "O CPF é obrigatório.")
    }else {
        const formItem = cpf.parentElement;
        formItem.className = "input-box"
    }


  }


  function checkInputCep() {
    const cepValue = cep.value;

    if(cepValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(cep, "O CEP é obrigatório.")
    }else {
        const formItem = cep.parentElement;
        formItem.className = "input-box"
    }


  }


  function checkInputUsername() {
    const usernameValue = username.value;

    if(usernameValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(username, "O nome do usuário é obrigatório.")
    }else {
        const formItem = username.parentElement;
        formItem.className = "input-box"
    }


  }


  function checkInputPassword() {
    const passwordValue = password.value;

    if(passwordValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(password, "O nome do usuário é obrigatório.")
    }else {
        const formItem = password.parentElement;
        formItem.className = "input-box"
    }


  }


  function checkInputConfirmPassword() {
    const confirmPasswordValue = confirmPassword.value;

    if(confirmPasswordValue === "") {
        // mostrar o aviso e mostrar a msg de erro 
        errorInput(confirmPassword, "O nome do usuário é obrigatório.")
    }else {
        const formItem = confirmPassword.parentElement;
        formItem.className = "input-box"
    }


  }




  





  function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "input-box error"

  }


  