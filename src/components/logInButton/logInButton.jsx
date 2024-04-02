
 
import styles from "./logInButton.module.scss";

export const LogInButton = ({ label, href }) => {
  return (
    <>
      <a className={styles.LogInButton} href={href} target="_blank">

        <p>{label}</p>
      </a>
    </>
  );
};
