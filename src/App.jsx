import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { CardRecomendados } from "./components/CardRecomendados/CardRecomendados";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
import { BlogRecomendados } from "./components/BlogRecomendados/BlogRecomendados";
import Footer from './components/Footer/Footer';
import { Stickers } from "./components/Stickers/Stickers";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import Main from "./components/Main/Main";
function App() {
  const productos = [
    {
      src: "https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1",
      title: "Trineo de Papá Noel",
      price: "39,99€",
      button: "Añadir a la bolsa",
      link: "link",
      uid: "3b241101-e2bb-4255-8caf-4136c566a962",
    },
    {
      src: "https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1",
      title: "Trineo de Papá Noel",
      price: "39,99€",
      button: "Añadir a la bolsa",
      link: "link",
      uid: "3b241101-e2bb-4255-8caf-4136c566a962",
    },
    {
      src: "https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1",
      title: "Trineo de Papá Noel",
      price: "39,99€",
      button: "Añadir a la bolsa",
      link: "link",
      uid: "3b241101-e2bb-4255-8caf-4136c566a962",
    },
    {
      src: "https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1",
      title: "Trineo de Papá Noel",
      price: "39,99€",
      button: "Añadir a la bolsa",
      link: "link",
      uid: "3b241101-e2bb-4255-8caf-4136c566a962",
    },
    {
      src: "https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1",
      title: "Trineo de Papá Noel",
      price: "39,99€",
      button: "Añadir a la bolsa",
      link: "link",
      uid: "3b241101-e2bb-4255-8caf-4136c566a962",
    },
  ];
  return (
    <>
      <Navbar />
      <CardRecomendados
        src="https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
        title="Trineo de Papá Noel"
        price="39,99€"
        button="Añadir a la bolsa"
        link="link"
        uid="3b241101-e2bb-4255-8caf-4136c566a962"
      />
      {productos.map((producto) => (
        <CardRecomendados
          src={producto.src}
          title={producto.title}
          price={producto.price}
          button={producto.button}
          link={producto.link}
          uid={producto.uid}
        />
      ))}
      <Main />
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
