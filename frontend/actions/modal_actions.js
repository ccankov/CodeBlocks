export const RECEIVE_MODAL = "RECEIVE_MODAL";

export const receiveModal = (modalType) => ({
  type: RECEIVE_MODAL,
  modalType
});

export const hideModal = () => ({
  type: RECEIVE_MODAL,
  modalType: null
});
