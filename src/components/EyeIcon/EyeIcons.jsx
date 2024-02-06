import { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { useForm } from "../../hooks/useForm";
import styles from "../LogInModal/LogInModal.module.scss"

const EyeIcons = {
  open: <GoEye />,
  closed: <GoEyeClosed />,
};

const PasswordToggle = () => {
  const { password, onInputChange } = useForm();
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const togglePassword = () => {
    setIsEyeOpen((prevState) => !prevState);
  };

  return (
    <div>
      <input
        type={isEyeOpen ? "text" : "password"}
        id={styles.logInInput}
        placeholder="Contraseña"
        value={password}
        name="password"
        onChange={onInputChange}
      />
      <i id={styles.iconInput}
        className={`${isEyeOpen ? "open" : ""}`}
        onClick={togglePassword}
      >
        {isEyeOpen ? EyeIcons.closed : EyeIcons.open}
      </i>
    </div>
  );
};

export default PasswordToggle;
