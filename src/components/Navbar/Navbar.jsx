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
import axios from "axios";
import Tipografia from "../Tipografia/Tipografia";
import { useStoreActions, useStoreState } from "../../store";
const Navbar = () => {
  const { setUser } = useStoreActions((actions) => actions.user);
  const { user } = useStoreState((state) => state.user);

  const { productos } = useStoreState((state) => state.carrito);

  const handleLoggin = async () => {
    try {
      const response = await axios.get(
        "https://random-data-api.com/api/users/random_user?size=1"
      );

      setUser({
        isLoggedIn: true,
        username: response.data[0].username,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
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
          {!user.isLoggedIn && (
            <MixButton
              isLogin={true}
              label="Iniciar sesión"
              href=""
              icon={<TbLego />}
              onClick={handleLoggin}
            />
          )}
          {user.isLoggedIn && (
            <Tipografia texto={`Bienvenido ${user.username}`} />
          )}
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
