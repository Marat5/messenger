import { Block } from "../../Block";
import {errorTemplate} from "./errorTemplate";
import { ErrorData, errorData } from './errorData'


export class ErrorBlock extends Block {
    errorData: ErrorData
    constructor(props) {
        super("div", {}, ['wrapper']);
    }

    render() {
        return errorTemplate({ errorData })
    }
}