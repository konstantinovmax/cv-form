import './SuccessModal.css';
import Modal from '../Modal/Modal';

function SuccessModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} name="success-modal">
        <h2 className="success-modal__title">{`Спасибо ${props.userName}!`}</h2>
        <p className="success-modal__text">Мы скоро свяжемся с вами</p>
        <button type="button" className="success-modal__submit-button" onClick={props.onClose}>Понятно</button>
        <button type="reset" className="success-modal__close-button" onClick={props.onClose} />
    </Modal>
  );
}

export default SuccessModal;
