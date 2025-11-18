/**
 * Realiza cálculos matemáticos: raíz cuadrada, valor absoluto y potencia.
 * @param {number} num1 El primer número para la raíz cuadrada.
 * @param {number} num2 El segundo número para el valor absoluto.
 * @returns {object} Un objeto con los resultados de las operaciones.
 */
function calcularOperacionesMatematicas(num1, num2) {
  // 1. Raíz cuadrada de num1 (similar a Math.sqrt(25) = 5)
  let raiz_cuadrada = Math.sqrt(num1);

  // 2. Valor absoluto de num2 (similar a Math.abs(-10) = 10)
  let valor_absoluto = Math.abs(num2);

  // 3. Potencia (similar a Math.pow(2, 3) = 8)
  let potencia = Math.pow(2, 3);
  
  // Devuelve un objeto con todas las variables calculadas
  return {
    raiz_cuadrada: raiz_cuadrada,
    valor_absoluto: valor_absoluto,
    potencia: potencia
  };
}

// --- Ejemplo de Uso ---
let num1 = 25;
let num2 = -10;

let resultados = calcularOperacionesMatematicas(num1, num2);

console.log("Raíz Cuadrada:", resultados.raiz_cuadrada); // Output: 5
console.log("Valor Absoluto:", resultados.valor_absoluto); // Output: 10
console.log("Potencia (2^3):", resultados.potencia); // Output: 8