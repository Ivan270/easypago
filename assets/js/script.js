let form = document.getElementById('formCuotas');

class Cuota {
	constructor(monto, interes, cuotas) {
		this.monto = monto;
		this.interes = interes;
		this.cuotas = cuotas;
		this.calcularTotal = () => this.monto * (this.interes / 100 + 1);
		this.valorCuota = () => this.calcularTotal() / this.cuotas;
	}
}

formCuotas.addEventListener('submit', (event) => {
	event.preventDefault();
	let inputUsuario = new Cuota(
		cuantoPagar.value,
		cuantoInteres.value,
		cuantasCuotas.value
	);
	let valorCuotaFormateada = formatearMoneda(
		Math.ceil(inputUsuario.valorCuota())
	);
	insertarDatos(valorCuotaFormateada, inputUsuario.cuotas);
});

const insertarDatos = (montoCuotas, cantidadCuotas) => {
	resultadoAPagar.innerHTML = `¡No te preocupes! Puedes pagarlo en <span class="font-bold text-6xl">${cantidadCuotas}</span> cuotas de <span class="font-bold text-6xl">${montoCuotas}</span>`;
};

const formatearMoneda = (num) =>
	num.toLocaleString('es-CL', { style: 'currency', currency: 'clp' });
