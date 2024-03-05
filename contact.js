document.addEventListener('DOMContentLoaded', function() {
    function submitForm(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const id = document.getElementById('id').value;
        const mensaje = document.getElementById('mensaje').value;

        // Crear una fila de la tabla con los datos del formulario
        const table = document.getElementById('responsesTable');

        // Verificar si el elemento existe antes de intentar insertar una fila
        if (table) {
            const newRow = table.insertRow(-1);

            const cell1 = newRow.insertCell(0);
            cell1.textContent = nombre;

            const cell2 = newRow.insertCell(1);
            cell2.textContent = id;

            const cell3 = newRow.insertCell(2);
            cell3.textContent = mensaje;

            // Limpiar el formulario después de enviar
            document.getElementById('contactForm').reset();
        } else {
            console.error("No se encontró el elemento con ID 'responsesTable'");
        }
    }

    // Asignar la función submitForm al formulario
    document.getElementById('contactForm').addEventListener('submit', submitForm);
});

