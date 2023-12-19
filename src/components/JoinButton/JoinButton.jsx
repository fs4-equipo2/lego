import styles from "./JoinButton.module.scss";
export const JoinButton = ({ label, icon, href }) => {
  return (
    <>
      <a className={styles.joinButton} href={href} target="_blank">
        {icon}
        <p>{label}</p>
      </a>
    </>
  );
};
