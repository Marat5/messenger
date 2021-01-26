import { Block } from "../../Block.js";
import { errorTemplate } from "./errorTemplate.js";
import { errorData } from './errorData.js';
export class ErrorBlock extends Block {
    constructor(props) {
        super("div", {}, ['wrapper']);
    }
    render() {
        return errorTemplate({ errorData });
    }
}
