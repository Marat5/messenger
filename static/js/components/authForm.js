export default (fieldsArray, containerClass, headerText, buttonText, secondaryText) => {
    const formTemplate = Handlebars.compile(`
        <form class="auth-container__form">
            <div class="auth-container {{containerClass}}">
                <div>
                    <h1 class="auth-container__header-text">{{headerText}}</h1>
                    {{#each fieldsArray}}
                    <div class="auth-container__textfield">
                        <label for="{{this.name}}">{{this.label}}</label>
                        <input type="text" id="{{this.name}}" name="{{this.name}}">
                    </div>
                    {{/each}}
                </div>
                <div class="auth-container__buttons">
                    <div id="button-container">
                    </div>
                    <a class="help-link" href="url">{{secondaryText}}</a>
                </div>
            </div>
        </form>
    `);
    let compiledFormTemplate = formTemplate({ fieldsArray, containerClass, headerText, buttonText, secondaryText });
    return compiledFormTemplate;
};
