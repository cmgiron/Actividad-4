function encontrarSueldoMaximo() {
    const n = parseInt(prompt("Ingrese la cantidad de sueldos a introducir (N):"));
  
    if (isNaN(n) || n <= 0) {
      console.log("Por favor, ingrese un número válido mayor que cero.");
      return;
    }
  
    let sueldos = [];
    for (let i = 0; i < n; i++) {
      const sueldo = parseFloat(prompt(`Ingrese el sueldo número ${i + 1}:`));
      if (!isNaN(sueldo)) {
        sueldos.push(sueldo);
      } else {
        console.log("Se ingresó un valor inválido para el sueldo. Se omitirá.");
      }
    }
  
    if (sueldos.length > 0) {
      const sueldoMaximo = Math.max(...sueldos);
      console.log(`\nEl sueldo máximo ingresado es: ${sueldoMaximo}`);
    } else {
      console.log("\nNo se ingresaron sueldos válidos.");
    }
  
    console.log("\n--- Contador de 5 dígitos (reemplazando 3 con E) ---");
    for (let i = 0; i <= 99999; i++) {
      const contadorStr = String(i).padStart(5, '0');
      const contadorFormateado = contadorStr
        .split('')
        .map(digito => (digito === '3' ? 'E' : digito))
        .join('-');
      console.log(contadorFormateado);
    }
  }
  
  encontrarSueldoMaximo();