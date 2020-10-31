export default Handlebars.compile(`
<div class="profile-info">
    <input id="avatar" type="button" class="profile-picture">
    <h1 class="profile-name">{{this.name}}</h1>
</div>
{{{this.profileForm}}}
`);
