"use strict";
var forma = document.getElementById("forma"),
    txtFecha = forma["fecha"],
    salidaFecha = document.getElementById("salidaFecha"),
    salidaFecha1 = document.getElementById("salidaFecha1"),
     campos = ["nombre", "clave","telefono"],
    salidas = ["salidaNombre", "salidaClave","salidaTelefono"];
   
    function procesa(){
  var fechaValueAsDate = txtFecha.valueAsDate,
      fecha = new Date(txtFecha.value),
      miFecha;
      
      salidaFecha.textContent = txtFecha.type + "|" + txtFecha.value + "|"
      + fecha.toGMTString()+(fechaValueAsDate ? "|valueAsDate: " + 
      fechaValueAsDate.toGMTString() : "");
      
    miFecha=(fecha.getDate() + 1 )+"/"+(fecha.getMonth()+1)+"/"+ fecha.getFullYear();
   salidaFecha1.textContent=miFecha;
   
    for (var i = 0, longitud = campos.length;  i<longitud; i++) {
      var campo = forma[campos[i]];
      var salida = document.getElementById(salidas[i]);
      salida.value = campo.value;
    }
    }
function Limpiar(){   
salidaFecha.textContent=("");
salidaFecha1.textContent=("");
}
