import { Block } from "../../Block";
import authFormTemplate from "./authFormTemplate";

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