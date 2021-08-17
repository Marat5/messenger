/* eslint-disable no-restricted-syntax */
const validateForm = (formData, formFields) => {
    formFields.forEach((field) => {
        const value = formData.get(`${field.name}`);
        const validationRule = new RegExp(field.validationRule);
        return validationRule.test(value);
    });
    return true;
};
export const addListenerToForm = (formQuerySelector, formFields, onSubmit) => {
    var _a;
    (_a = document.querySelector(`${formQuerySelector}`)) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => {
        const formData = new FormData(document.querySelector(`${formQuerySelector}`));
        e.preventDefault();
        const dataObj = {};
        for (const [name, value] of formData) {
            dataObj[name] = value;
        }
        onSubmit(dataObj);
    });
    formFields.forEach((field) => {
        var _a, _b;
        (_a = document.querySelector(`#${field.name}`)) === null || _a === void 0 ? void 0 : _a.addEventListener('blur', () => {
            const formData = new FormData(document.querySelector(`${formQuerySelector}`));
            validateForm(formData, formFields);
        });
        (_b = document.querySelector(`#${field.name}`)) === null || _b === void 0 ? void 0 : _b.addEventListener('focus', () => {
            const formData = new FormData(document.querySelector(`${formQuerySelector}`));
            validateForm(formData, formFields);
        });
    });
};
export function queryStringify(data) {
    const paramsArray = [];
    // eslint-disable-next-line prefer-const
    for (let [key, value] of Object.entries(data)) {
        value = Array.isArray(value) ? value.join(',') : value;
        paramsArray.push(`${key}=${value}`);
    }
    return `?${paramsArray.join('&')}`;
}
