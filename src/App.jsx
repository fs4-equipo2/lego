import { FaChevronRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "./components/Button/Button";
import Tipografia from "./components/Tipografia/Tipografia";
import { JoinButton } from "./components/JoinButton/JoinButton";
import { JoinLogo } from "./components/JoinButton/JoinLogo";
import {LogInButton} from "./components/LogInButton/logInButton"
import {IconoJoin} from "./components/MixButton/IconoJoin"
import { TbLego } from "react-icons/tb";
import { MixButton } from "./components/MixButton/MixButton";
import IconoCara from "./components/logInButton/IconoCara";

function App() {
  return (
    <>
    <div>
    <h1>Botones</h1>
      <Button
        texto={"Ofertas"}
        isMain={true}
        iconRight={<FaChevronRight />}
        handleClick={() => console.log("router.push(/login)")}
      />
      <Button
        texto={"ZONA DE JUEGOS"}
        isGamezone={true}
        iconLeft={<FaArrowLeftLong />}
        handleClick={() => console.log("router.push(/login)")}
      />
            <JoinButton label="Únete a LEGO® Insiders" icon={<JoinLogo />} href="https://www.lego.com/es-es/insiders" />
      <LogInButton
        label="Iniciar sesión"
        href=""
        icon={<TbLego/>}

      />
      <h3>MixButton component</h3>
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
        icon={<TbLego/>}
      />
    </div>
    <div>
      <br />
      <h1>Tipografía</h1>
      <h4>(propiedad: font-size)</h4>
      <br />
      <Tipografia
          color={"--blue-dark"}
          texto={"Title XL"}
          isTitleXL
      />
      <Tipografia
          color={"--blue-kids-dark"}
          texto={"Title Large"}
          isTitleLarge
      />
      <Tipografia
          color={"--blue-light"}
          texto={"Title"}
          isTitle
      />
      <Tipografia
          color={"--green"}
          texto={"Subtitle Large"}
          isSubtitleLarge
      />
      <Tipografia
          color={"--red-dark"}
          texto={"Subtitle"}
          isSubtitle
      />
      <Tipografia
          color={"--purple"}
          texto={"Body XL"}
          isBodyXL
      />
      <Tipografia
          color={"--yellow"}
          texto={"Body Large"}
          isBodyLarge
      />
      <Tipografia
          color={"--purple-dark"}
          texto={"Body"}
          isBody
      />
      <Tipografia
          color={"--orange-dark"}
          texto={"Body Small"}
          isBodySmall
      />
            <br />
      <h1>Tipografía</h1>
      <h4>(propiedad: font-weight)</h4>
      <br />
      <Tipografia
          color={"--vip-blue"}
          texto={"Regular Weight"}
          isRegularWeight
      />
      <Tipografia
          color={"--vip-blue"}
          texto={"Medium Weight"}
          isMediumWeight
      />
      <Tipografia
          color={"--vip-blue"}
          texto={"Bold Weight"}
          isBoldWeight
      />
      <br />
      <h1>Tipografía</h1>
      <h4>(propiedad: line-height)</h4>
      <br />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 16.1px"}
          isBodyLarge
          isLineHeight1
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 18px"}
          isBodyLarge
          isLineHeight2
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 19px"}
          isBodyLarge
          isLineHeight3
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 20px"}
          isBodyLarge
          isLineHeight4
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 21px"}
          isBodyLarge
          isLineHeight5
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 22px"}
          isBodyLarge
          isLineHeight6
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 24px"}
          isBodyLarge
          isLineHeight7
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 25px"}
          isBodyLarge
          isLineHeight8
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 28px"}
          isBodyLarge
          isLineHeight9
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 31px"}
          isBodyLarge
          isLineHeight10
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 36px"}
          isBodyLarge
          isLineHeight11
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 41.5909px"}
          isBodyLarge
          isLineHeight12
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 43px"}
          isBodyLarge
          isLineHeight13
      />
      <Tipografia
          color={" --grey-dark"}
          texto={"Line-height: 50px"}
          isBodyLarge
          isLineHeight14
      />
    </div>
    </>

  );
}

export default App;
