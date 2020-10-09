const express = require('express');
const PORT = 3000;

 
// Здесь нужно написать роут для отдачи статики
// Все пути считаются относительно переменной __dirname
// Подробнее про __dirname можно прочитать здесь https://nodejs.org/api/modules.html#modules_dirname
const app = express();

app.use(express.static(`${__dirname}/static`));

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});