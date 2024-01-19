import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";

function App() {
  return (
    <>
      <Navbar />
      <BlogSelecciones />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
