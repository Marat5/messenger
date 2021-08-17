const fieldsArrayjson = JSON.stringify([{
  name: 'first_name',
  label: 'Имя',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'Арина',
}, {
  name: 'second_name',
  label: 'Фамилия',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'Иванова',
}, {
  name: 'display_name',
  label: 'Отображаемое имя',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'Арина',
}, {
  name: 'login',
  label: 'Логин',
  validationRule: '^([a-z0-9]{5,})$',
  placeholder: 'arina',
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

const profileDatajson = JSON.stringify({
  name: 'Арина',
  picture: null,
});

export const fieldsArray = JSON.parse(fieldsArrayjson);
export const profileData = JSON.parse(profileDatajson);
