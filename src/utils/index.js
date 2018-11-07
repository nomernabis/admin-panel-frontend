import fetch from 'cross-fetch'

export const isEmpty = (str) => {
    return str === ""
}

export const post = (url, data) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}
