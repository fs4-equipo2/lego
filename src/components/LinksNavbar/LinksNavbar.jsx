import React, { useRef, useState } from "react";
import styles from "./LinksNavbar.module.scss";
import Button from "../Button/Button";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import Tipografia from "../Tipografia/Tipografia";
import { SubMenuCompraNavbar } from "../SubMenuCompraNavbar/SubMenuCompraNavbar";
import { SubMenuDescubrirNavbar } from "../SubMenuDescubrirNavbar/SubMenuDescubrirNavbar";

const LinksNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompraVisible, setIsCompraVisible] = useState(false);
  const [isDescubrirVisible, setIsDescubrirVisible] = useState(false);
  const [isAyudaVisible, setIsAyudaVisible] = useState(false);

  const menuRef = useRef(null);

  function handleClick(event) {
    setIsMenuOpen(true);
    setIsCompraVisible(false);
    setIsDescubrirVisible(false);
    setIsAyudaVisible(false);

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

  const subMenuAyuda = [
    "Comprobar el estado de un pedido",
    "Envíos y devoluciones",
    "Encontrar una tienda",
    "Instrucciones de construcción",
    "Preguntas frecuentes",
    "Ponte en contacto con nosotros",
    "Piezas de repuesto",
  ];

  const closeSubMenu = () => {
    setIsCompraVisible(true);
    setIsDescubrirVisible(false);
    setIsAyudaVisible(false);
  };

  useOutsideAlerter(menuRef, () => {
    setIsMenuOpen(false);
    closeSubMenu();
  });

  return (
    <>
      <div ref={menuRef}>
        {isMenuOpen && (
          <div className={styles.menu}>
            {isCompraVisible && (
              <>
                <div className={styles.compraClickeable}></div>
                <div className={styles.compra}>
                  <SubMenuCompraNavbar handleClicker={closeSubMenu} />
                </div>
              </>
            )}

            {isDescubrirVisible && (
              <>
                <div className={styles.descubrirClickeable}>
                  <div className={styles.descubrir}>
                    <SubMenuDescubrirNavbar handleClicker={closeSubMenu} />
                  </div>
                </div>
              </>
            )}

            {/* AYUDA */}
            {isAyudaVisible && (
              <>
                <div className={styles.descubrirClickeable}>
                  <div className={styles.ayuda}>
                    {subMenuAyuda.map((item) => (
                      <Tipografia key={item} texto={item} isBodyXL />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        <div className={styles.links}>
          <Button
            isNavBar
            texto="COMPRAR"
            id="compra"
            handleClick={handleClick}
          />
          <Button
            isNavBar
            texto="DESCUBRIR"
            id="descubrir"
            handleClick={handleClick}
          />
          <Button isNavBar texto="AYUDA" id="ayuda" handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default LinksNavbar;
