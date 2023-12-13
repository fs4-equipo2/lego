import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Input = ({ placeholder, type, value, onChange }) => {
  /**
   * Contexto de estilos
   */

  const classNames = cx({
    text: type === "text" && true,
    password: type === "password" && true,
    number: type === "number" && true,
    checkbox: type === "checkbox" && true,
  });
  return (
    <div className={styles.container}>
      <input
        className={classNames}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
