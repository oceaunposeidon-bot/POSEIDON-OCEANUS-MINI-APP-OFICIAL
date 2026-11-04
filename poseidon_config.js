// Configuración pública: SIN credenciales ni tokens.
//
// PRECIOS (en Stars, por 30 días de acceso). «Gratuito» no lleva precio.
// Las claves aceptan mayúsculas y tildes: estandar, Estándar, ESTANDAR son iguales.
// POSEIDON_PRICES        = precio de LANZAMIENTO.
// POSEIDON_PRICES_NORMAL = precio NORMAL; la página lo muestra solo desde PRECIO_NORMAL_DESDE.
// PRECIO_NORMAL_DESDE    = primer día del precio normal, AAAA-MM-DD, hora de Lima.
// Si algún dato falta o la fecha es inválida, la página muestra el precio normal; si no hay normal, el único que exista.
// OJO: esto es solo lo que se MUESTRA. El monto que se cobra lo decide el bot con su propia configuración (config/.env).
//
// Para subir un precio más adelante: cambia el número aquí y en config/.env, nunca solo en uno.
window.POSEIDON_PRICES = Object.freeze({
  estandar: 175,   // normal 250  (≈ US$3.5 pagando el comprador ≈ US$0.02 por Star)
  premium: 420,    // normal 600  (≈ US$8.4)
  vip: 1050        // normal 1500 (≈ US$21)
});
window.POSEIDON_PRICES_NORMAL = Object.freeze({
  estandar: 250,   // ≈ US$5
  premium: 600,    // ≈ US$12
  vip: 1500        // ≈ US$30
});
window.PRECIO_NORMAL_DESDE = '2027-02-01';

// Interruptores. Todo se activa a propósito, en este orden:
//   BOT_INTEGRADO = true     cuando el bot ya reciba los datos de la Mini App
//   PAYMENTS_ENABLED = true  cuando el bot ya cree las facturas en Stars
window.PAYMENTS_ENABLED = false;
window.BOT_INTEGRADO = false;
