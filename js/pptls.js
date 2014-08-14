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

alert("elegiste: " + opciones[opcionUsuario]);
alert("Javascript eligió: " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{

	if(opcionMaquina == papel)
	{
		alert("Perdiste!")
	}
	if(opcionMaquina == tijera)
	{
		alert("ganaste!");
	}
	if(opcionMaquina == piedra)

		alert("Empate!");
	
	if(opcionMaquina == lagarto)

		alert("Ganaste!");
	
	if(opcionMaquina == spock)

		alert("Perdiste");

} 
else if(opcionUsuario == papel)
{
	
	if(opcionMaquina == papel)
	{
		alert("Empate!")
	}
	if(opcionMaquina == tijera)
	{
		alert("Perdiste!");
	}
	if(opcionMaquina == piedra)

		alert("Ganaste!");

	if(opcionMaquina == lagarto)

		alert("Perdiste!");

	if(opcionMaquina == spock)

		alert("Ganaste!");
}
else if(opcionUsuario == tijera)
{

	if(opcionMaquina == papel)
	{
		alert("Ganaste!")
	}
	if(opcionMaquina == tijera)
	{
		alert("Es un empate!");
	}
	if(opcionMaquina == piedra)

		alert("Perdiste!");

	if(opcionMaquina == lagarto)

		alert("Ganaste!");

	if(opcionMaquina == spock)

		alert("Perdiste!");
}
else if(opcionUsuario == lagarto)
{

	if(opcionMaquina == papel)
	{
		alert("Ganaste!")
	}
	if(opcionMaquina == tijera)
	{
		alert("Perdiste!");
	}
	if(opcionMaquina == piedra)

		alert("Perdiste!");

	if(opcionMaquina == lagarto)

		alert("Empate!");

	if(opcionMaquina == spock)

		alert("Ganaste!");
}
else if(opcionUsuario == spock)
{

	if(opcionMaquina == papel)
	{
		alert("Perdiste!")
	}
	if(opcionMaquina == tijera)
	{
		alert("Ganaste!");
	}
	if(opcionMaquina == piedra)

		alert("Ganaste!");

	if(opcionMaquina == lagarto)

		alert("Perdiste!");

	if(opcionMaquina == spock)

		alert("Empate!");
}
else if (opcionUsuario >= 5)
{

	alert("WTF????");
}
}