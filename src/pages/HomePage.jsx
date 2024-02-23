import Main from "../components/Main/Main.jsx";
import { Stickers } from "../components/Stickers/Stickers";
import { Blog } from "../components/Blog/Blog";
import { BlogRecomendados } from "../components/BlogRecomendados/BlogRecomendados";
import { WelcomeMessage } from "../components/WelcomeMessage/WelcomeMessage";
import BlogPopulares from "../components/BlogPopulares/BlogPopulares.jsx";
import BlogMasSets from "../components/BlogMasSets/BlogMasSets.jsx";
import BlogMasSelecciones from "../components/BlogMasSelecciones/BlogMasSelecciones.jsx";
import { BlogUnete } from "../components/BlogUnete/BlogUnete.jsx";
// import {BlogSelecciones} from "../components/BlogSelecciones/BlogSelecciones.jsx"
export const HomePage = () => {
  return (
    <>
      <Main />
      <Stickers />
      {/* <BlogSelecciones /> */}
      <BlogPopulares/>
      <BlogUnete/>
      <BlogRecomendados />
      <br/>
      <br/>
      <BlogMasSets/>
      <BlogMasSelecciones/>
      <br/>
      <br/>
      <Blog />
      <WelcomeMessage />
      <br/>
      <WelcomeMessage />
    </>
  )
}
