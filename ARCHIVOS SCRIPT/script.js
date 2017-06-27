//Eventos pagina principal
var Intervalo=4000; 
var Imagenes=new Array; 
var IDImagen=0; 

Imagenes[1]="../IMAGENES/eventosg1.png"; 
Imagenes[2]="../IMAGENES/eventosg2.png";

function CambiarImagen(){ 
	setTimeout("CambiarImagen()",Intervalo); 
	IDImagen++; 
	document.images["MiImagen"].src=Imagenes[IDImagen]; 

	if(IDImagen==Imagenes.length-1){ 
		IDImagen=0; 
	} 
}

//Mensaje de bienvenida
function OpenVentana(){
	$('.ventana').slideDown("slow");
}