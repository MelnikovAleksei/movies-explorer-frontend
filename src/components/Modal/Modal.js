import React, { createContext, useContext, createRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalContext = createContext();

function Modal({ children, modalIsOpen, onModalClose }) {

  const modalRef = createRef();

  const setFocusOnCloseModalButton = () => {
    const closeModalButton = modalRef.current.querySelector('button');

    closeModalButton.focus();
  }

  const keyListenersMap = new Map([['Escape', onModalClose]]);

  useEffect(() => {
    const keyListeter = (evt) => {
      const listener = keyListenersMap.get(evt.key);
      if (listener) {
        listener(evt);
      }
    }

    document.addEventListener('keydown', keyListeter);

    return () => {
      document.removeEventListener('keydown', keyListeter);
    }
  })

  useEffect(() => {
    const handleClickClose = (evt) => {
      if (evt.target.classList.contains('overlay')) {
        onModalClose();
      }
    }

    document.addEventListener('click', handleClickClose);
    return () => {
      document.removeEventListener('click', handleClickClose);
    }
  })

  useEffect(() => {
    if (modalIsOpen) {
      setFocusOnCloseModalButton()
    }
  }, [modalIsOpen])

  return createPortal(
    <div
      className="modal overlay"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal__container"
      >
        <div
          className="modal__content"
          ref={modalRef}
        >
          <modalContext.Provider value={{ onModalClose }}>
            {children}
          </modalContext.Provider>
        </div>
      </div>
    </div>,
    document.body
  )
}

Modal.Header = function ModalHeader(props) {
  const { onModalClose } = useContext(modalContext);

  return (
    <header
      className="modal__header"
    >
      {props.children}
      <button
        className="modal__close-button"
        title="закрыть модальное окно меню"
        onClick={onModalClose}
      />
    </header>
  )
}

Modal.Body = function ModalBody(props) {
  return (
    <main
      className="modal__main"
    >
      {props.children}
    </main>
  )
}

Modal.Footer = function ModalFooter(props) {
  return (
    <footer
      className="modal__footer"
    >
      {props.children}
    </footer>
  )
}

export default Modal;
