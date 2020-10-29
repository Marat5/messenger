// for 404 error
let errorStatus = 404;
let errorText = "Не туда попали";
let backText = "Назад к чатам";

// for 500 error
// let errorStatus = 500;
// let errorText = "Мы уже фиксим";
// let backText = "Назад к чатам";

const headTitleText = Handlebars.compile(`{{errorStatus}}`);

const bodyTemplate = Handlebars.compile(`
    <div class="wrapper">
        <div class="error-info">
            <h1 class="err-info__number">{{errorStatus}}</h1>
            <p class="err-info__helptext">{{errorText}}</p>
        </div>
        <a class="help-link" href="url">{{backText}}</a>
    </div>
`);

let compiledHeadTitle = headTitleText({ errorStatus });
document.querySelector('title').innerText = compiledHeadTitle;

let compiledBodyTemplate = bodyTemplate({ errorStatus, errorText, backText });
document.body.innerHTML = compiledBodyTemplate;
