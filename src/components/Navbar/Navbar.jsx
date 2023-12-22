import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/iconos/Logo";
import Button from "../Button/Button";
import { FaChevronRight, FaRegHeart, FaShieldHeart } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LogInButton } from "../logInButton/logInButton";
import { TbLego } from "react-icons/tb";
import { MixButton } from "../MixButton/MixButton";
import { IconoJoin } from "../MixButton/IconoJoin";
import LinksNavbar from "../LinksNavbar/LinksNavbar";
import LinkSw from "../LinkSw/LinkSw";
import SubMenuNavbar from "../SubMenuNavbar/SubMenuNavbar";


const Navbar = () => {
  return (
    <>
      <div className={styles.containerPre}>
        <Button
          texto={"ZONA DE JUEGOS"}
          isGamezone={true}
          iconLeft={<FaArrowLeftLong />}
          handleClick={() => console.log("router.push(/login)")}
        />
        <div className={styles.swiperPre}>
          <LinkSw 
          href={"www.lego.com/es-es/page/free-delivery?icmp=SW-SHB-EG-NO-freesh-204"}/>
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
            label="Iniciar sesión"
            href=""
            icon={<TbLego />}
          />
        </div>
      </div>

      <div className={styles.containerPadreNav}>
        <div className={styles.containerNav}>
          <div className={styles.containerLeft}>
            <Logo />
            <div className={styles.buttonContainer}>
              <LinksNavbar />
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
            <Button
              isBolsaCompra={true}
              iconLeft={<MdOutlineShoppingBag />}
              handleClick={() => console.log("router.push(/login")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
