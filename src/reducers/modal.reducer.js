import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../actions'

export default function modal(state={visible: false}, action){
    switch(action.type){
        case SHOW_MODAL:
            return Object.assign({}, state, {visible: action.visible, confirmAction: action.confirmAction, modalType: action.modalType, text: action.text})
        case HIDE_MODAL:
            return Object.assign({}, state, {visible: action.visible})
        default:
            return state
    }
}
