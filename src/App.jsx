import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Blog } from "./components/Blog/Blog";
import { BlogSelecciones } from "./components/BlogSelecciones/BlogSelecciones";
import { CardRecomendados } from "./components/CardRecomendados/CardRecomendados";
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
      <BlogSelecciones />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
