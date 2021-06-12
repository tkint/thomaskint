import { Modal } from 'bootstrap';
import { onMounted, onUnmounted } from 'vue';

export default () => {
  const modalId = `modal-${(Math.random() * 1000).toFixed(0)}`;

  const getModalDiv = () => document.getElementById(modalId);
  const getModalInstance = () => {
    const modalDiv = getModalDiv();
    if (modalDiv) {
      let instance = Modal.getInstance(modalDiv);
      if (!instance) {
        instance = new Modal(modalDiv);
      }
      return instance;
    }
    return null;
  };

  const showModal = () => {
    getModalInstance()?.show();
  };

  const hideModal = () => {
    getModalInstance()?.hide();
  };

  let hideFn: Function;
  const onHide = (callback: Function) => {
    hideFn = callback;
  };

  const executeHideFn = () => !!hideFn && hideFn();
  onMounted(() => {
    getModalDiv()?.addEventListener('hidden.bs.modal', executeHideFn);
  });

  onUnmounted(() => {
    getModalDiv()?.removeEventListener('hidden.bs.modal', executeHideFn);
  });

  return {
    modalId,
    getModalDiv,
    showModal,
    hideModal,
    onHide,
  };
};
