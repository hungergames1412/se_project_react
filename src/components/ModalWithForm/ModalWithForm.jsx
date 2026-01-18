import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen && "modal__opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          aria-label="Close form modal"
          onClick={onClose}
          className="modal__close-btn"
          type="button"
        ></button>
        <form className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
