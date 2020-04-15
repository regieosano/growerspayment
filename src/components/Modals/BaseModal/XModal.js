import React from "react";

import { Modal, ModalBody, ModalFooter } from "reactstrap";

import "./XModal.scss";

function XModal({
  isModalOpen,
  onHandleToggleModal,
  modalSize,
  modalTitle,
  modalId,
  modalBody,
  buttonHappyText,
  buttonSadText,
  isValidForm,
  isDisableButton,
}) {
  return (
    <>
      <div>
        <Modal isOpen={isModalOpen} size={modalSize}>
          <ModalBody>{modalBody}</ModalBody>
          <ModalFooter>
            {isDisableButton && (
              <span id='pdf-message'>
                PDF will be saved in your Downloads folder.
              </span>
            )}
            <button
              type='button'
              className='button-design'
              disabled={isValidForm}
              id='generate-report'
              name='generateReport'
              disabled={isDisableButton}
              onClick={onHandleToggleModal}>
              {buttonHappyText}
            </button>
            <button
              className='button-design'
              id='cancel'
              name='cancel'
              disabled={isDisableButton}
              onClick={onHandleToggleModal}>
              {buttonSadText}
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default XModal;
