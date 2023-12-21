import styles from "./JoinButton.module.scss"
import stylesTwo from "./loginButton.module.scss"
import IconoCara from "../logInButton/IconoCara";

export const MixButton = ({ isLogin, label, icon, href }) => {
  return (
    <>
      <a className={isLogin ? stylesTwo.LogInButton : styles.joinButton} href={href} target="_blank">
        {icon}
        {isLogin && <IconoCara />}
        <p>{label}</p>
      </a>
    </>
  );
};
