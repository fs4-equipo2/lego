import styles from "./JoinButton.module.scss";
export const JoinButton = ({ label, icon, href }) => {
  return (
    <>
      <a className={styles.joinButton} href={href} target="_blank">
        <img src={icon} alt="join logo" />
        <p>{label}</p>
      </a>
    </>
  );
};
