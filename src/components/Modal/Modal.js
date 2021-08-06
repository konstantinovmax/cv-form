import './Modal.css';

function Modal(props) {
  return (
    <div className={`modal modal_type_${props.name} ${props.isOpen && 'modal_is-open'}`}>
      <div className={`modal__container modal__container_type_${props.name}`}>
        {props.children}
      </div>  
    </div>
  );
}

export default Modal;
