const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static(`${__dirname}/static`));

app.listen(PORT, () => {
  console.log(`Проект запущен на порте ${PORT}`);
});

app.get('/login', function (req, res) {
  res.sendFile(`/static/index.html`, { root: __dirname })
});

app.get('/registration', function (req, res) {
  res.sendFile(`/static/index.html`, { root: __dirname })
});

app.get('/profile', function (req, res) {
  res.sendFile(`/static/index.html`, { root: __dirname })
});

app.get('/error', function (req, res) {
  res.sendFile(`/static/index.html`, { root: __dirname })
});

app.get('/chat', function (req, res) {
  res.sendFile(`/static/index.html`, { root: __dirname })
});