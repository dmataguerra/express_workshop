const express = require('express');//Importar express como Clase
const app = express(); //lamar el constructor de express

app.get("/", (req, res, next) => {
  res.status(200); //Codigo 200 es el codigo de respuesta de una peticion 
  res.send("Bienvenido");
})

app.listen(3000, () => {
  console.log('Server is running...');
});
