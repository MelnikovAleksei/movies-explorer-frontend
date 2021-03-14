import React from 'react';
import Modal from '../Modal/Modal';
import Notification from '../Notification/Notification';

function NotificationModal({
  isOpen,
  onClose,
  notificationText,
}) {

  const STYLE_SETTINGS = {
    overlay: 'notification-modal',
    container: 'notification-modal__container',
    content: 'notification-modal__content',
    header: 'notification-modal__header',
    closeButton: 'notification-modal__close-button',
    main: 'notification-modal__main',
    footer: 'notification-modal__footer',
  };

  return (
    <Modal
      modalIsOpen={isOpen}
      onClose={onClose}
      styleSettings={STYLE_SETTINGS}
    >
      <Modal.Header />
      <Modal.Body>
        <Notification
          text={notificationText}
        />
      </Modal.Body>
    </Modal>
  )
}

export default NotificationModal;
