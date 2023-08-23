const express = require('express');
const app = express();
// Configurações App

app.use(express.static('public'));
app.set('views', 'views/pages');
app.set('view engine', 'ejs');

// Definição de rotas da API

app.get('/', (req, res) => {
    res.render('login')
})

app.listen(6173, () => {
    console.log(`App na porta: 6173`)
  })