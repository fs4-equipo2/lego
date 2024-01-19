import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
import { useStoreState } from "easy-peasy";
function App() {
  const { user } = useStoreState((state) => state);
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
