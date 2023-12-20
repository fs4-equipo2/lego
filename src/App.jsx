import { FaChevronRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "./components/Button/Button";
import { JoinButton } from "./components/JoinButton/JoinButton";
import { JoinLogo } from "./components/JoinButton/JoinLogo";
import {LogInButton} from "./components/logInButton/logInButton"
import { TbLego } from "react-icons/tb";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <>
      {/* <Button
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

      /> */}
      <Card src="https://www.lego.com/cdn/cs/set/assets/bltd242a29e8881c557/76269-Page-202310-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
        title="Sets de LEGO® DUPLO® para el Black Friday"
        content="¡Celebra este Black Friday con los sets de LEGO® DUPLO®! Los juguetes de LEGO DUPLO cubren varios intereses y son el regalo perfecto para los
        más peques."
        />
    </>
    
  );
}

export default App;
