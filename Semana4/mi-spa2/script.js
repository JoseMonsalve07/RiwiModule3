const enlaces = document.querySelectorAll('nav a');
const contenedor = document.getElementById('contenido');

function cargarVista(nombre) {
    fetch(`vistas/${nombre}.html`)
    .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar la vista');
        return res.text();
    })
    .then(html => {
        contenedor.innerHTML = html;
    })
    .catch(err => {
        contenedor.innerHTML = '<p>Error al cargar la vista.</p>';
    });
}

enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
        e.preventDefault();
        const vista = e.target.dataset.vista;
        cargarVista(vista);
    });
});

// Vista inicial
cargarVista('inicio');