const btn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu-lateral');

    btn.addEventListener('click', () => {
        menu.classList.toggle('ativo');

        // Impede ou permite o scroll no body conforme o menu está ativo
    //     if (menu.classList.contains('ativo')) {
    //         document.body.style.overflow = 'hidden'; // trava o scroll
    //     } else {
    //         document.body.style.overflow = "auto"; // libera o scroll
    //     }
     });

     