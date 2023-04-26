let form = document.getElementById('formCuotas');

let aPagar = '';
let interes = '';
let cuotasAPagar = '';

formCuotas.addEventListener('submit', (event) => {
	event.preventDefault();
	aPagar = cuantoPagar.value;
	// calcularInteres();
	procesarDatos(cuantoInteres.value, cuantasCuotas.value);
});

let procesarDatos = (interes, cuotas) => {
	interes = calcularInteres(interes);
	cuotasAPagar = cuotas;
	calcularTotalAPagar();
	totalAPagar = calcularTotalAPagar(aPagar, interes);
	let valorCuota = calcularCuotas(totalAPagar, cuotasAPagar);
	// Para que precio se aproxime al numero entero superior
	insertarDatos(formatearMoneda(Math.ceil(valorCuota)), cuotasAPagar);
};

let insertarDatos = (montoCuotas, cantidadCuotas) => {
	resultadoAPagar.innerText = `¡No te preocupes! Puedes pagarlo en ${cantidadCuotas} cuotas de ${montoCuotas}`;
};
let calcularInteres = (porcentaje) => porcentaje / 100 + 1;
let calcularTotalAPagar = (monto, interesFormateado) => {
	return monto * interesFormateado;
};
let calcularCuotas = (total, cuotas) => {
	return total / cuotas;
};
let formatearMoneda = (num) =>
	num.toLocaleString('es-CL', { style: 'currency', currency: 'clp' });
