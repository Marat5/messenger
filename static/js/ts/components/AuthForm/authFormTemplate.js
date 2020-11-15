export default Handlebars.compile(`
<form class="auth-container__form">
    <div class="auth-container {{containerClass}}">
        <div>
            <h1 class="auth-container__header-text">{{this.headerText}}</h1>
            {{#each this.formFields}}
            <div class="auth-container__textfield">
                <label for="{{this.name}}">{{this.label}}</label>
                <input type="text" id="{{this.name}}" name="{{this.name}}">
            </div>
            {{/each}}
        </div>
        <div class="auth-container__buttons">
            {{{ this.button }}}
            <a class="help-link" href="{{this.secondaryHref}}">{{secondaryText}}</a>
        </div>
    </div>
</form>

<link rel="stylesheet" href="css/login.css">
<link rel="stylesheet" href="css/registration.css">
`);
