const user = JSON.parse(sessionStorage.getItem("usuarioLogado"));
      
        if (!user) {
          alert("Você precisa estar logado para ver as notas!");
          window.location.href = "login.html";
        } else {
          document.getElementById("boasVindas").innerText = `Aluno(a), ${user.nome}!`;
      
      
          const tbody = document.querySelector("#tabelaNotas tbody");
          notas.forEach(n => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${n.materia}</td><td>${n.nota}</td>`;
            tbody.appendChild(tr);
          });
        }
      
        function logout() {
          sessionStorage.removeItem("usuarioLogado");
          window.location.href = "login.html";
        }

        function logout() {
  // Remove os dados de login
  localStorage.removeItem("usuarioLogado");

  // Redireciona para a tela de login
  window.location.href = "../cadastro-login/login.html";
}