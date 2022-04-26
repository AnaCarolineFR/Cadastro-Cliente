const express = require("express");

const app = express();

/*app.get("/", function (req, resp) {
  resp.send("Bem vindo ao meu app");
});

app.get("/", function (req, resp) {
  resp.send("Página de produto do meu app");
});*/

app.get("/", function (req, resp) {
  resp.send("Página de contato do meu app");
});

//ultima linha quando usamos o express
app.listen(8081, function () {
  console.log("O servidor funcionando na url http://localhost8081");
});
