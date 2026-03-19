import { useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfileModal({
  closeActiveModal,
  isOpen,
  onEditModalSubmit,
}) {
  const currentUser = useContext(CurrentUserContext);

  const { values, setValues, handleChange } = useForm({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({ name: currentUser.name, avatar: currentUser.avatar });
    }
  }, [isOpen, currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditModalSubmit(values);
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Finalize changes"
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label htmlFor="profile-name" className="modal__label">
        Name
        <input
          type="text"
          name="name"
          className="modal__input"
          id="profile-name"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="profile-imageURL" className="modal__label">
        Avatar Image URL
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="profile-imageURL"
          placeholder="Image URL"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}