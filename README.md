# Мессенджер на Typescript без фреймворка


## Описание
Мессенджер, в котором реализован свой event bus и альтернатива fetch через XMLHttpRequest. Использован шаблонизатор handlebars и компонентный подход

## Доступные страницы
* /error - ошибка
* /chat - чат
* /profile - настройки (просмотр) профиля
* /login - вход
* /registration - регистрация

## Команды
1. npm run lint - запускает линтер с --fix

## Сборка
* Необходимо, чтобы при сборке все импорты Handlebars были закомментированы. См. тестирование
* Проект собирается командой npm run build. Команда компилирует ts и scss
* Также можно собрать вебпаком в один файл node ./node_modules/.bin/webpack

## Тестирование
* Для запуска тестов необходимо в папке ts заменить все "// import Handlebars from 'handlebars';" на "import Handlebars from 'handlebars';"
* Потом запустить npm run test

## Линтер
* Запускается с помощью npm run lint

## Precommit
* Перед коммитом запускает линтер

## Макеты
https://www.figma.com/file/w7dws8hp8JghA6RPqOXwPZ/Chat?node-id=0%3A1

## Посмотреть можно тут

[![Netlify Status](https://api.netlify.com/api/v1/badges/f5354633-b55f-4899-adcb-100b7fcb2bc2/deploy-status)](https://app.netlify.com/sites/naughty-saha-b231df/deploys)

https://naughty-saha-b231df.netlify.app/  
https://my-application-ypraktikum.herokuapp.com/
