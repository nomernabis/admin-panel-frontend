import { normalizeConfig } from '../../../../utils'

const config = {
    fields: [
        {name: 'username', label: "Username", type: "text", isRequired: true, min: 5},
        {name: 'password', label: "Password", type: "password", isRequired: true, min: 7, methods: ['post']},
        {name: 'first_name', label: "Firstname", type: "text"},
        {name: 'last_name', label: "Lastname", type: "text"},
        {name: 'email', label: "Email", type: "email", max: 50},
        {name: 'phone_number', label: "Phone", type: "phone"},
        {name: 'user_type', label: "User Type", type: "select", options: [{name: "Operator", value: 1}, {name: "Owner", value: 2},{name: "Admin", value: 3},]},
    ]
}

export default normalizeConfig(config)
