import { addListenerToForm } from '../../utils.js'
import { Block } from '../../Block.js';
import ProfileForm from '../../components/ProfileForm/ProfileForm.js';
import profileTemplate from './profileTemplate.js';
import { fieldsArray, profileData } from './profileData.js';


class Profile extends Block {
    profileForm: any;
    constructor(props) {
        super("main", {
            profileForm: new ProfileForm({ fieldsArray }).render()
        }, ["wrapper"]);
    }

    componentDidMount() {}

    render() {
        let compiledBodyTemplate = profileTemplate({ profileData, profileForm: this.props.profileForm });
        return compiledBodyTemplate;
    }
}

function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());

    addListenerToForm('#profile-form', fieldsArray);

    return root;
}

const profile = new Profile({});

render("body", profile);