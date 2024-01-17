import Navbar from "./components/Navbar/Navbar";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
import { BlogRecomendados } from "./components/BlogRecomendados/BlogRecomendados";

function App() {
  return (
    <>
      <Navbar />
      <Blog/>
      <BlogSelecciones/>
      <BlogRecomendados/>
    </>
  );
}

export default App;
