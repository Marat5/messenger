import Handlebars from 'handlebars';

const errorTemplate = Handlebars.compile(`
    <div class="error-container">
        <div class="error-info">
            <h1 class="err-info__number">{{this.errorData.status}}</h1>
            <p class="err-info__helptext">{{this.errorData.errorText}}</p>
            <a class="help-link" href="chat">{{this.errorData.backText}}</a>
        </div>
    </div>
`);

export { errorTemplate };
