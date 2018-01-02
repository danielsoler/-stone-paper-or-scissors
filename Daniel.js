function play() {
	var piedra = 'piedra'
	var papel = 'papel'
	var tijera = 'tijera'

	jugador1 = prompt('hola jugador1. como es tu nombre?')
	seleccionj1 = prompt(jugador1 + " " + "juega")

	var error_counter = 0
	var error_counterj2 = 0

	var max_error = 5

	while(seleccionj1 != 'piedra' && seleccionj1 != 'papel' && seleccionj1 != 'tijera' && error_counter < max_error) {
	    seleccionj1 = prompt('ingrese una opción pero que sirva');
	    error_counter = error_counter + 1
	}

	if (error_counter >= max_error) {
		alert('Excedio la cantidad de errores permitidos, bestia');
		return;
	}

	jugador2 = prompt("hola jugador2, como es tu nombre?")
	seleccionj2 = prompt(jugador2 + " " + "juega")
	
	while(seleccionj2 != 'piedra' && seleccionj2 != 'papel' && seleccionj2 != 'tijera' && error_counterj2 < max_error) {
	    seleccionj2 = prompt('ingrese una opción pero que sirva');
	}


	if (error_counterj2 >= max_error) {
		alert('Excedio la cantidad de errores permitidos, bestia');
		return;
	}

	if (seleccionj1 == piedra) {

	 	if (seleccionj2 == piedra) {
			console.log ('empate')
		} else if (seleccionj2 == papel) {
			console.log (jugador2 + " " + 'es el ganador')
		} else {
			console.log(jugador1 + " " + "es el ganador")
		}
	} else if (seleccionj1 == papel) {
		if (seleccionj2 == piedra) {
			console.log (jugador1 + " " + "es el ganador")
		} else if (seleccionj2 == papel) {
			console.log ("empate")
		} else {
			console.log (jugador2 + " " + "es el ganador")
		}
	} else {
		if (seleccionj2 == piedra) {
			console.log (jugador2 + " " + "es el ganador")
		} else if (seleccionj2 == papel) {
			console.log (jugador1 + " " + "es el ganador")
		} else {
			console.log ("empate")
		}
	}
}

play();