const express = require('express');

// const { PORT } = process.env;
const PORT = 3000;

const app = express();

app.use(express.static(`${__dirname}/static`));

app.listen(PORT, () => {
	console.log(`Проект запущен на порте ${PORT}`);
});

app.get('*', (req, res) => {
	res.status(404).sendFile('/static/index.html', { root: __dirname });
});
