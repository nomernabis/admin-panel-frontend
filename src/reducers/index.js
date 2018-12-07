import { combineReducers } from 'redux'

import login from './login.reducer'
import user from './user.reducer'
import modal from './modal.reducer'

export default combineReducers({ login, user, modal })
