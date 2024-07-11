document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.getElementById('btn_menu');
    const dropBar = document.querySelector('.container_links_drop');

    btnMenu.addEventListener('click', function() {
        // Alternar entre os ícones
        if (btnMenu.classList.contains('bx-menu-alt-right')) {
            btnMenu.classList.remove('bx-menu-alt-right');
            btnMenu.classList.add('bx-menu'); // Novo Item
            btnMenu.style.color = "#FF6400";
        } else {
            btnMenu.classList.remove('bx-menu');
            btnMenu.classList.add('bx-menu-alt-right'); // Retornar ao ícone original
            btnMenu.style.color = "#000000";
        }
        
        // Alternar a visibilidade do nav com efeito de entrada
        if (dropBar.classList.contains('show')) {
            dropBar.classList.remove('show');
        } else {
            dropBar.classList.add('show');
        }

    });
});