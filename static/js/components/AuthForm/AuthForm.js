import { Block } from "../../Block.js";
import { authFormTemplate } from "./authFormTemplate.js";
export class AuthForm extends Block {
    constructor(props) {
        super("div", props, []);
    }
    render() {
        return authFormTemplate(this.props);
    }
}
