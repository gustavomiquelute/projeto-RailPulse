
document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div class='erro'><p>Email Inválido</p></div>";
        return;
    }

    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p>Senha muito curta</p></div>";
        return;
    }

    let salva = localStorage.getItem(email);

    let loginmestre = (email === "admin@gmail.com" && senha === "1234");
    let loginusuario = (salva !== null && salva === senha);

    if (loginmestre || loginusuario) {
        mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso</p></div>";
    } else {
        mensagem.innerHTML = "<div class='erro'><p>Dados incorretos</p></div>";
    }

    document.getElementById("form").reset();

}