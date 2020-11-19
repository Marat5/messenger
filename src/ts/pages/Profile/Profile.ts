import { addListenerToForm } from '../../utils'
import { Block } from '../../Block';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import profileTemplate from './profileTemplate';
import { fieldsArray, profileData } from './profileData';
import { changeProfile } from '../../api/profile';


export default class Profile extends Block {
    profileForm: any;
    constructor(props) {
        super("main", {
            profileForm: new ProfileForm({ fieldsArray }).render()
        }, ["wrapper"]);
    }

    componentDidMount() { }


    onSubmit(data) {
        changeProfile(data).then((response: any) => {
            console.log(response.status);
            if (response.status !== 200) {
                alert("Что-то пошло не так")
            }
        }).catch(err => {
            alert("Что-то пошло не так")
        })
    }

    render() {
        setTimeout(() => {
            addListenerToForm('#profile-form', fieldsArray, this.onSubmit);
        }, 50)
        let compiledBodyTemplate = profileTemplate({ profileData, profileForm: this.props.profileForm });
        return compiledBodyTemplate;
    }
}