import styles from "./Button.module.scss";
import classNames from "classnames/bind";
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
  id,
  isMain,
  isGamezone,
  isPrenavbar,
  isNavBar,
  isSubMenu,
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
  isBotonEspecial,
}) => {
  /**
   * Contexto de estilos
   */
  const classNames = cx({
    button: true,
    main: isMain,
    gamezone: isGamezone,
    prenavbar: isPrenavbar,
    redes: isRedes,
    deseos: isDeseos,
    buscador: isBuscador,
    bolsaCompra: isBolsaCompra,
    isNavBar: isNavBar,
    isSubMenu: isSubMenu,
    añadirBolsa: isAñadirBolsa,
    verArticulos: isArticulo,
    leeMas: isLeeMas,
    saberMas: isSaberMas,
    isBotonEspecial: isBotonEspecial,
  });

  return (
    <button id={id} className={classNames} onClick={handleClick}>
      {iconLeft && iconLeft}
      {texto}
      {iconRight && iconRight}
    </button>
  );
};

export default Button;
