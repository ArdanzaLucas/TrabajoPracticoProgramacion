// ===== PARTE 1: PATENTE =====
function limpiarPatente(texto) {
  if (texto === null) {
    return "";
  }
  return texto.trim().toUpperCase();
}

function validarPatente(patente) {
  return patente.length >= 6 && patente.length <= 7;
}

let patente = limpiarPatente(prompt("Ingresá la patente:"));
while (!validarPatente(patente)) {
  patente = limpiarPatente(prompt("Patente inválida. Ingresala de nuevo:"));
}

// ===== PARTE 2: VELOCIDAD =====
function esVelocidadValida(texto) {
  if (texto === null || texto.trim() === "") {
    return false;
  }
  const velocidad = Number(texto);
  return !isNaN(velocidad) && velocidad >= 0;
}

function pedirVelocidad() {
  let texto = prompt("Ingresá la velocidad (km/h):");
  while (!esVelocidadValida(texto)) {
    texto = prompt("Velocidad inválida. Ingresala de nuevo (km/h):");
  }
  return Number(texto);
}

const velocidad = pedirVelocidad();

// ===== PARTE 3: MULTA Y REPORTE =====
const LIMITE = 110;
const MARGEN_LEVE = 20;
const MULTA_LEVE = 5000;
const MULTA_GRAVE = 10000;

function calcularMulta(velocidad) {
  if (velocidad <= LIMITE) {
    return 0;
  }
  if (velocidad <= LIMITE + MARGEN_LEVE) {
    return MULTA_LEVE;
  }
  return MULTA_GRAVE;
}

const multa = calcularMulta(velocidad);

console.log(`Reporte: Vehículo ${patente} iba a ${velocidad} km/h. Multa: $${multa}`);