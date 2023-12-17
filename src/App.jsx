import { FaChevronRight, FaRegHeart, FaShieldHeart } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Tipografia from "./components/Tipografia/Tipografia";
import Navbar from "./components/Navbar/Navbar";
import { LogInButton } from "./components/logInButton/logInButton";


function App() {
  return (
    <>
      <Navbar />
      
      <Button
        texto={"Ofertas"}
        isMain={true}
        iconRight={<FaChevronRight />}
        handleClick={() => console.log("router.push(/login)")}
      />

      <Button
        texto={"Añadir a la bolsa"}
        isAñadirBolsa={true}
        handleClick={() => console.log("router.push(/login)")}
      />
      <Button
        texto={"Ver todos los artículos"}
        isArticulo={true}
        handleClick={() => console.log("router.push(/login)")}
      />
      <Button
        texto={"COMPRAR"}
        isNavBar={true}
        handleClick={() => console.log("router.push(/login)")}
      />
   
      <Button
      texto={"Lee más"}
      isLeeMas={true}
      iconRight={<FaChevronRight />}
      handleClick={() => console.log("router.push(/login)")}
      />
      
      <Tipografia color={"--orange"} texto={"Tipografia de type=titulo"} />
      <Tipografia color={"--purple-dark"} texto={"Tipografia de type=titulo"} />
      <Tipografia color={"--red-dark"} texto={"Tipografia de type=titulo"} />
      <Tipografia color={"--vip-blue"} texto={"Tipografia de type=titulo"} />

      <Input type={"text"} placeholder={"Enter email"} />
      <Input type={"password"} placeholder={"Enter password"} />

   
    </>
  );
}

export default App;
