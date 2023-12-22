import React, { useRef, useState } from "react";
import styles from "./SubMenuNavbar.module.scss";
import Button from "../Button/Button";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import Tipografia from "../Tipografia/Tipografia";

import {
  subComprarTema,
  subComprarPrecios,
  subComprarArticulos,
  subComprarIntereses,
  subComprarPickBuild,
  subDescubirValores,
  subDescubirApps,
  subDescubrirRevistas,
  subComprarEdades,
} from "./SubMenu.constants";

const SubMenuNavbar = ({ isSetsPorTemasOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubCompraVisible, setIsSubCompraVisible] = useState(false);
  const [isSubDescubrirVisible, setIsSubDescubrirVisible] = useState(false);

  const [temas, setTemas] = useState(false);

  function handleClickDescubrir(event) {
    setIsSubMenuOpen(true);

    switch (event.target.id) {
      case "valores":
        valores(true);
        apps(false);
        revistas(false);
        break;

      case "apps":
        setvalores(false);
        apps(true);
        revistas(false);
        break;

      case "revistas":
        valores(false);
        apps(false);
        revistas(true);
        break;
    }
  }

  return (
    <div className={styles.subMenu}>
      {isSetsPorTemasOpen && <h1>sets por tema</h1>}
      {/* {isEdadesOpen && <h1>Mostra edades</h1>} */}
      {/* {isSubCompraVisible && (
            <div className={styles.subCompra}>
              {subComprarEdades.map((item) => (
                <Button
                  isSubMenu
                  texto={`${item.texto}`}
                  id={item.id}
                  handleClick={handleClickCompra}
                />
              ))}
            </div>
          )}
          {isSubCompraVisible && (
            <div className={styles.subCompra}>
              {subComprarPrecios.map((item) => (
                <Button
                  isSubMenu
                  texto={`${item}`}
                  //id="compra"
                  //handleClick={handleClick} ahora no
                />
              ))}
            </div>
          )}

          {isSubDescubrirVisible && (
            <div className={styles.subDescubrir}>
              {subDescubirValores.map((item) => (
                <Button
                  isSubMenu
                  texto={`${item}`}
                  //id="compra"
                  //handleClick={handleClick} ahora no
                />
              ))}
            </div>
          )}
          {isSubDescubrirVisible && (
            <div className={styles.subDescubrir}>
              {subDescubirApps.map((item) => (
                <Button
                  isSubMenu
                  texto={`${item}`}
                  //id="compra"
                  //handleClick={handleClick} ahora no
                />
              ))}
            </div>
          )} */}
    </div>
  );
};

export default SubMenuNavbar;
