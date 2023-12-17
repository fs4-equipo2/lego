import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/iconos/Logo";
import Button from "../Button/Button";
import { FaChevronRight, FaRegHeart, FaShieldHeart } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LogInButton } from "../logInButton/logInButton";

const Navbar = () => {
  return (
    <div>
      <div className={styles.containerPre}>
        <Button
          texto={"ZONA DE JUEGOS"}
          isGamezone={true}
          iconLeft={<FaArrowLeftLong />}
          handleClick={() => console.log("router.push(/login)")}
        />
        <div className={styles.swiperPre}>
{/** Camila
        <p>Ejemplo</p>  */}
        <Button
          texto={"Saber más"}
          isSaberMas={true}
          iconRight={<FaChevronRight />}
          handleClick={() => console.log("router.push(/login)")}
        />
        </div>


<LogInButton label={"Iniciar Sesión"}/>

      
      </div>
      <div className={styles.containerNav}>
        <div className={styles.left}>
          <Logo />
          <div className={styles.buttonContainer}>
            <Button isNavBar texto={"COMPRAR"} />
            <Button isNavBar texto={"DESCUBRIR"} />
            <Button isNavBar texto={"AYUDA"} />
            <Button isNavBar texto={"NAVIDAD"} />
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
  );
};

export default Navbar;
