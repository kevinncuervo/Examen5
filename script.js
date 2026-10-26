
document.addEventListener("DOMContentLoaded", () => {
  // Elementos de la pagina
  const hero = document.querySelector(".hero");
  const subtitle = document.querySelector(".hero__subtitle");
  const title = document.querySelector(".hero__title");
  const description = document.querySelector(".hero__description");

  // Botones de navegacion del carrusel
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

  // Mostrar la diapositiva seleccionada
  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    const slide = slides[currentSlide];

    subtitle.textContent = slide.subtitle;
    title.textContent = slide.title;
    description.textContent = slide.description;

    // Cambiar la posicion de la imagen
    hero.classList.toggle("hero--alternate", currentSlide === 1);
  }

  // Verificar los elementos del carrusel
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
    });
  }

  // Boton para volver al inicio
  const backToTopButton = document.getElementById("backToTop");

  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Formulario de demostracion
  const registrationForm = document.getElementById("registrationForm");
  const registrationMessage = document.getElementById("registrationMessage");

  if (registrationForm && registrationMessage) {
    registrationForm.addEventListener("submit", (event) => {
      event.preventDefault();

      registrationMessage.textContent =
        "Demo completed successfully. No data was saved or sent.";

      registrationForm.reset();
    });
  }
});
