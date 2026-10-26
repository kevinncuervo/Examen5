
document.addEventListener("DOMContentLoaded", () => {
  // Elementos de la pagina
  const hero = document.querySelector(".hero");
  const subtitle = document.querySelector(".hero__subtitle");
  const title = document.querySelector(".hero__title");
  const description = document.querySelector(".hero__description");

  // Botones de navegacion
  const previousButton = document.getElementById("previousSlide");
  const nextButton = document.getElementById("nextSlide");

  // Contenido de las diapositivas
  const slides = [
    {
      subtitle: "BEST ONLINE COURSES",
      title: "Get Educated Online From Your Home",
      description: "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr."
    },
    {
      subtitle: "ONLINE LEARNING",
      title: "Learn New Skills From Anywhere",
      description: "Discover flexible online courses and continue learning at your own pace, wherever you are."
    }
  ];

  // Diapositiva actual
  let currentSlide = 0;

  // Funcion para mostrar diapositivas
  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    const slide = slides[currentSlide];

    // Actualizar contenido
    subtitle.textContent = slide.subtitle;
    title.textContent = slide.title;
    description.textContent = slide.description;

    // Cambiar posicion de la imagen
    hero.classList.toggle("hero--alternate", currentSlide === 1);
  }

  // Verificar elementos del carrusel
  if (
    hero &&
    subtitle &&
    title &&
    description &&
    previousButton &&
    nextButton
  ) {
    // Mostrar primera diapositiva
    showSlide(0);

    // Boton anterior
    previousButton.addEventListener("click", () => {
      showSlide(currentSlide - 1);
    });

    // Boton siguiente
    nextButton.addEventListener("click", () => {
      showSlide(currentSlide + 1);
    
  }

  // Boton para volver al inicio
  const backToTopButton = document.getElementById("backToTop");

  // Verificar que el boton exista
  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
