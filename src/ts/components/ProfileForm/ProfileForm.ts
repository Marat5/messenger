import { Block } from "../../Block";
import Button from "../Button/Button";
import profileFormTemplate from "./profileFormTemplate";


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