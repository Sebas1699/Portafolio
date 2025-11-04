document.addEventListener('DOMContentLoaded', () => {
    const filtroContainer = document.querySelector('.filtros-container');
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const proyectoCards = document.querySelectorAll('.proyecto-card');

    if (filtroContainer) {
        filtroContainer.addEventListener('click', (e) => {
            // Asegurarse de que se hizo clic en un botón
            if (!e.target.classList.contains('filtro-btn')) return;

            // Quitar la clase 'active' de todos los botones y añadirla al que se hizo clic
            filtroBtns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');

            proyectoCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Mostrar u ocultar tarjetas según el filtro
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});