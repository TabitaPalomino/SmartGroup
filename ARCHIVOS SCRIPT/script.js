//Eventos pagina principal
var Intervalo=10000; 
var Imagenes=new Array; 
var IDImagen=0; 
Imagenes[1]="../IMAGENES/eventosg0.jpg";
Imagenes[2]="../IMAGENES/eventosg1.png"; 
Imagenes[3]="../IMAGENES/eventosg2.png";

function CambiarImagen(){ 
	setTimeout("CambiarImagen()",Intervalo); 
	IDImagen++; 
	document.images["MiImagen"].src=Imagenes[IDImagen]; 

	if(IDImagen==Imagenes.length-1){ 
		IDImagen=0; 
	} 
}

//Leer mas
function hideshow (postid) {
var post = document.getElementById(postid);
if (post.className=="show"){
post.className="hide";
} else {
post.className="show";
}
}


