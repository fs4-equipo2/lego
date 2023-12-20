import styles from "./Input.module.scss";
const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <div className={styles.container}>
      {type === "text" && (
        <input
          className={styles.text}
          value={value}
          placeholder={placeholder}
          type="text"
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {type === "password" && (
        <input
          className={styles.password}
          placeholder={placeholder}
          value={value}
          type="password"
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {type === "number" && (
        <input
          className={styles.number}
          placeholder={placeholder}
          value={value}
          type="number"
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {type === "checkbox" && (
        <input
          className={styles.checkbox}
          checked={value}
          type="checkbox"
          onChange={(e) => onChange(e.target.checked)}
        />
      )}
    </div>
  );
};

export default Input;
