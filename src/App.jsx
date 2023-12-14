import { Iconos } from "./components/Iconos/Iconos";
import { FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

function App() {
  return (
    <div>
       <h2>Iconos Reds Sociales</h2>
      <Iconos
        icono={<CgFacebook />}
        href={"https://www.facebook.com/LEGOEsp/"}
      />
      <Iconos icono={<FaXTwitter />} href={"https://twitter.com/LEGO_Group"} />
      <Iconos
        icono={<IoLogoInstagram />}
        href={"https://www.instagram.com/lego"}
      />
      <Iconos icono={<FaYoutube />} href={"https://m.youtube.com/user/LEGO"} />
    </div>
  );
}

export default App;
