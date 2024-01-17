import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
import { Stickers } from "./components/Stickers/Stickers";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";

function App() {
  return (
    <>
      <Navbar />
      <Stickers />
      <BlogSelecciones />
      <Blog />
      <WelcomeMessage />
      <Footer />
    </>
  );
}

export default App;
