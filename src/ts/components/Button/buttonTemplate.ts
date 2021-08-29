import Handlebars from 'handlebars';

const buttonTemplate = Handlebars.compile(`
    <button 
        {{#if id}}
        id="{{id}}"
        {{/if}}
        class="{{buttonStyle}}" 
        type="{{buttonType}}"
    >
        {{buttonText}}
    </button>`);

export { buttonTemplate };
