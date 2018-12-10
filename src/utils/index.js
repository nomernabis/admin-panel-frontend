import fetch from 'cross-fetch'

export const normalizeConfig = (config) => {
    var newFields = config.fields.map(f => {
        if(!f.methods){
            f.methods = ['post', 'put']
        }
        return f
    })
    console.log('normailize', newFields)
    config.fields = newFields
    return config
}

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

export function formate(str){
    return str.replace('(', '').replace(')', '').replace(/ /g, '')
}

export function maskPhone(str){
    var first = str.substr(0, 3)
    var second = str.substr(3, 3)
    var third = str.substr(6, 4)
    return "(" + first + ") " + second + " " + third
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

export const USERS = 'http://localhost:8000/users/'
export const patch = (url, data) => {
    return fetch(url, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Token " + localStorage.getItem("token"),
        },
        body: JSON.stringify(data)
    })
}

export const delete_ = (url, id) => {
    return fetch(url + id + '/', {
        method: "DELETE",
        headers: {
            "Authorization": "Token " + localStorage.getItem("token"),
        },
    })
}

export const saveUser = (user) => {
    localStorage.setItem('/users/' + user.id, JSON.stringify(user))
}

export const getUser = (id) => {
    return localStorage.getItem('/users/' + id)
}
