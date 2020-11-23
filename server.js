const express = require('express');

const app = express();

const users = [
     'Mario Silva',
     'Marisa Francisco',
    'Amilton Batalha',
]

app.use('/user', (req, res) => {
    res.send({ users })
})

app.listen(process.env.PORT || 3333);