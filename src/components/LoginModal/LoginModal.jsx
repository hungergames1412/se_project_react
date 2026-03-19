import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm"; 

export default function LoginModal({
  closeActiveModal,
  isOpen,
  onLoginModalSubmit,
  onSecondButtonClick,
}) {

  const { values, setValues, handleChange } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({ email: "", password: "" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginModalSubmit(values);
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      secondButtonText="or Register"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onSecondButtonClick={onSecondButtonClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          id="login-email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="login-password" className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal__input"
          id="login-password"
          placeholder="Enter your password"
          minLength={8}
          maxLength={16}
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}