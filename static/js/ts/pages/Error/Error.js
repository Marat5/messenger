import { Block } from "../../Block.js";
import errorTemplate from "./errorTemplate.js";
import { errorData } from './errorData.js';
export default class ErrorBlock extends Block {
    constructor(props) {
        // Создаем враппер дом-элемент button
        super("div", {}, ['wrapper']);
    }
    componentDidMount() { }
    render() {
        return errorTemplate({ errorData });
    }
}
// function render(query, block) {
//     const root = document.querySelector(query);
//     console.log(block.getContent())
//     root.appendChild(block.getContent());
//     return root;
// }
// const error = new ErrorBlock({ errorData });
// render("body", error);
