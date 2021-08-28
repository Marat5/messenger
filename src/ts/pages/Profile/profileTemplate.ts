import Handlebars from 'handlebars';

const profileTemplate = Handlebars.compile(`
<div class="profile-info">
    <label for="avatar" id="avaterLabel" class="profile-picture"></label>
    <input type="file" id="avatar" style="display: none;"/>
    <h1 class="profile-name">{{this.profileData.login}}</h1>
</div>
{{{this.profileForm}}}
{{{this.exitButton}}}
`);

export { profileTemplate };
