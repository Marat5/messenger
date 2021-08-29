# Мессенджер на Typescript без фреймворка


## Описание
Мессенджер, в котором реализован свой event bus и альтернатива fetch через XMLHttpRequest. Использован шаблонизатор handlebars и компонентный подход. Собрать можно вебпаком, а можно и без него

## Доступные страницы
* /error - ошибка
* /chat - чат
* /profile - настройки (просмотр) профиля
* /login - вход
* /registration - регистрация

## Команды
1. npm run start - запускает сервер, раздающий статику
2. npm run build - собирает проект в dist вебпаком
3. npm run build:nowebpack - собирает проект в dist без вебпака
4. npm run watch - собирает проект, потом вебпак следит за обновлением .ts файлов
5. npm run lint - запускает линтер с --fix
6. npm run test - запускает тесты
7. npm run clean - удаляет папку dist

## Прекоммит
Перед коммитом запускает линтер

## Макеты
[Макеты в фигме](https://www.figma.com/file/w7dws8hp8JghA6RPqOXwPZ/Chat?node-id=0%3A1)

## Посмотреть можно тут

[![Netlify Status](https://api.netlify.com/api/v1/badges/f5354633-b55f-4899-adcb-100b7fcb2bc2/deploy-status)](https://app.netlify.com/sites/naughty-saha-b231df/deploys)  
[Приложение на Netlify](https://naughty-saha-b231df.netlify.app/)  

[Приложение на Heroku](https://my-application-ypraktikum.herokuapp.com/)

Если хочется посмотреть как работает чатик на вебсокетах нужно в разных браузерах залогиниться под ChatBro (Пароль: 123) и под AnotherChatBro (Пароль: 123), перейти в /chat и выбрать один из чатов или создать новый. Дальше можно обменяться сообщениями через вебсокет (Апишка учебная, сервер прервет соединение через 60 секунд отсутствия активности + если кто-то не вышел из-под этого пользователя, то будет ошибка "пользователь уже в сети при попытке авторизации")
