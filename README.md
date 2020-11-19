Проект первого модуля Яндекс Практикум. Мессенджер

## Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/f5354633-b55f-4899-adcb-100b7fcb2bc2/deploy-status)](https://app.netlify.com/sites/naughty-saha-b231df/deploys)

https://naughty-saha-b231df.netlify.app/

Макеты https://www.figma.com/file/w7dws8hp8JghA6RPqOXwPZ/Chat?node-id=0%3A1

# Сборка
Необходимо, чтобы при сборке все импорты Handlebars были закомментированы. См. тестирование
Проект собирается командой npm run build. Команда компилирует ts и scss

# Тестирование
Для запуска тестов необходимо в папке ts заменить все "// import Handlebars from 'handlebars';" на "import Handlebars from 'handlebars';"
Потом запустить npm run test
Надеюсь, что это временное решение

# Доступные страницы
* /error - ошибка
* /chat - чат
* /profile - настройки (просмотр) профиля
* /login - вход
* /registration - регистрация