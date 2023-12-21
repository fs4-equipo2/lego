import Navbar from "./components/Navbar/Navbar";
import Tipografia from "./components/Tipografia/Tipografia";
import { MixButton } from "./components/MixButton/MixButton";
import { IconoJoin } from "./components/MixButton/IconoJoin";
import { JoinButton } from "./components/JoinButton/JoinButton";
import { JoinLogo } from "./components/JoinButton/JoinLogo";
import {LogInButton} from "./components/logInButton/logInButton"
import { TbLego } from "react-icons/tb";
import Footer from './components/Footer/Footer';
import IconoCara from "./components/logInButton/IconoCara";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
import Button from "./components/Button/Button";
import { FaChevronRight, FaRegHeart, FaShieldHeart } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Iconos } from "./components/Iconos/Iconos";
import { FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";



function App() {
  return (
    <>
      <Navbar />
      <BlogSelecciones/>
      <Blog/>
       <Footer/>

    </>
  );
};

export default App;
