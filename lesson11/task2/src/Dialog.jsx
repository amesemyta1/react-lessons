/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import React from 'react';

const Dialog = ({ isOpen, children, title, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog">
      <div className="dialog__heading">
        <div className="dialog__title">{title}</div>
        <buttom className="dialog__close-btn" onClick={onClose}>
          +
        </buttom>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

export default Dialog;
