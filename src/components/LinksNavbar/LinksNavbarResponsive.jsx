import React, { useRef, useEffect, useState } from "react";
import styles from "./LinksNavbarResponsive.module.scss";
import Button from "../Button/Button";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import Tipografia from "../Tipografia/Tipografia";
import { SubMenuCompraNavbar } from "../SubMenuCompraNavbar/SubMenuCompraNavbar";
import { SubMenuDescubrirNavbar } from "../SubMenuDescubrirNavbar/SubMenuDescubrirNavbar";
import {
  FaArrowLeftLong,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { MixButton } from "../MixButton/MixButton";
import { IconoJoin } from "../MixButton/IconoJoin";
import { useStoreState } from "../../store";
import { TbLego } from "react-icons/tb";

const LinksNavbarResponsive = ({ handleCloseModal, handleOpenLogin }) => {
  const { user } = useStoreState((state) => state.user);
  const { productos } = useStoreState((state) => state.carrito);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Todo el menú
  const [isCompraVisible, setIsCompraVisible] = useState(false); // Secciones
  const [isDescubrirVisible, setIsDescubrirVisible] = useState(false); // Secciones
  const [isAyudaVisible, setIsAyudaVisible] = useState(false); // Secciones
  const [isReturnMenu, setIsReturnMenu] = useState(false); //Flecha retorno

  const menuRef = useRef(null);

  function openModalLogIn() {
    handleCloseModal();
    handleOpenLogin();
  }

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

  useEffect(() => {
    setIsReturnMenu(false);
  }, [handleCloseModal])


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
                  <SubMenuCompraNavbar handleClicker={() => {}} />
                </div>
              </>
            )}

            {isDescubrirVisible && isReturnMenu && (
              <>
                <div className={styles.menuSelectionTitle}>
                  <Tipografia
                    color="--white"
                    texto={"DESCUBRIR"}
                    isBodyMedium
                  />
                </div>
                <div className={styles.descubrirClickeable}>
                  <div className={styles.descubrir}>
                    <SubMenuDescubrirNavbar handleClicker={() => {}} />
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
            <div className={styles.zonaJuegosBoton}>
              <Button
                id={styles.zonaJuegosBotonID}
                texto={"ZONA DE JUEGOS"}
                isGamezone={true}
                iconLeft={<FaArrowLeftLong />}
                handleClick={() => console.log("router.push(/login)")}
              />
            </div>
            <div
              className={styles.linksResponInicio}
              onClick={handleCloseModal}
            >
              <Tipografia color="--black" texto={"INICIO"} isBodyMedium />
            </div>
            <div className={styles.seccionesSidebarContainer}>
              <Button
                isNavBar
                texto="COMPRAR"
                id="compra"
                handleClick={handleClick}
              />
              <Button iconRight={<FaChevronRight />} />
            </div>
            <div className={styles.seccionesSidebarContainer}>
              <Button
                isNavBar
                texto="DESCUBRIR"
                id="descubrir"
                handleClick={handleClick}
              />
              <Button iconRight={<FaChevronRight />} />
            </div>
            <div className={styles.seccionesSidebarContainer}>
              <Button
                isNavBar
                texto="AYUDA"
                id="ayuda"
                handleClick={handleClick}
              />
              <Button iconRight={<FaChevronRight />} />
            </div>
            <div className={styles.loginBoton}>
              <MixButton
                isLogin={true}
                label={
                  user.isLoggedIn ? `${user.username} 🟢` : "Iniciar sesión"
                }
                href=""
                icon={<TbLego />}
                onClick={openModalLogIn}
              />
            </div>
            <div className={styles.uneteBoton}>
              <MixButton
                isLogin={false}
                label="Únete a LEGO® Insiders"
                href=""
                icon={<IconoJoin />}
              />
            </div>
            <div className={styles.listaDeseoBoton}>
              <Tipografia
                color="--black"
                texto={"Mi lista de deseos"}
                isBodyMedium
              />
            </div>
            <div className={styles.carritoBoton}>
              <Tipografia
                color="--black"
                texto={`Mi bolsa (${productos.length})`}
                isBodyMedium
              />
            </div>
            <div className={styles.localizacionCont}>
              <button className={styles.localizacionBoton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 25"
                  aria-hidden="true"
                  class="Icon__StyledSVG-lm07h6-0 eqVDRK RegionSelectorstyles__PointerIcon-sc-14dxhlg-2 izbKLk"
                >
                  <path
                    d="M8.303.89c2.065 0 3.92.818 5.258 2.156a7.391 7.391 0 012.156 5.257c0 4.906-5.485 11.795-7.414 14.066C6.373 20.097.89 13.21.89 8.303c0-2.065.818-3.92 2.156-5.257A7.391 7.391 0 018.303.89zm0 3.558a3.84 3.84 0 00-2.734 1.12 3.84 3.84 0 00-1.12 2.735 3.84 3.84 0 001.12 2.735 3.84 3.84 0 002.734 1.12 3.84 3.84 0 002.735-1.12 3.84 3.84 0 001.12-2.735 3.84 3.84 0 00-1.12-2.734 3.84 3.84 0 00-2.735-1.12z"
                    stroke="currentColor"
                    stroke-width="1.779"
                    fill="none"
                  ></path>
                </svg>
                <Tipografia
                  color={"--black"}
                  texto={"España"}
                  isBodyMedium
                  isRegularWeight
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LinksNavbarResponsive;
