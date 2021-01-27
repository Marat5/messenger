export const addListenerToForm = (formQuerySelector: string, formFields: any[], onSubmit: (data?: any) => void) => {
    document.querySelector(`${formQuerySelector}`)?.addEventListener('submit', (e) => {
        const formData = new FormData(document.querySelector(`${formQuerySelector}`));

        e.preventDefault();
        const dataObj = {}
        for (const [name, value] of formData) {
            dataObj[name] = value;
        }
        onSubmit(dataObj);

    });

    formFields.forEach((field) => {
        document.querySelector(`#${field.name}`)?.addEventListener('blur', () => {
            const formData = new FormData(document.querySelector(`${formQuerySelector}`));
            validateForm(formData, formFields);
        });
        document.querySelector(`#${field.name}`)?.addEventListener('focus', () => {
            const formData = new FormData(document.querySelector(`${formQuerySelector}`));
            validateForm(formData, formFields);
        });
    })
}

const validateForm = (formData, formFields: any[]) => {
    formFields.forEach(field => {
        const value = formData.get(`${field.name}`);
        const validationRule = new RegExp(field.validationRule)
        return validationRule.test(value)
    })
    return true;
}

export function queryStringify(data) {
    const paramsArray = []

    for (let [key, value] of Object.entries(data)) {
        value = Array.isArray(value) ? value.join(',') : value;
        paramsArray.push(`${key}=${value}`)
    }
    return `?${paramsArray.join('&')}`;
}