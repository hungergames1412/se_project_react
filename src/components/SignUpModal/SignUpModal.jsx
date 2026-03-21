import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

export default function SignUpModal({
  closeActiveModal,
  isOpen,
  onSignUpModalSubmit,
  onSecondButtonClick,
}) {
  const { values, setValues, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({ email: "", password: "", name: "", avatarUrl: "" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUpModalSubmit(values);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      secondButtonText="or Log In"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onSecondButtonClick={onSecondButtonClick}
    >
      <label htmlFor="signup-email" className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          id="signup-email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="signup-password" className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal__input"
          id="signup-password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="signup-name" className="modal__label">
        Name *
        <input
          type="text"
          name="name"
          className="modal__input"
          id="signup-name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="signup-avatar" className="modal__label">
        Avatar URL *
        <input
          type="text"
          name="avatarUrl"
          className="modal__input"
          id="signup-avatar"
          placeholder="Avatar URL"
          value={values.avatarUrl}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}
