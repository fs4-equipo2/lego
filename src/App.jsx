import Navbar from "./components/Navbar/Navbar";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";



function App() {
  return (
    <>
      <Navbar />
      <BlogSelecciones/>
      <Blog/>

    </>
  );
}

export default App;
