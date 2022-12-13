function display_c() {
    var refresh = 1000;
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
}
function buy() {
    alert("Enhorabuena! Ha comprado el vehículo seleccionado, llegará en breves a la dirección aportada.")
}
