import createProfileForm from '../components/profileForm.js';
import { addListenerToForm, addValidationToForm } from '../utils.js'
import { Block } from '../block.js';
import Button from '../components/button.js';


let fieldsArray = [{
    name: 'first_name',
    label: 'Имя',
    placeholder: 'Арина'
}, {
    name: 'second_name',
    label: 'Фамилия',
    placeholder: 'Иванова'
}, {
    name: 'display_name',
    label: 'Отображаемое имя',
    placeholder: 'Арина'
}, {
    name: 'login',
    label: 'Логин',
    placeholder: 'arina'
}, {
    name: 'email',
    label: 'Почта',
    placeholder: 'example@yandex.ru'
}, {
    name: 'phone',
    label: 'Телефон',
    placeholder: '+7 925 111 22 33'
}, {
    name: 'oldPassword',
    label: 'Старый пароль',
    placeholder: 'Старый пароль'
}, {
    name: 'newPassword',
    label: 'Новый пароль',
    placeholder: 'Новый пароль'
}]

let profileData = {
    name: "Арина",
    picture: null,
}

class Profile extends Block {
    constructor(props) {
        super("main", props, "wrapper");
    }

    render() {
        const bodyTemplate = Handlebars.compile(`
            <div class="profile-info">
                <input id="avatar" type="button" class="profile-picture">
                <h1 class="profile-name">{{this.name}}</h1>
            </div>
        
            <div id='profile__form-container'></div>
        `);


        let compiledBodyTemplate = bodyTemplate(profileData);
        return compiledBodyTemplate;
    }
}

function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    let profileForm = createProfileForm(fieldsArray);
    document.querySelector('#profile__form-container').innerHTML = profileForm;

    document.querySelector('#button-container').innerHTML = Button("Сохранить");
    let onSubmit = (formData) => {
        console.log(formData.get('first_name'),
            formData.get('second_name'),
            formData.get('display_name'),
            formData.get('login'),
            formData.get('email'),
            formData.get('phone'),
            formData.get('oldPassword'),
            formData.get('newPassword')
        )
    }
    addValidationToForm(fieldsArray);
    addListenerToForm(onSubmit);

    return root;
}

const profile = new Profile({});

render("body", profile);