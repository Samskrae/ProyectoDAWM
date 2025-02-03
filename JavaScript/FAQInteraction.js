const preguntas = document.querySelectorAll(".pregunta_encabezado");

preguntas.forEach((pregunta) => {
  pregunta.addEventListener("click", () => {
    const respuesta = pregunta.nextElementSibling;

    removerClaseActivo();

    if (!respuesta.classList.contains("activo")) {
      respuesta.classList.add("activo");
    }
  });
});

function removerClaseActivo() {
  preguntas.forEach((pregunta) => {
    const respuesta = pregunta.nextElementSibling;
    respuesta.classList.remove("activo");
  });
}
