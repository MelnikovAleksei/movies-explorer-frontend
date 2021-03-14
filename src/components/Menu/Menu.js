import React from 'react';
import Modal from '../Modal/Modal';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import MobileAccountNavList from '../MobileAccountNavList/MobileAccountNavList';

function Menu({
  isOpen,
  onClose,
}) {

  const STYLE_SETTINGS = {
    overlay: 'menu-modal',
    container: 'menu-modal__container',
    content: 'menu-modal__content',
    header: 'menu-modal__header',
    closeButton: 'menu-modal__close-button',
    main: 'menu-modal__main',
    footer: 'menu-modal__footer',
  };

  return (
    <Modal
      modalIsOpen={isOpen}
      onClose={onClose}
      styleSettings={STYLE_SETTINGS}
    >
      <Modal.Header />
      <Modal.Body>
        <MobileNavigation
          onModalClose={onClose}
        />
      </Modal.Body>
      <Modal.Footer>
        <MobileAccountNavList
          onModalClose={onClose}
        />
      </Modal.Footer>
    </Modal>
  )
}

export default Menu;
