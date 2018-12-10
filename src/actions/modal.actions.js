export const SHOW_MODAL = 'SHOW_MODAL'
export const showModal = (modalType, text, confirmAction) => ({
    type: SHOW_MODAL,
    visible: true,
    confirmAction,
    modalType,
    text
})

export const HIDE_MODAL = 'HIDE_MODAL'
export const hideModal = () => ({
    type: HIDE_MODAL,
    visible: false
})
