const express = require('express');

// const { PORT } = process.env;
const PORT = 3000;

const app = express();

app.use(express.static(`${__dirname}/static`));

app.listen(PORT, () => {
	console.log(`Проект запущен на порте ${PORT}`);
});

app.get('/login', (req, res) => {
	res.sendFile('/static/index.html', { root: __dirname });
});

app.get('/registration', (req, res) => {
	res.sendFile('/static/index.html', { root: __dirname });
});

app.get('/profile', (req, res) => {
	res.sendFile('/static/index.html', { root: __dirname });
});

app.get('/error', (req, res) => {
	res.sendFile('/static/index.html', { root: __dirname });
});

app.get('/chat', (req, res) => {
	res.sendFile('/static/index.html', { root: __dirname });
});

app.get('*', (req, res) => {
	res.status(404).sendFile('/static/error.html', { root: __dirname });
});
