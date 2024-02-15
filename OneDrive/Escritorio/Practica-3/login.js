document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnLogin").addEventListener("click", function() {
        var usuario = document.getElementById("usuario").value;
        alert("Login correcto");
        document.getElementById("mensaje").innerHTML = "Login correcto " + usuario + "";
    });

    document.getElementById("btnRegistro").addEventListener("click", function() {
        var usuario = document.getElementById("usuario").value;
        alert("Registro con éxito");
        document.getElementById("mensaje").innerHTML = "Registro con éxito " + usuario + "";
    });
});