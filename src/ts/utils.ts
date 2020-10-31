export const addListenerToForm = (formQuerySelector: string, formFields: any[]) => {
    document.querySelector(`${formQuerySelector}`).addEventListener('submit', (e) => {
        const formData = new FormData(document.querySelector(`${formQuerySelector}`));

        e.preventDefault();
        for (let [name, value] of formData) {
            console.log(`Name: ${name}, Value: ${value}`)
        }
        return validateForm(formData, formFields);
    });

    formFields.forEach((field) => {
        console.log(field)
        document.querySelector(`#${field.name}`).addEventListener('blur', () => {
            const formData = new FormData(document.querySelector(`${formQuerySelector}`));
            validateForm(formData, formFields);
        });
        document.querySelector(`#${field.name}`).addEventListener('focus', () => {
            const formData = new FormData(document.querySelector(`${formQuerySelector}`));
            validateForm(formData, formFields);
        });
    })
}

const validateForm = (formData, formFields: any[]) => {
    formFields.forEach(field => {
        let value = formData.get(`${field.name}`);
        let validationRule = new RegExp(field.validationRule)
        console.log(field.name, validationRule.test(value))
        return validationRule.test(value)
    })
}