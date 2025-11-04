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

    // Lógica para el Modal de Imágenes
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const clickableImages = document.querySelectorAll('.clickable-img');
    const closeModal = document.querySelector(".close-modal");

    clickableImages.forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    // Función para cerrar el modal
    function closeImageModal() {
        modal.style.display = "none";
    }

    // Cerrar al hacer clic en la 'X'
    closeModal.onclick = closeImageModal;
    // Cerrar al hacer clic fuera de la imagen
    modal.onclick = closeImageModal;
});