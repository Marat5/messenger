import { Block } from "../../Block.js";
import authFormTemplate from "./authFormTemplate.js";

export default class AuthForm extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", props, []);
    }

    componentDidMount() {}

    render() {
        return authFormTemplate(this.props)
    }
}