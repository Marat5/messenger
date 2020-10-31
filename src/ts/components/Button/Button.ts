import { Block } from "../../Block.js";
import buttonTemplate from "./buttonTemplate.js";

export default class Button extends Block {
    buttonText: string;
    buttonType: string;
    buttonStyle: string;

    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {}, ['wrapper']);
        this.buttonText = props.buttonText;
        this.buttonType = props.buttonType || 'button';
        this.buttonStyle = props.buttonStyle || 'primary-button'
    }

    componentDidMount() {}

    render() {
        return buttonTemplate({ buttonText: this.buttonText, buttonType: this.buttonType, buttonStyle: this.buttonStyle })
    }
}
