function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}


var opciones = ["piedra", "papel", "tijera","lagarto", "spock"];

var opcionMaquina = aleatorio(0,4);

function empieza (opcionUsuario) {

	var opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

	// Se valida que el usuario no capture caracteres
	if( !isNaN(parseInt(opcionUsuario)  ) ){
		// Se toma el valor capturado por el usuario, para compararlo contra el valor que regresa la maquina
		if(parseInt(opcionUsuario) <= 4){
			alert("elegiste: " + opciones[opcionUsuario]);
			alert("Javascript eligió: " + opciones[opcionMaquina]);

			switch( opciones[opcionUsuario] ){
				case "tijera":{
					switch( opciones[opcionMaquina] ){
						case "papel":{
							alert("Ganaste...");
						}
						break;
						case "piedra":{
							alert("Pierdes...");
						}
						break;
						case "lagarto":{
							alert("Ganaste...");
						}
						break;
						case "spock":{
							alert("Pierdes...");
						}
						break;
						default:{
							alert("Empate...");
						}
						break;
					}
				}break;
				case "papel":{
					switch( opciones[opcionMaquina] ){
						case "tijera":{
							alert("Pierdes...");
						}
						break;
						case "piedra":{
							alert("Ganaste...");
						}
						break;
						case "lagarto":{
							alert("Pierdes...");
						}
						break;
						case "spock":{
							alert("Ganaste...");
						}
						break;
						default:{
							alert("Empate...");
						}
						break;
					}
				}break;
				case "piedra":{
					switch( opciones[opcionMaquina] ){
						case "papel":{
							alert("Pierdes...");
						}
						break;
						case "tijera":{
							alert("Ganaste...");
						}
						break;
						case "lagarto":{
							alert("Ganaste...");
						}
						break;
						case "spock":{
							alert("Pierdes...");
						}
						break;
						default:{
							alert("Empate...");
						}
						break;
					}
				}break;
				case "lagarto":{
					switch( opciones[opcionMaquina] ){
						case "papel":{
							alert("Ganaste...");
						}
						break;
						case "tijera":{
							alert("Pierdes...");
						}
						break;
						case "piedra":{
							alert("Ganaste...");
						}
						break;
						case "spock":{
							alert("Ganaste...");
						}
						break;
						default:{
							alert("Empate...");
						}
						break;
					}
				}break;
				default:{
					switch( opciones[opcionMaquina] ){
						case "papel":{
							alert("Ganaste...");
						}
						break;
						case "tijera":{
							alert("Ganaste...");
						}
						break;
						case "piedra":{
							alert("Ganaste...");
						}
						break;
						case "lagarto":{
							alert("Pierdes...");
						}
						break;
						default:{
							alert("Empate...");
						}
						break;
					}
				}break;
			}
		}
		else{
			// Si se elige una opción no valida, se manda msj
			alert("Opción no valida...Verifique!!!");
		}
	}
	else{
		alert("¿Qué es eso?\n\nSolo se permiten:\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4")
	}

}
