import IconoCara from "./IconoCara";
import styles from "./logInButton.module.scss";

export const LogInButton = ({ label, icon, href }) => {
  return (
    <>
      <a className={styles.LogInButton} href={href} target="_blank">
        <>{icon}</>
        <IconoCara />
        <p>{label}</p>
      </a>
    </>
  );
};