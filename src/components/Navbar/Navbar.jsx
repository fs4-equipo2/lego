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
            icon={<TbLego />}
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
              <ModalSidebar
            isOpen={isOpenSidebar}
            closeModal={closeModalSidebar}
          >
            <Tipografia
                  color={"--black"}
                  texto={"MENÚ"}
                  isTitleRegular
                  isRegularWeight
                />
            <LinksNavbar />
          </ModalSidebar>
            </div>
          <Link to="/">
            <Logo />
          </Link>
            <div className={styles.buttonContainer}>
              <LinksNavbar />
              {/*<SubMenuNavbar />*/}
            </div>
          </div>
          <div className={styles.containerRight}>
            <Button
              isBuscador={true}
              iconLeft={<SlMagnifier />}
              handleClick={() => console.log("router.push(/buscar")}
            />
            {/* <input placeholder="Search" /> */}
            <Button
              isDeseos={true}
              iconLeft={<FaRegHeart />}
              handleClick={() => console.log("router.push(/deseos")}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
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
