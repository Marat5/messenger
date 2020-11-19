import { Block } from "../../Block";
import errorTemplate from "./errorTemplate";
import { ErrorData, errorData } from './errorData'


export default class ErrorBlock extends Block {
    errorData: ErrorData
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {}, ['wrapper']);
    }

    componentDidMount() { }

    render() {
        return errorTemplate({ errorData })
    }
}