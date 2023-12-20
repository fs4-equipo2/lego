import React, { useRef, useState } from "react";
import styles from "./LinksNavbar.module.scss";
import Button from "../Button/Button";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
const LinksNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompraVisible, setIsCompraVisible] = useState(false);
  const [isDescubrirVisible, setIsDescubrirVisible] = useState(false);
  const [isAyudaVisible, setIsAyudaVisible] = useState(false);

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

  useOutsideAlerter(menuRef, () => setIsMenuOpen(false));
  return (
    <div ref={menuRef}>
      {isMenuOpen && (
        <div className={styles.menu}>
          {isCompraVisible && (
            <div className={styles.compra}>SUBMENU DE COMPRA</div>
          )}
          {isDescubrirVisible && (
            <div className={styles.descubrir}>SUBMENU DE DESCUBRIR</div>
          )}
          {isAyudaVisible && (
            <div className={styles.ayuda}>SUBMENU DE AYUDA</div>
          )}
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
      </div>
    </div>
  );
};

export default LinksNavbar;
