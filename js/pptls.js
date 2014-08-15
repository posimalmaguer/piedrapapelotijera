function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;

var papel = 1;

var tijera = 2;

var lagarto = 3;

var spock = 4;

var opciones = ["Piedra", "papel", "tijera","lagarto", "spock"];

var opcionUsuario;

var opcionMaquina = aleatorio(0,4);

function empieza (opcionUsuario) {

	opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

	// Se valida que el usuario no capture caracteres
	if( !isNaN(parseInt(opcionUsuario)  ) ){
		// Se toma el valor capturado por el usuario, para compararlo contra el valor que regresa la maquina
		if(parseInt(opcionUsuario) <= 4){
			alert("elegiste: " + opciones[opcionUsuario]);
			alert("Javascript eligió: " + opciones[opcionMaquina]);

			if ( opcionUsuario > opcionMaquina ){
				alert("Ganaste");
			}
			else if( opcionUsuario < opcionMaquina){
				alert("Perdiste");
			}
			else{
				alert("Empate");
			}
		}
		else{
			// Si se elige una opción no valida, se
			alert("Opción no valida...Verifique!!!");
		}
	}
	else{
		alert("¿Qué es eso?\n\nSolo se permiten:\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4")
	}

}
