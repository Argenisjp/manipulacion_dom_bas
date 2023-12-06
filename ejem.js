// Capturamos el botón "Enter" por su ID
let enter = document.getElementById('btn_calcular_op');

// Añadimos un evento de clic al botón "Enter"
enter.addEventListener('click', () => {
  // Capturamos los elementos input y botones de operación
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let resultadoDisplay = document.getElementById('resultado');
  
  // Capturamos el botón de operación seleccionado
  let operacionSeleccionada = document.querySelector('.btn-op:checked');

  // Verificamos si se seleccionó una operación
  if (operacionSeleccionada) {
    // Obtenemos el valor del botón de operación seleccionado (es mejor usar .value)
    let operador = operacionSeleccionada.value;
    let resultado;

    // Realizamos la operación correspondiente
    switch (operador) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num1 / num2;
        break;
      default:
        console.error('Operación no reconocida');
        return; // Salimos de la función si la operación no es reconocida
    }
    
    // Mostramos el resultado en el elemento span
    resultadoDisplay.textContent = `EL RESULTADO ES: ${resultado}`;
  } else {
    console.error('Selecciona una operación');
  }
});
