import userFormConfig from './configs/user.form'
import createForm from './createForm'
import { fetchAddUser, fetchEditUser } from '../../../actions'

export const UserForm = createForm(userFormConfig, {
    post: {action: fetchAddUser, redirect: '/'},
    put: {action: fetchEditUser}
}, 'user')
