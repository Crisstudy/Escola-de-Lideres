const btn = document.getElementById('menu-btn')
const menu = document.querySelector('.menu-lateral')

btn.addEventListener( 'click', () => {
    menu.classList.toggle('ativo');
});


function mostrarProva(link) {
  const iframe = document.getElementById("formFrame");
  iframe.src = link;
  iframe.style.display = "block";
}