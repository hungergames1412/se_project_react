import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({
  activeModal,
  closeActiveModal,
  selectedCard,
  handleDeleteClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  if (activeModal !== "preview" || !selectedCard) return null;

  const ownerId =
    typeof selectedCard.owner === "string"
      ? selectedCard.owner
      : selectedCard.owner?._id;

  const isOwn = ownerId === currentUser?._id;

  return (
    <div className="modal modal__opened">
      <div className="modal__content modal__content_type_image">
        <button
          aria-label="Close item modal"
          onClick={closeActiveModal}
          className="modal__close-btn"
          type="button"
        />

        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image"
        />

        <div className="modal__footer">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p className="modal__weather">Weather: {selectedCard.weather}</p>

          {isOwn && (
            <button
              onClick={handleDeleteClick}
              type="button"
              className="modal__delete-item"
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
