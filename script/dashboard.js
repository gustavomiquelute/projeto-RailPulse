document.addEventListener("DOMContentLoaded", () => {
    const currentUserStr = localStorage.getItem("currentUser");
    if (!currentUserStr) {
        window.location.href = "tela-login.html";
        return;
    }

    const currentUser = JSON.parse(currentUserStr);

    const boasVindas = document.getElementById("boas-vindas");
    const menuUsuarios = document.getElementById("menu-usuarios");

    if (currentUser.role === "admin") {
        boasVindas.innerText = "Bem-vindo, Administrador";
        menuUsuarios.style.display = "block";
    } else {
        boasVindas.innerText = "Bem-vindo, " + (currentUser.nome || "User");
       
    }

    document.getElementById("btn-sair").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        window.location.href = "tela-login.html";
    });
});
