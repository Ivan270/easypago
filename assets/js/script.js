let form = document.getElementById('formCuotas');

let aPagar = '';
let interes = '';
let cuotasAPagar = '';

formCuotas.addEventListener('submit', (event) => {
	event.preventDefault();
	aPagar = cuantoPagar.value;
	procesarDatos(cuantoInteres.value, cuantasCuotas.value);
	formCuotas.reset();
});

const procesarDatos = (interes, cuotas) => {
	interes = calcularInteres(interes);
	cuotasAPagar = cuotas;
	totalAPagar = calcularTotalAPagar(aPagar, interes);
	let valorCuota = calcularCuotas(totalAPagar, cuotasAPagar);
	// Para que precio se aproxime al numero entero superior
	insertarDatos(formatearMoneda(Math.ceil(valorCuota)), cuotasAPagar);
};

const insertarDatos = (montoCuotas, cantidadCuotas) => {
	resultadoAPagar.innerHTML = `¡No te preocupes! Puedes pagarlo en <span class="font-bold text-6xl">${cantidadCuotas}</span> cuotas de <span class="font-bold text-6xl">${montoCuotas}</span>`;
};
const calcularInteres = (porcentaje) => porcentaje / 100 + 1;
const calcularTotalAPagar = (monto, interesFormateado) => {
	return monto * interesFormateado;
};
const calcularCuotas = (total, cuotas) => {
	return total / cuotas;
};
const formatearMoneda = (num) =>
	num.toLocaleString('es-CL', { style: 'currency', currency: 'clp' });
