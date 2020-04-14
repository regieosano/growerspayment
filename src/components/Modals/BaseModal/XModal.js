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
}) {
  return (
    <>
      <div>
        <Modal isOpen={isModalOpen} size={modalSize}>
          <div>
            <h5 id={modalId}>{modalTitle}</h5>
          </div>
          <ModalBody>{modalBody}</ModalBody>
          <ModalFooter>
            <button
              type='button'
              className='button-design'
              disabled={isValidForm}
              id='generate-report'
              name='generateReport'
              onClick={onHandleToggleModal}>
              {buttonHappyText}
            </button>

            <button
              className='button-design'
              id='cancel'
              name='cancel'
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
