import styles from "./Button.module.scss";
import classNames from "classnames/bind";
//  Botón PreNavbar @CantosCDenise
//  Botón Navbar @CantosCDenise
//  Botón Compra @MartinGergov
//  Botón Articulo - Card Blogs @MartinGergov
//  Botón redes - Footer @MartinGergov
const cx = classNames.bind(styles);
const Button = ({
  texto,
  isMain,
  isGamezone,
  handleClick,
  iconLeft,
  iconRight,
}) => {
  const classNames = cx({
    button: true,
    main: isMain,
    gamezone: isGamezone,
  });
  return (
    <button className={classNames} onClick={handleClick}>
      {iconLeft && iconLeft}
      <div className={styles.iconLeft}></div>
      {texto}
      {iconRight && iconRight}
    </button>
  );
};

export default Button;
