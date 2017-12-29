var piedra = 'piedra'
var papel = 'papel'
var tijera = 'tijera'

jugador1 = prompt('hola jugador1. como es tu nombre?')
seleccionj1 = prompt(jugador1 + " " + "juega")
{
	if (seleccionj1 != piedra){
		if (seleccionj1 != papel){
			if (seleccionj1 != tijera){
				alert ("esta opcion no es valida")
			}
		}
	}
}
jugador2 = prompt("hola jugador2, como es tu nombre?")
seleccionj2 = prompt(jugador2 + " " + "juega")
{
	if (seleccionj2 != piedra){
		if (seleccionj2 != papel){
			if (seleccionj2 != tijera){
				alert ("esta opcion no es valida")
			}
		}
	}
}
if (seleccionj1 == piedra ||
	seleccionj1 == papel ||
	seleccionj1 == tijera ||
	seleccionj2 == piedra ||
	seleccionj2 == papel||
	seleccionj2 == tijera) {
	if (seleccionj1 == piedra && seleccionj2 == piedra) {
		console.log ('empate')
		} else {
		if (seleccionj1 == piedra && seleccionj2 == papel) {
			console.log (jugador2 + " " + 'es el ganador')
		} else if (seleccionj1 == piedra && seleccionj2 == tijera) {
			console.log(jugador1 + " " + "es el ganador")
		} else if (seleccionj1 == papel && seleccionj2 == piedra) {
			console.log (jugador1 + " " + "es el ganador")
		} else if (seleccionj1 == papel && seleccionj2 == papel) {
			console.log ("empate")
		} else if (seleccionj1 == papel && seleccionj2 == tijera) {
			console.log (jugador2 + " " + "es el ganador")
		} else if (seleccionj1 == tijera && seleccionj2 == piedra) {
			console.log (jugador2 + " " + "es el ganador")
		} else if (seleccionj1 == tijera && seleccionj2 == papel) {
			console.log (jugador1 + " " + "es el ganador")
		} else if (seleccionj1 == tijera && seleccionj2 == tijera) {
			console.log ("empate")
		}
	}	
}
{
	if (seleccionj1 != piedra){
		if (seleccionj1 != papel){
			if (seleccionj1 != tijera){
				console.log (jugador1 + " " + "con lo que jugo no es una opcion valida")
			}
		}
	}
}
jugador2 = prompt("hola jugador2, como es tu nombre?")
seleccionj2 = prompt(jugador2 + " " + "juega")
{
	if (seleccionj2 != piedra){
		if (seleccionj2 != papel){
			if (seleccionj2 != tijera){
				console.log (jugador2 + " " + "con lo que jugo no es una opcion valida")
			}
		}
	}
}