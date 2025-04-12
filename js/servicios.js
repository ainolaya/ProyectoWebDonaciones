let slideIndex = 0;
const galeria = document.querySelector('.galeria');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const btnIzq = document.querySelector('.flecha.izquierda');
const btnDer = document.querySelector('.flecha.derecha');

// Mover galería
function showSlide(index) {
    const offset = index * -100;
    galeria.style.transform = `translateX(${offset}%)`;
}
btnIzq.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
});
btnDer.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
});

// Menú desplegable
const botonesReserva = document.querySelectorAll('.btn-fechas');
botonesReserva.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const actual = e.target.closest('.reserva');
        document.querySelectorAll('.reserva').forEach(res => {
            if (res !== actual) res.classList.remove('active');
        });
        actual.classList.toggle('active');
    });
});

// Cerrar menú si haces clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.reserva')) {
        document.querySelectorAll('.reserva').forEach(res => res.classList.remove('active'));
    }
});
