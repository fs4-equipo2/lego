import React, { useRef, useState } from "react";
import styles from "./LinksNavbarResponsive.module.scss";
import Button from "../Button/Button";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import Tipografia from "../Tipografia/Tipografia";
import { SubMenuCompraNavbar } from "../subMenuCompraNavbar/subMenuCompraNavbar";
import { SubMenuDescubrirNavbar } from "../SubMenuDescubrirNavbar/SubMenuDescubrirNavbar";
import { FaChevronLeft } from "react-icons/fa6";

const LinksNavbarResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Todo el menú
  const [isCompraVisible, setIsCompraVisible] = useState(false); // Secciones
  const [isDescubrirVisible, setIsDescubrirVisible] = useState(false); // Secciones
  const [isAyudaVisible, setIsAyudaVisible] = useState(false); // Secciones
  const [isReturnMenu, setIsReturnMenu] = useState(false); //Flecha retorno

  const menuRef = useRef(null);

  function handleClick(event) {
    setIsMenuOpen(true);
    setIsCompraVisible(false);
    setIsDescubrirVisible(false);
    setIsAyudaVisible(false);
    setIsReturnMenu(false);

    switch (event.target.id) {
      case "compra":
        setIsCompraVisible(true);
        setIsAyudaVisible(false);
        setIsDescubrirVisible(false);
        setIsReturnMenu(true);
        break;
      case "descubrir":
        setIsDescubrirVisible(true);
        setIsCompraVisible(false);
        setIsAyudaVisible(false);
        setIsReturnMenu(true);
        break;
      case "ayuda":
        setIsAyudaVisible(true);
        setIsDescubrirVisible(false);
        setIsCompraVisible(false);
        setIsReturnMenu(true);
        break;
    }
  }

  const handleReturnMenu = () => {
    setIsReturnMenu(false);
    setIsMenuOpen(false);
  };

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
        <div
          className={
            isReturnMenu
              ? `${styles.menuTitlePointer} ${styles.menuTitle}`
              : styles.menuTitle
          }
          onClick={handleReturnMenu}
        >
          {isReturnMenu && <FaChevronLeft />}
          <Tipografia color={"--black"} texto={"MENÚ"} isBodyXL isBoldWeight />
        </div>
        {isMenuOpen && (
          <div className={styles.menu}>
            {isCompraVisible && isReturnMenu && (
              <>
                <div className={styles.menuSelectionTitle}>
                  <Tipografia color="--white" texto={"COMPRAR"} isBodyMedium />
                </div>
                <div className={styles.compraClickeable}></div>
                <div className={styles.compra}>
                  <SubMenuCompraNavbar handleClicker={closeSubMenu} />
                </div>
              </>
            )}

            {isDescubrirVisible && isReturnMenu && (
              <>
                <div className={styles.menuSelectionTitle}>
                  <Tipografia color="--white" texto={"DESCUBRIR"} isBodyMedium />
                </div>
                <div className={styles.descubrirClickeable}>
                  <div className={styles.descubrir}>
                    <SubMenuDescubrirNavbar handleClicker={closeSubMenu} />
                  </div>
                </div>
              </>
            )}

            {/* AYUDA */}
            {isAyudaVisible && isReturnMenu && (
              <>
                <div className={styles.menuSelectionTitle}>
                  <Tipografia color="--white" texto={"AYUDA"} isBodyMedium />
                </div>
                <div className={styles.descubrirClickeable}>
                  <div className={styles.ayuda}>
                    {subMenuAyuda.map((item) => (
                      <Tipografia
                        key={item}
                        color="--black"
                        texto={item}
                        isBodyXL
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {!isReturnMenu && (
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
            <Button
              isNavBar
              texto="AYUDA"
              id="ayuda"
              handleClick={handleClick}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LinksNavbarResponsive;
