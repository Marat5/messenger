import { addListenerToForm } from '../../utils.js';
import { Block } from '../../Block.js';
import ProfileForm from '../../components/ProfileForm/ProfileForm.js';
import profileTemplate from './profileTemplate.js';
import { fieldsArray, profileData } from './profileData.js';
import { changeProfile } from '../../api/profile.js';
export default class Profile extends Block {
    constructor(props) {
        super("main", {
            profileForm: new ProfileForm({ fieldsArray }).render()
        }, ["wrapper"]);
    }
    componentDidMount() { }
    onSubmit(data) {
        changeProfile(data).then((response) => {
            console.log(response.status);
            if (response.status !== 200) {
                alert("Что-то пошло не так");
            }
        }).catch(err => {
            alert("Что-то пошло не так");
        });
    }
    render() {
        setTimeout(() => {
            addListenerToForm('#profile-form', fieldsArray, this.onSubmit);
        }, 50);
        let compiledBodyTemplate = profileTemplate({ profileData, profileForm: this.props.profileForm });
        return compiledBodyTemplate;
    }
}
