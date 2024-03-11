import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/iconos/Logo";
import Button from "../Button/Button";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbLego } from "react-icons/tb";
import { MixButton } from "../MixButton/MixButton";
import { IconoJoin } from "../MixButton/IconoJoin";
import LinksNavbar from "../LinksNavbar/LinksNavbar";
import LinkSw from "../LinkSw/LinkSw";
import Tipografia from "../Tipografia/Tipografia";
import { useStoreState } from "../../store";
import { Modal } from "../Modal/Modal";
import { ModalSidebar } from "../Modal/ModalSidebar";
import { LogInModal } from "../LogInModal/LogInModal";
import { useModal } from "../../hooks/useModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useModalSidebar } from "../../hooks/useModalSidebar";
import LinksNavbarResponsive from "../LinksNavbar/LinksNavbarResponsive";

const Navbar = () => {
  const { user } = useStoreState((state) => state.user);
  const { productos } = useStoreState((state) => state.carrito);

  const [isOpenLogIn, openModalLogIn, closeModalLogIn] = useModal(false);
  const [isOpenSidebar, openModalSidebar, closeModalSidebar] = useModalSidebar(false);

  return (
    <>
      <ToastContainer />
      <div className={styles.containerPre}>
        <Button
          texto={"ZONA DE JUEGOS"}
          isGamezone={true}
          iconLeft={<FaArrowLeftLong />}
          handleClick={() => console.log("router.push(/login)")}
        />
        <div className={styles.swiperPre}>
          <LinkSw
            href={
              "www.lego.com/es-es/page/free-delivery?icmp=SW-SHB-EG-NO-freesh-204"
            }
          />
        </div>
        <div className={styles.rightPre}>
          <MixButton
            isLogin={false}
            label="Únete a LEGO® Insiders"
            href=""
            icon={<IconoJoin />}
          />
          <span className={styles.utilityBar}></span>
          <MixButton
            isLogin={true}
            label={user.isLoggedIn ? `${user.username} 🟢` : "Iniciar sesión"}
            href=""
            icon={ <svg width="15" height="17" viewBox="0 0 20 22" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="Icon__StyledSVG-lm07h6-0 dHKzVM"><g transform="translate(1 1)" fill-rule="nonzero" fill="none"><rect stroke="#2C2C2C" stroke-width="1.5" fill="#FFCF00" x="4.875" width="8.25" height="6.038" rx=".729"></rect><rect stroke="#2C2C2C" stroke-width="1.2" fill="#FFCF00" x="3.75" y="14.34" width="10.5" height="5.66" rx=".729"></rect><path d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z" stroke="#2C2C2C" stroke-width="1.5" fill="#FFCF00"></path><path d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z" fill="#2C2C2C"></path></g></svg>}
            onClick={openModalLogIn}
          />
          <Modal
            isOpen={user.isLoggedIn ? false : isOpenLogIn}
            closeModal={closeModalLogIn}
          >
            <LogInModal />
          </Modal>
        </div>
      </div>

      <div className={styles.containerPadreNav}>
        <div className={styles.containerNav}>
          <div className={styles.containerLeft}>
            <div className={styles.hamburguerMenu} onClick={openModalSidebar}>
              <HiMenuAlt4 />
              <Tipografia
                color={"--black"}
                texto={"MENU"}
                isBodyRegular
                isRegularWeight
                />
                </div>
              <ModalSidebar
                isOpen={isOpenSidebar}
                closeModal={closeModalSidebar}
              >
                <LinksNavbarResponsive handleCloseModal={closeModalSidebar} handleOpenLogin={openModalLogIn}/>
              </ModalSidebar>
            <Link to="/">
              <Logo />
            </Link>
            <div className={styles.buttonContainer}>
              <LinksNavbar />
            </div>
          </div>
          <div className={styles.containerRight}>
            <Button
              isBuscador={true}
              iconLeft={<SlMagnifier />}
              handleClick={() => console.log("router.push(/buscar")}
            />

             {/* ICONO CARA RESPONSIVE */}
            <div className={styles.iconoCara}>
            <svg width="15" height="17" viewBox="0 0 20 22" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="Icon__StyledSVG-lm07h6-0 dHKzVM"><g transform="translate(1 1)" fill-rule="nonzero" fill="none"><rect stroke="#2C2C2C" stroke-width="1.5" fill="#FFCF00" x="4.875" width="8.25" height="6.038" rx=".729"></rect><rect stroke="#2C2C2C" stroke-width="1.2" fill="#FFCF00" x="3.75" y="14.34" width="10.5" height="5.66" rx=".729"></rect><path d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z" stroke="#2C2C2C" stroke-width="1.5" fill="#FFCF00"></path><path d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z" fill="#2C2C2C"></path></g></svg>
             </div>

            {/* <input placeholder="Search" /> */}
            <Button
              isDeseos={true}
              iconLeft={<FaRegHeart />}
              handleClick={() => console.log("router.push(/deseos")}
            />
            <div  className={styles.carritoCompra} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Link to="/cart">
                <Button
                  isBolsaCompra={true}
                  iconLeft={<MdOutlineShoppingBag />}
                />
              </Link>
              <Tipografia texto={`(${productos.length})`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
