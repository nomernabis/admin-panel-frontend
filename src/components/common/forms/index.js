import userFormConfig from './configs/user.form'
import createForm from './createForm'
import { fetchAddUser, fetchEditUser } from '../../../actions'

export const UserForm = createForm(userFormConfig, {post: {fetchAction: fetchAddUser}, put: {fetchAction: fetchEditUser}})
