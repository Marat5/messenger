// import Handlebars from 'handlebars.js';
let errorTemplate = Handlebars.compile(`
        <div class="error-info">
            <h1 class="err-info__number">{{this.errorData.status}}</h1>
            <p class="err-info__helptext">{{this.errorData.errorText}}</p>
        </div>
        <a class="help-link" href="url">{{this.errorData.backText}}</a>

        <link rel="stylesheet" href="css/err.css">
`);
export { errorTemplate };
