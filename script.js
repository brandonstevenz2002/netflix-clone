// Opcional: puedes agregar desplazamiento automático o botones de navegación si lo deseas.
// Este ejemplo mantiene el carrusel manual con scroll horizontal.
document.querySelectorAll('.carousel-container').forEach(container => {
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  });
});
