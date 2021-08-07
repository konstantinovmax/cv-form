import React from 'react';
import './Modal.css';

function Modal(props) {

  function handleClickLayoutModalClose(e) {
    if (e.target === e.currentTarget) {
        props.onClose();
    }
  };

  React.useEffect(() => {
    function handleClickEscapeModalClose(e) {
      if (e.key === 'Escape') {
        props.onClose();
      }
    }
    window.addEventListener('keydown', handleClickEscapeModalClose);
    return () => window.removeEventListener('keydown', handleClickEscapeModalClose);
  });

  return (
    <div className={`modal modal_type_${props.name} ${props.isOpen && 'modal_is-open'}`} onClick={handleClickLayoutModalClose}>
      <div className={`modal__container modal__container_type_${props.name}`}>
        {props.children}
      </div>  
    </div>
  );
}

export default Modal;
