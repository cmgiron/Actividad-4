function gestionarFacturas() {
    const cantidadFacturas = 5;
    let facturacionTotal = 0;
    let litrosArticulo1 = 0;
    let facturasMayor600 = 0;
  
    for (let i = 1; i <= cantidadFacturas; i++) {
      const codigoArticulo = parseInt(prompt(`Ingrese el código del artículo para la factura ${i}:`));
      const cantidadLitros = parseFloat(prompt(`Ingrese la cantidad vendida en litros para la factura ${i}:`));
      const precioLitro = parseFloat(prompt(`Ingrese el precio por litro para la factura ${i}:`));
  
      const valorFactura = cantidadLitros * precioLitro;
      facturacionTotal += valorFactura;
  
      if (codigoArticulo === 1) {
        litrosArticulo1 += cantidadLitros;
      }
  
      if (valorFactura > 600) {
        facturasMayor600++;
      }
    }
  
    console.log("\n--- Resultados ---");
    console.log(`Facturación total: ${facturacionTotal}`);
    console.log(`Cantidad total de litros vendidos del artículo 1: ${litrosArticulo1}`);
    console.log(`Cantidad de facturas con un valor mayor a 600: ${facturasMayor600}`);
  }
  
  gestionarFacturas();
  