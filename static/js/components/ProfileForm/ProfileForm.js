import { Block } from "../../Block.js";
import Button from "../Button/Button.js";
import profileFormTemplate from "./profileFormTemplate.js";
export default class ProfileForm extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {
            button: new Button({ buttonText: 'Сохранить', buttonType: 'submit' }).render()
        }, []);
        this.fieldsArray = props.fieldsArray;
    }
    componentDidMount() { }
    render() {
        return profileFormTemplate({ fieldsArray: this.fieldsArray, button: this.props.button });
    }
}
