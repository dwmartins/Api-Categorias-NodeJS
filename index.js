const express = require('express');
const app = express();

app.get("/teste", (req, res) => {
    return res.json({Msg: "Servidor OK!"})
});

app.listen(3002);