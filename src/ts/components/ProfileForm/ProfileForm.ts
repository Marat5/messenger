import { Block } from "../../Block.js";
import Button from "../Button/Button.js";
import profileFormTemplate from "./profileFormTemplate.js";

// export default (fieldsArray) => {
//     const formTemplate = Handlebars.compile(`
//     <form class="profile__form">
//         {{#each fieldsArray}}
//         <div class="profile__textfield">
//             <label for="first_name">{{this.label}}</label>
//             <input type="text" id="{{this.name}}" placeholder="{{this.placeholder}}" name="{{this.name}}">
//         </div>
//         {{/each}}
//         <div id="button-container" class="profile-button-container"></div>
//         </form>
//     `);


//     let compiledFormTemplate = formTemplate({ fieldsArray });
//     return compiledFormTemplate;
// }


export default class ProfileForm extends Block {
    fieldsArray: any[];
    button: any
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {
            button: new Button({ buttonText: 'Сохранить', buttonType: 'submit' }).render()
        }, []);
        this.fieldsArray = props.fieldsArray
    }

    componentDidMount() {}

    render() {
        return profileFormTemplate({ fieldsArray: this.fieldsArray, button: this.props.button })
    }
}