// import Handlebars from 'handlebars.js';
let profileTemplate = Handlebars.compile(`
<div class="profile-info">
    <label for="avatar" id="avaterLabel" class="profile-picture"></label>
    <input type="file" id="avatar" style="display: none;"/>
    <h1 class="profile-name">{{this.profileData.name}}</h1>
</div>
{{{this.profileForm}}}

<link rel="stylesheet" href="css/profile.css">
`);
export { profileTemplate };
