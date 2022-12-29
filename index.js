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

//Enviar um dado
app.post("/users", (req, res) => {

  const user = req.body;

  return res.json(user);
})

app.listen(3002);