import IconoCara from "../logInButton/IconoCara";
import styles from "./JoinButton.module.scss";
import stylesTwo from "./loginButton.module.scss";


export const MixButton = ({ isLogin, label, icon, onClick }) => {
  return (
    <>
      <button
        className={isLogin ? stylesTwo.LogInButton : styles.joinButton}
        target="_blank"
        onClick={onClick}
      >
        {icon}
        {isLogin && <IconoCara />}
        <p>{label}</p>
      </button>
    </>
  );
};
