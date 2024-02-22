import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Blog } from "./components/Blog/Blog";
import { Stickers } from "./components/Stickers/Stickers";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import Main from "./components/Main/Main";
import BlogRecomendados from "./components/BlogRecomendados/BlogRecomendados";
import BlogPopulares from "./components/BlogPopulares/BlogPopulares";
import BlogSelecciones from "./components/BlogSelecciones/BlogSelecciones";
import { BlogUnete } from "./components/BlogUnete/BlogUnete";
import BlogMasSets from "./components/BlogMasSets/BlogMasSets";
import BlogMasSelecciones from "./components/BlogMasSelecciones/BlogMasSelecciones";
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Stickers />
      <BlogSelecciones />
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
      <Footer />
    </>
  );
}

export default App;
