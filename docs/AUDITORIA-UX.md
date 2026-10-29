# Auditoría de UX/UI y Rediseño - Aplicación de Notas

## 1. Auditoría con Heurísticas de Nielsen

| Heurística | Problema de la pantalla original | Solución aplicada |
| :--- | :--- | :--- |
| **Visibilidad del estado** | Al agregar o eliminar una nota no aparecía ningún mensaje explicativo. | Se implementó un contenedor con `role="status"` que confirma acciones ("Nota agregada con éxito", "Nota eliminada"). |
| **Coincidencia con el mundo real** | El botón de eliminar decía "X" sin etiquetas claras. | Se cambió a un botón con la palabra clara "Eliminar nota". |
| **Control y libertad** | Al hacer clic en eliminar, la nota se borraba inmediatamente sin avisar. | Se añadió un cuadro de confirmación antes de eliminar para permitir cancelar la acción. |
| **Prevención de errores** | Se podían guardar notas con el título o contenido completamente vacíos. | Se deshabilita el botón de agregar si los campos están vacíos y se usa el atributo `required`. |
| **Reconocer, no recordar** | Los campos solo usaban `placeholder` y este desaparecía al escribir. | Se colocaron etiquetas `<label>` permanentes arriba de cada campo. |

---

## 2. Justificación por Leyes de Usabilidad

* **Ley de Fitts:** Los botones principales tienen una altura mínima de 44px (`min-height: 44px`) y un padding de toque amplio, separando intencionadamente la acción de guardar de la de borrar para evitar clics accidentales.
* **Ley de Hick:** Se agruparon y ordenaron las acciones en un flujo vertical claro (entrada de texto -> botón de guardar -> lista de notas), reduciendo el tiempo de decisión del usuario.
* **Ley de Miller:** Se dividió la pantalla en dos secciones principales bien distinguidas (`Nueva Nota` y `Notas Guardadas`), permitiendo procesar la información en bloques de memoria cortos.

---

## 3. Accesibilidad y Estándares Visuales

* **Variables CSS:** Colores centralizados en la pseudo-clase `:root`.
* **Encabezado único:** Se utiliza únicamente un nivel de título `<h1>` en la interfaz.
* **Contraste:** Texto oscuro `#1f2933` sobre fondo claro con contraste superior a 4.5:1.
* **Foco visible:** Anillo de enfoque de 3px naranja bien definido para navegación por teclado (`:focus-visible`).
* **Etiquetado:** Todos los campos cuentan con su correspondiente etiqueta `<label for="...">`.
## 4. Capturas de Lighthouse

### Puntuación de Lighthouse (Antes del Rediseño)
![Lighthouse Antes](/app-notas/img/antes.png)

### Puntuación de Lighthouse (Después del Rediseño)
![Lighthouse Después](/app-notas/img/despues.png)
