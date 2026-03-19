import "./ModalWithForm.css";

function ModalWithForm({
  title,
  isOpen,
  closeActiveModal,
  onSubmit,
  buttonText = "Submit",
  secondButtonText,
  onSecondButtonClick,
}) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>

        <button
          aria-label="Close form modal"
          onClick={closeActiveModal}
          className="modal__close-btn"
          type="button"
        />

        <form onSubmit={onSubmit} className="modal__form">
          {/* Example text input */}
          <label htmlFor="name" className="modal__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="modal__input modal__input--large"
          />

          {/* Example radio buttons */}
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Choose an option</legend>

            <label className="modal__label_type_radio">
              <input
                type="radio"
                name="option"
                className="modal__radio-input"
              />
              Option 1
            </label>

            <label className="modal__label_type_radio">
              <input
                type="radio"
                name="option"
                className="modal__radio-input"
              />
              Option 2
            </label>
          </fieldset>

          {/* Buttons */}
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
