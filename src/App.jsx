import { FaChevronRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";

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
    </>
  );
}

export default App;
