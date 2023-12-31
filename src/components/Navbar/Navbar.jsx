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
        <Button
          texto={"Saber más"}
          isSaberMas={true}
          iconRight={<FaChevronRight />}
          handleClick={() => console.log("router.push(/login)")}
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
              <Button isNavBar texto={"COMPRAR"} />
              <Button isNavBar texto={"DESCUBRIR"} />
              <Button isNavBar texto={"AYUDA"} />
              <Button isBotonEspecial texto={"NAVIDAD"} />
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
