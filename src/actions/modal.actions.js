export const SHOW_MODAL = 'SHOW_MODAL'
export const showModal = (confirmAction) => ({
    type: SHOW_MODAL,
    visible: true,
    confirmAction
})

export const HIDE_MODAL = 'HIDE_MODAL'
export const hideModal = () => ({
    type: HIDE_MODAL,
    visible: false
})
