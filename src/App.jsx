import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
import { Stickers } from "./components/Stickers/Stickers";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import Main from "./components/Main/Main";
import BlogRecomendados from "./components/BlogRecomendados/BlogRecomendados";


function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Stickers />
      <BlogSelecciones />
      <Blog />
      <BlogRecomendados/>
      <br></br>
      <br></br>
      <BlogSelecciones />
      <Blog />
      <WelcomeMessage />
      <Footer />
    </>
  );
}

export default App;
