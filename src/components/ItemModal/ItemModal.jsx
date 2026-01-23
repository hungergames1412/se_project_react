import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, handleDeleteClick }) {
  const handleDelete = () => {
    handleDeleteClick(card);
  };

  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          aria-label="Close item modal"
          onClick={onClose}
          className="modal__close-btn"
          type="button"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            onClick={handleDelete}
            type="button"
            className="modal__delete-item"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
