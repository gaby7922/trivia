alert("¡Bienvenida!");
var nombre = prompt("¿Como te llamas?");
document.getElementById("nombre_persona").innerHTML=nombre;
alert("Gusto en escribirte: " + nombre);
var play = prompt("¿Quieres jugar?");

//* colocar la variable en minuscula *//
play = play.toLowerCase();
if (play == "si") {
	var age = prompt("¿A partir de que edad puedes particpar en el Bootcamp de Laboratoria?");
<<<<<<< HEAD
//* primera pregunta *//
	if (age === "18") {
		alert("!Correcto¡");
		pregunta_1 = true;
		document.getElementById("respuesta_1").innerHTML='Correcto';
	} else {
		alert("¡Respuesta incorrecta, Sigue intentando!");
		pregunta_1 = false;
		document.getElementById("respuesta_1").innerHTML='Incorrecto';
	}
//* segunda pregunta *//
=======
	if (age === "18") {
		alert("!Correcto¡");
		pregunta_1 = true;
		document.getElementById("respuesta_1").innerHTML='Bien';
	} else {
		alert("!Respuesta incorrecta, Sigue intentando¡");
		pregunta_1 = false;
		document.getElementById("respuesta_1").innerHTML='Incorrecto';
	}
>>>>>>> bf370fe85704558550f8a96770899d086fc49dd5

	var segunda_pregunta = prompt("¿El Bootcamp de laboratoria Es solo para mujeres?");
	segunda_pregunta = segunda_pregunta.toLowerCase();
	if (segunda_pregunta === "si") {
		alert("¡Muy bien!");
		pregunta_2 = true;
<<<<<<< HEAD
		document.getElementById("respuesta_2").innerHTML='Correcto';
	}else{
		alert("!Respuesta incorrecta, Sigue intentando¡");
		pregunta_2 = false;
		document.getElementById("respuesta_2").innerHTML='Incorrecto';
		}
//* tercera pregunta *// 

	var tercera_pregunta = prompt("<Laboratoria> código que transforma ¿Este es el lema de Laboratoria?");
	tercera_pregunta = tercera_pregunta.toLowerCase();
	if (tercera_pregunta === "si") {
		alert("!Muy bien¡");
		pregunta_3 = true;
		document.getElementById("respuesta_3").innerHTML='Correcto';
=======
		document.getElementById("respuesta_2").innerHTML='Bien';
	}else{
			alert("¡Respuesta incorrecta, Sigue intentando!");
			pregunta_2 = false;
			document.getElementById("respuesta_1").innerHTML='Incorrecto';
		}
	var tercera_pregunta = prompt("<Laboratoria> código que transforma ¿Este es el lema de Laboratoria?");
	tercera_pregunta = tercera_pregunta.toLowerCase();
	if (tercera_pregunta === "si") {
		alert("¡Muy bien!");
		pregunta_3 = true;
		document.getElementById("respuesta_3").innerHTML='Bien';
>>>>>>> bf370fe85704558550f8a96770899d086fc49dd5
			}
	else{
			alert("Respuesta incorrecta, Sigue intentando");
			pregunta_3 = false;
<<<<<<< HEAD
			document.getElementById("respuesta_3").innerHTML='Incorrecto';
=======
			document.getElementById("respuesta_1").innerHTML='Incorrecto';
>>>>>>> bf370fe85704558550f8a96770899d086fc49dd5
	     }
	alert('Veamos Resultados');

		}
<<<<<<< HEAD
//* No desea jugar *//
=======
>>>>>>> bf370fe85704558550f8a96770899d086fc49dd5
else {
	alert("¡Este reto es solo para valientes!");
	}


<<<<<<< HEAD
=======
function Preguntar(pregunta, respuesta) {
    pregunta_usuario = prompt(pregunta);
    if (respuesta == pregunta_usuario){
    	alert("!Correcto¡");
    	return true
    } else{
    	alert("!Respuesta incorrecta, Sigue intentando¡");
    	return false
    }
}
/*
pregunta_1 = Preguntar("¿A partir de que edad puedes particpar en el Bootcamp de Laboratoria?", 18);
pregunta_2 = Preguntar("¿El Bootcamp de laboratoria Es solo para mujeres?", "si");
pregunta_3 = Preguntar("<Laboratoria> código que transforma ¿Este es el lema de Laboratoria?", "si");
 */
>>>>>>> bf370fe85704558550f8a96770899d086fc49dd5
