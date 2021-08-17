import Handlebars from 'handlebars';

const buttonTemplate = Handlebars.compile('<button class="{{buttonStyle}}" type="{{buttonType}}">{{buttonText}}</button>');

export { buttonTemplate };
