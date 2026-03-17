import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  secondButtonText,
  title,
  isOpen,
  onSecondButtonClick,
  closeActiveModal,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen && "modal__opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          aria-label="Close form modal"
          onClick={closeActiveModal}
          className="modal__close-btn"
          type="button"
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__buttons">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            {secondButtonText && (
              <button
                type="button"
                className="modal__switch"
                onClick={onSecondButtonClick}
              >
                {secondButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
