const formulario = document.getElementById("formulario-nota");
const inputTitulo = document.getElementById("titulo");
const inputContenido = document.getElementById("contenido");
const btnGuardar = document.getElementById("btn-guardar");
const mensaje = document.getElementById("mensaje");
const contenedorNotas = document.getElementById("contenedor-notas");

function validarInputs() {
  const tituloValido = inputTitulo.value.trim() !== "";
  const contenidoValido = inputContenido.value.trim() !== "";
  btnGuardar.disabled = !(tituloValido && contenidoValido);
}

inputTitulo.addEventListener("input", validarInputs);
inputContenido.addEventListener("input", validarInputs);

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
  setTimeout(() => {
    mensaje.textContent = "";
  }, 3000);
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (inputTitulo.value.trim() === "" || inputContenido.value.trim() === "") {
    mostrarMensaje("No se pueden agregar notas vacías.", "error");
    return;
  }

  const textoVacio = contenedorNotas.querySelector(".texto-vacio");
  if (textoVacio) textoVacio.remove();

  const tarjetaNota = document.createElement("article");
  tarjetaNota.className = "item-nota";

  const tituloHtml = document.createElement("h3");
  tituloHtml.textContent = inputTitulo.value;

  const contenidoHtml = document.createElement("p");
  contenidoHtml.textContent = inputContenido.value;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar nota";
  btnEliminar.className = "boton-eliminar";

  btnEliminar.addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
      tarjetaNota.remove();
      mostrarMensaje("Nota eliminada con éxito.", "exito");

      if (contenedorNotas.children.length === 0) {
        contenedorNotas.innerHTML = '<p class="texto-vacio">No hay notas guardadas todavía.</p>';
      }
    }
  });

  tarjetaNota.appendChild(tituloHtml);
  tarjetaNota.appendChild(contenidoHtml);
  tarjetaNota.appendChild(btnEliminar);

  contenedorNotas.prepend(tarjetaNota);

  formulario.reset();
  btnGuardar.disabled = true;
  mostrarMensaje("¡Nota agregada correctamente!", "exito");
});