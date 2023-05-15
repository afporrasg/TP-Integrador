
// Agrega un event listener al botón "Resumen"
document.getElementById("resumen").addEventListener("click", function () {
    event.preventDefault();
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    var value;

    // Asigna el valor correspondiente a la categoría seleccionada
    switch (categoria) {
        case "1":
            value = 0.8;
            break;
        case "2":
            value = 0.5;
            break;
        case "3":
            value = 0.15;
            break;
        default:
            value = 0;
            break;
    }

    // Calcula el total a pagar
    var total = 200 * cantidad * value;

    // Actualiza el texto en el elemento con el id "total"
    document.getElementById("total").innerText = "Total a pagar: $" + total;
});
// Agrega un event listener al botón "Borrar"
document.getElementById("borrar").addEventListener("click", function () {
    event.preventDefault();
    // Borra el valor actual en el campo de cantidad
    document.getElementById("cantidad").value = "";

    // Restablece el texto del total a pagar
    document.getElementById("total").innerText = "Total a pagar: $";
});