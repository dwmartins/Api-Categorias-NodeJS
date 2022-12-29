const express = require('express');
const app = express();
app.use(express.json());

//Pegar um dado
app.get("/users", (req, res) => {

  const users = [
    {
      "id": 1,
      "name": "Usuário 1"
    },
    {
      "id": 2,
      "name": "Usuário 2"
    }

  ]
  return res.json(users);
});

//Pegar um dado pelo id
app.get("/users/:id", (req, res) => {
  const idUser = req.params;

  return res.json(idUser);
});

//Enviar um dado
app.post("/users", (req, res) => {

  const user = req.body;

  return res.json(user);
});

//Editar um dado
app.put("/users/:id", (req, res) => {
  const idUser = req.params;
  const user = req.body;
  return res.json(user);
});

//Deleta um dado
app.delete("/users/:id", (req, res) => {
  const idUser = req.params;

  return res.json(idUser);
});

app.listen(3002);