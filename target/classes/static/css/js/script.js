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
});
