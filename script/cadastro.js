document.addEventListener("DOMContentLoaded", () => {
    const currentUserStr = localStorage.getItem("currentUser");
    if (!currentUserStr) {
        window.location.href = "tela-login.html";
        return;
    }

    const currentUser = JSON.parse(currentUserStr);
    if (currentUser.role !== "admin") {
        alert("Acesso Negado: Apenas administradores podem acessar esta página.");
        window.location.href = "dashboard.html";
        return;
    }

    document.getElementById("btn-sair").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        window.location.href = "tela-login.html";
    });

    document.getElementById("form-cadastro").addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("cad-nome").value;
        const matricula = document.getElementById("cad-matricula").value;
        const email = document.getElementById("cad-email").value;
        const senha = document.getElementById("cad-senha").value;


        const cargo = document.getElementById("cad-cargo").value;

        if (!cargo) {
            alert("Selecione um cargo!");
            return;
        }
        

        let usuariosDb = JSON.parse(localStorage.getItem("usuarios_cadastrados")) || {};

        if (usuariosDb[email]) {
            alert("Usuário com este e-mail já existe!");
            return;
        }

        usuariosDb[email] = {
            nome: nome,
            matricula: matricula,
            role: cargo,
            senha: senha
        };

        localStorage.setItem("usuarios_cadastrados", JSON.stringify(usuariosDb));

        document.getElementById("form-cadastro").reset();

        const container = document.getElementById("mensagem-container");
        container.innerHTML = `<div style="background-color: #d4edda; color: #155724; padding: 10px; margin: 10px 0; border-radius: 4px;">Usuário cadastrado com sucesso!</div>`;

        setTimeout(() => {
            container.innerHTML = "";
        }, 3000);
    });
});