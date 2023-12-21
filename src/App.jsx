import { FaChevronRight, FaRegHeart, FaShieldHeart } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "./components/Button/Button";
import Tipografia from "./components/Tipografia/Tipografia";
import Navbar from "./components/Navbar/Navbar";
import { MixButton } from "./components/MixButton/MixButton";
import { IconoJoin } from "./components/MixButton/IconoJoin";
import { JoinButton } from "./components/JoinButton/JoinButton";
import { JoinLogo } from "./components/JoinButton/JoinLogo";
import { LogInButton } from "./components/logInButton/logInButton";
import { TbLego } from "react-icons/tb";
import { Card } from "./components/Card/Card";
import styles from "./styles/pages/home.module.scss";
import { Blog } from "./components/Blog/Blog";
import { CardSelecciones } from "./components/CardSelecciones/CardSelecciones";
import { CardRecomendados } from "./components/CardRecomendados/CardRecomendados";
import { CardPopulares } from "./components/CardPopulares/CardPopulares";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
function App() {
  return (
    <div>
      <Blog/>
      <BlogSelecciones/>
    </div>
  );
}

export default App;
