import { FaChevronRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "./components/Button/Button";
import {LogInButton} from "./components/logInButton/logInButton"
import { TbLego } from "react-icons/tb";

function App() {
  return (
    <>
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
      <LogInButton
        label="Iniciar sesión"
        href=""
        icon={<TbLego/>}

      />
    </>

  );
}

export default App;
