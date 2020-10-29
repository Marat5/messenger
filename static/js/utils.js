export const addListenerToForm = (callback) => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        callback(formData);
    });
}

export const addValidationToForm = (fieldsArray) => {
    fieldsArray.forEach(({ name }) => {
        document.querySelector(`#${name}`).addEventListener('blur', (e) => {
            console.log(`${name} validation`)
        })

        document.querySelector(`#${name}`).addEventListener('focus', (e) => {
            console.log(`${name} validation`)
        })
    })
}