const express = require('express');//Importar express como Clase
const app = express(); //lamar el constructor de express

app.get("/", (req, res, next) => {
  res.status(200); //Codigo 200 es el codigo de respuesta de una peticion 
  res.send("Bienvenido");
});

app.get("/:name", (req, res, next) => {
  console.log(req.params.name);
  res.status(200);
  res.send("Estas en la pagina Nombre");
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});
