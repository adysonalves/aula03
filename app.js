const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('Olá mundo!');
    res.end();
});

app.get('/retorno', (req,res) => {
    res.send('NodeJS é muito Fácil!');
    res.end();
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});