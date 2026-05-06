document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    if (!mensagem) {
        const divMensagem = document.createElement("div");
        divMensagem.id = "mensagem";
        document.getElementById("form").prepend(divMensagem);
        mensagem = divMensagem;
    }

    mensagem.innerHTML = "";

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div class='erro'><p>Email Inválido</p></div>";
        return;
    }

    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p>Senha muito curta</p></div>";
        return;
    }

    let usuariosDb = JSON.parse(localStorage.getItem("usuarios_cadastrados")) || {};
    let salva = localStorage.getItem(email); 

    let loginmestre = (email === "admin@gmail.com" && senha === "1234");
    let loginusuario = false;
    let nomeUsuario = "User";

    if (usuariosDb[email] && usuariosDb[email].senha === senha) {
        loginusuario = true;
        nomeUsuario = usuariosDb[email].nome || "User";
    } else if (salva !== null && salva === senha) {
        loginusuario = true;
    }

    if (loginmestre) {
        localStorage.setItem("currentUser", JSON.stringify({ role: "admin", nome: "Administrador", email: email }));
        mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso</p></div>";
        setTimeout(() => window.location.href = "dashboard.html", 500);
    } else if (loginusuario) {
        localStorage.setItem("currentUser", JSON.stringify({ role: "funcionario", nome: nomeUsuario, email: email }));
        mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso</p></div>";
        setTimeout(() => window.location.href = "dashboard.html", 500);
    } else {
        mensagem.innerHTML = "<div class='erro'><p>Dados incorretos</p></div>";
    }
}