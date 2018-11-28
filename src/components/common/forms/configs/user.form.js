const config = {
    fields: [
        {name: 'username', label: "Username", type: "text", isRequired: true},
        {name: 'password', label: "Password", type: "password", isRequired: true},
        {name: 'fist_name', label: "Firstname", type: "text"},
        {name: 'last_name', label: "Lastname", type: "text"},
        {name: 'email', label: "Email", type: "email"},
        {name: 'phone_number', label: "Phone", type: "phone"},
        {name: 'user_type', label: "Lastname", type: "select"},
    ]
}

export default config
