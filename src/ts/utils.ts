export const addListenerToForm = (formQuerySelector: string, formFields: any[], onSubmit: (data?: any) => void) => {
    document.querySelector(`${formQuerySelector}`).addEventListener('submit', (e) => {
        const formData = new FormData(document.querySelector(`${formQuerySelector}`));

        e.preventDefault();
        let dataObj = {}
        for (let [name, value] of formData) {
            // console.log(`Name: ${name}, Value: ${value}`)
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
    })
}

const validateForm = (formData, formFields: any[]) => {
    formFields.forEach(field => {
        let value = formData.get(`${field.name}`);
        let validationRule = new RegExp(field.validationRule)
        return validationRule.test(value)
    })
    return true;
}