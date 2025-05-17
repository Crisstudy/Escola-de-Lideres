//  const alunos = {
//     "Vilmar": {
//       senha: "1234",
//             notas: [
//         { modulo: "Módulo I", disciplina: "Visão bíblica AT", nota: "8.5" },
//          { modulo: "Módulo II", disciplina: "Teologia Prática", nota: "9.0" }
//       ]
//      },
//      "Cristina": {
//        senha: "abcd",
//        notas: [
//         { modulo: "Módulo I", disciplina: "Visão bíblica AT", nota: "7.0" },
//          { modulo: "Módulo II", disciplina: "Teologia Prática", nota: "8.2" }
//       ]
//     }
//   };
  
//   function login() {
//     const user = document.getElementById("username").value.toLowerCase();
//     const pass = document.getElementById("password").value;
//     const error = document.getElementById("login-error");
  
//     if (alunos[user] && alunos[user].senha === senha) {
//         mostrarNotas(alunos[user].notas);
//       } else {
//         document.getElementById("resultado").innerHTML = "<p style='color:red'>Usuário ou senha incorretos.</p>";
      
      
//     // if (alunos[user] && alunos[user].senha === pass) {
//     //   document.getElementById("login").style.display = "none";
//     //   document.getElementById("notas").style.display = "block";
  
//     //   const tabela = document.getElementById("tabela-notas");
//     //   tabela.innerHTML = ""; // limpar antes
//     //   alunos[user].notas.forEach(nota => {
//     //     tabela.innerHTML += `
//     //       <tr>
//     //         <td>${nota.modulo}</td>
//     //         <td>${nota.disciplina}</td>
//     //         <td>${nota.nota}</td>
//     //       </tr>`;
//      };
//     // }  else {
//     //   error.style.display = "block";
//     // }
//   }
  
//   function logout() {
//     document.getElementById("login").style.display = "block";
//     document.getElementById("notas").style.display = "none";
//     document.getElementById("username").value = "";
//     document.getElementById("password").value = "";
//     document.getElementById("login-error").style.display = "none";
//   }
  
