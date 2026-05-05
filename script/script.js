
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

    if (cadastro) {
        localStorage.setItem(email, senha);
        mensagem.innerHTML = "<div class='sucesso'><p>Cadastrado com sucesso</p></div>";
    } else {
        let salva = localStorage.getItem(email);
        if (salva === senha) {
            mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso</p></div>";
        } else {
            mensagem.innerHTML = "<div class='erro'><p>Dados Incorretos</p></div>";
        }
    }
    
    if (cadastro) {
        localStorage.setItem(email, senha);
        mensagem.innerHTML = "<div class='sucesso'><p>Cadastrado com sucesso</p></div>";
    } else {
        let salva = localStorage.getItem(email);
        
        if ((email === "admin@admin.com" && senha === "1234") || salva === senha) {
            mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso</p></div>";
        } else {
            mensagem.innerHTML = "<div class='erro'><p>Dados Incorretos</p></div>";
        }
    }
    document.getElementById("form").reset();

}