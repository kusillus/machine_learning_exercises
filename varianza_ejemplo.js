var arr_data = [0, 2, 4, 5, 8, 10, 10, 15, 38]

function main_calc(data) {
	
	var sumatoria = calcSumatoria(data)
	var media = sumatoria/data.length
	var varianza = calcVarianza(media, arr_data)
	var desviacion_standar = Math.sqrt(varianza)
	// console.log(sumatoria)
	console.log('Varianza: ' + varianza)
	console.log('Desviacion: ' + desviacion_standar)
}

function calcVarianza(med, arr) {
	var new_arr = []
	arr.map(function (x) {
		var num_med = x - med
		var num_pow = Math.pow(num_med, 2)
		new_arr.push(num_pow)
	})
	var sum = 0
	new_arr.map(function(i) {
		sum = sum + i
	})
	return sum/arr.length
}

function calcSumatoria(data) {
	var sum = 0
	data.map(function (x) {
		sum = sum + x
	})
	return sum
}

main_calc(arr_data)

