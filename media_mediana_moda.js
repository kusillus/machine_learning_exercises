var medidas = [1,5,8,5,8,1,5,8,5,9,1,5,5,9,5,9,8,3,5,5,8,4,8,8,1,8,2,3,8,2,2,2,2,2,2,2,2]
var sum = 0
var moda = 0

function calcular_media (values, sum, mod) {
	values.map(function (x) {
		sum = sum + x
	})
	console.log('Cantidad de valores: ' + values.length)
	console.log('Sumatoria es: ' + sum)
	console.log('--------------------');
	console.log('Media: ' + sum/values.length)
	var max_match = 0
	var moda_value = []
	// calculamos el valor maximo de repeticiones de un numero.
	for (var i = values.length - 1; i >= 0; i--) {
		var match = repetition(values, values[i])		
		if(match > max_match) {
			max_match = match
		}
	}
	// Calculamos si hay otro numero con el mismo numero de repeticiones.
	for (var i = values.length - 1; i >= 0; i--) {
		var match = repetition(values, values[i])
		if(match == max_match) {
			setNewValues(moda_value, values[i])
		}
	}
	resultProccess(max_match, moda_value)	
}

function repetition(med, val) {
	var rep = 0
	for (var e = med.length - 1; e >= 0; e--) {
		if(val == med[e]){
			rep = rep + 1;
		}
	}
	return rep
}
function setNewValues(arr_moda, val) {
	if(arr_moda.length != 0) {
		var found = arr_moda.find(function(element) {
					  	return element == val;
					});
		if(found == undefined) {
			arr_moda.push(val)	
		}
	} else {
		arr_moda.push(val)	
	}
}
function resultProccess(max, arr_moda) {
	if(max < 2) {
		console.log('------------------')
		console.log('No hay moda.')	
	} else {
		console.log('------------------')
		console.log('La moda es: ' + arr_moda)
		console.log('Nro de repeticiones: ' + max)
	}	
}


calcular_media(medidas, sum, moda)