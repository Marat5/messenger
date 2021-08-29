const fieldsArrayjson = JSON.stringify([{
  name: 'first_name',
  label: 'Имя',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'Марат',
}, {
  name: 'second_name',
  label: 'Фамилия',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'Мухутдинов',
}, {
  name: 'display_name',
  label: 'Отображаемое имя',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'Marat5',
}, {
  name: 'login',
  label: 'Логин',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'Marat5',
}, {
  name: 'email',
  label: 'Почта',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'example@yandex.ru',
}, {
  name: 'phone',
  label: 'Телефон',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: '+7 925 111 22 33',
}, {
  name: 'oldPassword',
  label: 'Старый пароль',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'Старый пароль',
}, {
  name: 'newPassword',
  label: 'Новый пароль',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'Новый пароль',
}]);

export const fieldsArray = JSON.parse(fieldsArrayjson);
