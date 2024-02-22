


document.getElementById("total").innerText = "Total: $0.00";


function agregar() {
   
    var articulo = document.getElementById("articulo").value;
    var monto = parseFloat(document.getElementById("monto").value);


    var ticketElement = document.createElement("div");
    ticketElement.innerHTML = "Articulo:" + articulo + "...........Monto: $" + monto.toFixed(2);


    document.getElementById("ticket").appendChild(ticketElement);

    var totalElement = document.getElementById("total");
    var total = parseFloat(totalElement.innerText.split("$")[1]) || 0;
    total += monto;
    totalElement.innerText = "Total: $" + total.toFixed(2);

    document.getElementById("articulo").value = "";
    document.getElementById("monto").value = "";
}
