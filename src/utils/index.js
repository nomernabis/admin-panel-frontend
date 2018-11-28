import fetch from 'cross-fetch'

export const isEmpty = (str) => {
    return str === ""
}

export const contains = (str, substr) => {
    return str.indexOf(substr) != -1
}

export const isEmailValid = (email) => {
    const trimmed = email.trim()
    const index = trimmed.indexOf('@')
    if(index != -1){
        if(index != trimmed.length - 1){
            const right = trimmed.substr(index)
            const dot = right.indexOf('.')
            if(dot != -1){
                const company = right.substr(0, dot)
                if(!isEmpty(company)){
                    const domain = right.substr(dot)
                    if(domain.length > 1){
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
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

export const get = (url, isAuthorized=false) => {
    if(isAuthorized){
        return fetch(url, {
            headers: {
                "Authorization": "Token " + localStorage.getItem("token"),
            }
        })
    }
    return fetch(url)
}
