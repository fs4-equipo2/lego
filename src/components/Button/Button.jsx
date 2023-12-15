import styles from "./Button.module.scss";
import classNames from "classnames/bind";
//  Botón PreNavbar @CantosCDenise
//  Botón Navbar @CantosCDenise
//  Botón redes - Footer @MartinGergov
const cx = classNames.bind(styles);

/**
 *
 * @param {string} texto - Texto que se va a renderizar en el boton
 * @param {boolean} isMain - True si el boton es Main
 * @param {boolean} isGamezone - True si el boton es Gamezone
 * @param {boolean} isPrenavbar - True si el boton es Prenavbar
 * @param {boolean} isNavBar - True si el boton es NavBar
 * @param {Callback} handleClick - Callback que se va a ejecutar con el click del boton
 * @param {JSX.Element} iconLeft - Icono de la izquierda
 * @param {JSX.Element} iconRight - Icono de la derecha
 * @returns
 */
const Button = ({
  texto,
  isMain,
  isGamezone,
  isPrenavbar,
  isNavBar,
  isAñadirBolsa,
  isArticulo,
  isDeseos,
  isBuscador,
  isBolsaCompra,
  isRedes,
  isLeeMas,
  isSaberMas,
  handleClick,
  iconLeft,
  iconRight,
}) => {
  /**
   * Contexto de estilos
   */
  const classNames = cx({
    button: true,
    main: isMain,
    gamezone: isGamezone,
    prenavbar: isPrenavbar,
    deseos: isDeseos,
    buscador: isBuscador,
    bolsaCompra: isBolsaCompra,
    isNavBar: isNavBar,
    añadirBolsa: isAñadirBolsa,
    verArticulos: isArticulo,
    leeMas: isLeeMas,
    saberMas: isSaberMas

  });

  return (
    <button className={classNames} onClick={handleClick}>
      {iconLeft && iconLeft}
      {texto}
      {iconRight && iconRight}
      
    </button>
  );
};

export default Button;
