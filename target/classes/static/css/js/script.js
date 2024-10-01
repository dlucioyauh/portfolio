document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const menuItems = document.querySelectorAll('nav ul li a');

    const options = {
        threshold: 0.1 // Seção deve estar 10% visível para ativar a animação
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para não animar novamente
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animação para itens do menu
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(link => link.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Funcionalidade do botão do menu
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show'); // Alterna a classe 'show' para mostrar/esconder o menu
    });

    // Rolagem suave
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exibir botão "Voltar ao topo"
    const goTopButton = document.getElementById("go-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            goTopButton.style.display = "block";
        } else {
            goTopButton.style.display = "none";
        }
    });

    goTopButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
