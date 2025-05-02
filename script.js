const btn = document.getElementById('menu-btn');
    const menu = document.querySelector('.menu-lateral');

    btn.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });