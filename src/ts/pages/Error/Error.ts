import { Block } from "../../Block.js";
import errorTemplate from "./errorTemplate.js";
import { ErrorData, errorData } from './errorData.js'


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