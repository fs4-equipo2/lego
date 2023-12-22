import React, { useRef, useState } from "react";
import styles from "./LinksNavbar.module.scss";
import Button from "../Button/Button";
import { FaChevronRight } from "react-icons/fa6";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import Tipografia from "../Tipografia/Tipografia";
import SubMenuNavbar from "../SubMenuNavbar/SubMenuNavbar";
import {
  subMenuAyuda,
  subMenuCompraClickeable,
  subMenuDescubrir,
  subMenuDescubrirClickeable,
} from "./LinksNavbar.contants";
const LinksNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompraVisible, setIsCompraVisible] = useState(false);
  const [isDescubrirVisible, setIsDescubrirVisible] = useState(false);
  const [isAyudaVisible, setIsAyudaVisible] = useState(false);

  const [isSetsPorTemasOpen, setIsSetsPorTemasOpen] = useState(false);

  const menuRef = useRef(null);

  function handleClick(event) {
    setIsMenuOpen(true);

    switch (event.target.id) {
      case "compra":
        setIsCompraVisible(true);
        setIsAyudaVisible(false);
        setIsDescubrirVisible(false);

        break;
      case "descubrir":
        setIsDescubrirVisible(true);
        setIsCompraVisible(false);
        setIsAyudaVisible(false);

        break;
      case "ayuda":
        setIsAyudaVisible(true);
        setIsDescubrirVisible(false);
        setIsCompraVisible(false);

        break;
    }
  }

  function handleClickCompra(event) {
    console.log(event.target.id);
    switch (event.target.id) {
      case "setsTema":
        console.log("sets temas");
        setIsSetsPorTemasOpen(true);
        // edades(false);
        // rangoPrecios(false);
        // articulosLEGO(false);
        // intereses(false);
        // pickBuild(false);
        break;

      case "edades":
        console.log("edades");
        setIsSetsPorTemasOpen(false);
        // edades(true);
        // rangoPrecios(false);
        // articulosLEGO(false);
        // intereses(false);
        // pickBuild(false);
        break;

      case "rangoPrecios":
        console.log("rangos precios");
        setIsSetsPorTemasOpen(false);
        // edades(false);
        // rangoPrecios(true);
        // articulosLEGO(false);
        // intereses(false);
        // pickBuild(false);
        break;

      case "articulosLEGO":
        console.log("articulos");

        setIsSetsPorTemasOpen(false);
        // edades(false);
        // rangoPrecios(false);
        // articulosLEGO(true);
        // intereses(false);
        // pickBuild(false);
        break;

      case "intereses":
        console.log("intereses");

        setIsSetsPorTemasOpen(false);
        // edades(false);
        // rangoPrecios(false);
        // articulosLEGO(false);
        // intereses(true);
        // pickBuild(false);
        break;

      case "pickBuild":
        setIsSetsPorTemasOpen(false);
        // edades(false);
        // rangoPrecios(false);
        // articulosLEGO(false);
        // intereses(false);
        // pickBuild(true);
        break;
    }
  }

  useOutsideAlerter(menuRef, () => setIsMenuOpen(false));
  return (
    <div ref={menuRef}>
      {isMenuOpen && (
        <div className={styles.menu}>
          {isCompraVisible && (
            <div className={styles.compraClickeable}>
              {subMenuCompraClickeable.map((item) => (
                <Button
                  isSubMenu
                  texto={`${item.texto}`}
                  iconRight={item.icono}
                  id={item.id}
                  handleClick={handleClickCompra} //no me la toma porque esta en sub T.T
                />
              ))}
            </div>
          )}

          {isDescubrirVisible && (
            <div className={styles.descubrirClickeable}>
              {subMenuDescubrirClickeable.map((item) => (
                <Button
                  isSubMenu
                  texto={`${item}`}
                  iconRight={<FaChevronRight />}
                  //id="compra"
                  //handleClick={handleClickDescubrir} //no me la toma porque esta en sub T.T
                />
              ))}
            </div>
          )}
          {isDescubrirVisible && (
            <div className={styles.descubrir}>
              {subMenuDescubrir.map((item) => (
                <Tipografia
                  key={item}
                  color={" --black"}
                  texto={`${item}`}
                  isBodyLarge
                  isRegularWeight
                />
              ))}
            </div>
          )}

          {isAyudaVisible && (
            <div className={styles.ayuda}>
              {subMenuAyuda.map((item) => (
                <Tipografia
                  key={item}
                  color={" --black"}
                  texto={`${item}`}
                  isBodyLarge
                  isRegularWeight
                />
              ))}
            </div>
          )}

          <SubMenuNavbar
            isSetsPorTemasOpen={isSetsPorTemasOpen}
            // isEdadesOpen={isEdadesOpen}
          />
        </div>
      )}

      <div className={styles.links}>
        <Button
          isNavBar
          texto={"COMPRAR"}
          id="compra"
          handleClick={handleClick}
        />
        <Button
          isNavBar
          texto={"DESCUBRIR"}
          id="descubrir"
          handleClick={handleClick}
        />
        <Button isNavBar texto={"AYUDA"} id="ayuda" handleClick={handleClick} />
        <Button isBotonEspecial texto={"NAVIDAD"} />
      </div>
    </div>
  );
};

export default LinksNavbar;
