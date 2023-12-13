import { FaChevronRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "./components/Button/Button";
import { JoinButton } from "./components/JoinButton/JoinButton";

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
      <JoinButton label="Únete a LEGO® Insiders" icon="https://www.lego.com/_next/static/images/insidersOut-1007c87df3063963a6a3f7de243ac98e.svg" href="https://www.lego.com/es-es/insiders" />
    </>
  );
}

export default App;
