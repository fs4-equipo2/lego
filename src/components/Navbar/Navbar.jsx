import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/iconos/Logo";
import Button from "../Button/Button";
import { FaChevronRight, FaRegHeart, FaShieldHeart } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbLego } from "react-icons/tb";
import { MixButton } from "../MixButton/MixButton";
import { IconoJoin } from "../MixButton/IconoJoin";
import LinksNavbar from "../LinksNavbar/LinksNavbar";
import LinkSw from "../LinkSw/LinkSw";
import Tipografia from "../Tipografia/Tipografia";
import { useStoreActions, useStoreState } from "../../store";
import { Modal } from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { LogInModal } from "../LogInModal/LogInModal";

const Navbar = () => {
  const { user } = useStoreState((state) => state.user);
  const { setUser } = useStoreActions((actions) => actions.user);
  const { productos } = useStoreState((state) => state.carrito);

  const [isOpenLogIn, openModalLogIn, closeModalLogIn] = useModal(false);

  const notify = () => {
    if (user.isLoggedIn) {
      toast.success("Successful login!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      ("");
    }
  };

  useEffect(() => {
    console.log(user.isLoggedIn);
    notify();
  }, [user.isLoggedIn]);

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
            <Logo />
            <div className={styles.buttonContainer}>
              <LinksNavbar />
              {/*<SubMenuNavbar />*/}
            </div>
          </div>
          <div className={styles.containerRight}>
            <Button
              isBuscador={true}
              iconLeft={<SlMagnifier />}
              handleClick={() => console.log("router.push(/login")}
            />
            {/* <input placeholder="Search" /> */}
            <Button
              isDeseos={true}
              iconLeft={<FaRegHeart />}
              handleClick={() => console.log("router.push(/login")}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Button
                isBolsaCompra={true}
                iconLeft={<MdOutlineShoppingBag />}
                handleClick={() => console.log("router.push(/login")}
              />
              <Tipografia texto={`(${productos.length})`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
