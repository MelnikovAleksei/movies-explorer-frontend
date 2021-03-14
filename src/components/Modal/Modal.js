import React, { createContext, useContext, createRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalContext = createContext();

function Modal({
  children,
  isOpen,
  onClose,
  styleSettings,
}) {

  const modalRef = createRef();

  const setFocusOnCloseModalButton = () => {
    const closeModalButton = modalRef.current.querySelector('button');

    closeModalButton.focus();
  }

  const keyListenersMap = new Map([['Escape', onClose]]);

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
        onClose();
      }
    }

    document.addEventListener('click', handleClickClose);
    return () => {
      document.removeEventListener('click', handleClickClose);
    }
  })

  useEffect(() => {
    if (isOpen) {
      setFocusOnCloseModalButton()
    }
  }, [isOpen])

  return createPortal(
    <div
      className={`${styleSettings.overlay} overlay`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styleSettings.container}
      >
        <div
          className={styleSettings.content}
          ref={modalRef}
        >
          <modalContext.Provider value={{ onClose, styleSettings }}>
            {children}
          </modalContext.Provider>
        </div>
      </div>
    </div>,
    document.body
  )
}

Modal.Header = function ModalHeader(props) {
  const { onClose, styleSettings } = useContext(modalContext);

  return (
    <header
      className={styleSettings.header}
    >
      {props.children}
      <button
        className={styleSettings.closeButton}
        title="закрыть модальное окно меню"
        onClick={onClose}
      />
    </header>
  )
}

Modal.Body = function ModalBody(props) {
  const { styleSettings } = useContext(modalContext);

  return (
    <main
      className={styleSettings.main}
    >
      {props.children}
    </main>
  )
}

Modal.Footer = function ModalFooter(props) {
  const { styleSettings } = useContext(modalContext);

  return (
    <footer
      className={styleSettings.footer}
    >
      {props.children}
    </footer>
  )
}

export default Modal;
