export type ErrorData = {
    status: string
    backText: string
    errorText: string
}

// for 404 error
let errorDatajson = JSON.stringify({
    status: '404',
    errorText: "Не туда попали",
    backText: "Назад к чатам"
})

export let errorData: ErrorData = JSON.parse(errorDatajson);