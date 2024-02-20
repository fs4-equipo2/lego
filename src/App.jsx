import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
import { BlogRecomendados } from "./components/BlogRecomendados/BlogRecomendados";
import { Stickers } from "./components/Stickers/Stickers";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import Main from "./components/Main/Main";
import PracticaCarrusel from "./components/BlogRecomendados/PracticaCarrusel";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Stickers />
      <BlogSelecciones />
      
    
      <PracticaCarrusel />
      <br></br>
      <br></br>
      <Blog />
      <BlogSelecciones />
      <BlogRecomendados />
      <Blog />
      <WelcomeMessage />
      <Footer />
    </>
  );
}

export default App;
