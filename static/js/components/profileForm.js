export default (fieldsArray) => {
    const formTemplate = Handlebars.compile(`
    <form class="profile__form">
        {{#each fieldsArray}}
        <div class="profile__textfield">
            <label for="first_name">{{this.label}}</label>
            <input type="text" id="{{this.name}}" placeholder="{{this.placeholder}}" name="{{this.name}}">
        </div>
        {{/each}}
        <div id="button-container" class="profile-button-container"></div>
        </form>
    `);
    let compiledFormTemplate = formTemplate({ fieldsArray });
    return compiledFormTemplate;
};
