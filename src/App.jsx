import Navbar from "./components/Navbar/Navbar";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
import { BlogRecomendados } from "./components/BlogRecomendados/BlogRecomendados";
import Footer from './components/Footer/Footer';
import { Stickers } from "./components/Stickers/Stickers";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";

function App() {
  return (
    <>
      <Navbar />
      <Stickers />
      <BlogSelecciones />
      <BlogRecomendados/>
      <Blog/>
      <BlogSelecciones/>
      <BlogRecomendados/>
      <Blog />
      <WelcomeMessage />
      <Footer />
    </>
  );
}

export default App;
