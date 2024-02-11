import Main from "../components/Main/Main.jsx";
import { Stickers } from "../components/Stickers/Stickers";
import { BlogSelecciones } from "../components/BlogSelecciones/BlogSelecciones";
import { BlogRecomendados } from "../components/BlogRecomendados/BlogRecomendados";
import { WelcomeMessage } from "../components/WelcomeMessage/WelcomeMessage";

export const HomePage = () => {
  return (
    <>
      <Main />
      <Stickers />
      <BlogSelecciones />
      <BlogRecomendados />
      <WelcomeMessage />
    </>
  )
}
