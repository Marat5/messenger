import Handlebars from 'handlebars';

const profileFormTemplate = Handlebars.compile(`
<form id="profile-form" class="profile__form">
    {{#each this.fieldsArray}}
    <div class="profile__textfield">
        <label for="first_name">{{this.label}}</label>
        <input type="text" id="{{this.name}}" placeholder="{{this.placeholder}}" name="{{this.name}}">
    </div>
    {{/each}}
    {{{this.button}}}
</form>
`);

export { profileFormTemplate };
