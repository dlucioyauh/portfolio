document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const menuItems = document.querySelectorAll('nav ul li');

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
    const menuObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    menuItems.forEach(item => {
        menuObserver.observe(item);
    });

    document.getElementById('myButton').addEventListener('click', () => {
        alert('Você clicou no botão!');
    });
});
