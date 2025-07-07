const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // evita salto al hacer click

        const ruta = e.target.dataset.route;

        // Oculta todas las vistas
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

        if (ruta === 'inicio') {
            document.getElementById('vista-inicio').classList.add('active');
        } else if (ruta === 'acerca') {
            document.getElementById('vista-acerca').classList.add('active');
        }
    });
});