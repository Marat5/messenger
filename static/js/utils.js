export const addListenerToForm = (formQuerySelector, formFields, onSubmit) => {
    document.querySelector(`${formQuerySelector}`).addEventListener('submit', (e) => {
        const formData = new FormData(document.querySelector(`${formQuerySelector}`));
        e.preventDefault();
        const dataObj = {};
        for (const [name, value] of formData) {
            dataObj[name] = value;
        }
        onSubmit(dataObj);
    });
    formFields.forEach((field) => {
        document.querySelector(`#${field.name}`).addEventListener('blur', () => {
            const formData = new FormData(document.querySelector(`${formQuerySelector}`));
            validateForm(formData, formFields);
        });
        document.querySelector(`#${field.name}`).addEventListener('focus', () => {
            const formData = new FormData(document.querySelector(`${formQuerySelector}`));
            validateForm(formData, formFields);
        });
    });
};
const validateForm = (formData, formFields) => {
    formFields.forEach(field => {
        let value = formData.get(`${field.name}`);
        let validationRule = new RegExp(field.validationRule);
        return validationRule.test(value);
    });
    return true;
};
