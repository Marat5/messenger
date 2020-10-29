export default (buttonText) => {
    const button = Handlebars.compile(`
        <button class='primary-button'  type="submit">{{buttonText}}</button>
    `);
    return button({ buttonText });
};
