import { FaChevronRight } from "react-icons/fa6"
import { Card } from "../Card/Card"
import styles from "./Blog.module.scss"
import Tipografia from "../Tipografia/Tipografia"
import Slider from "react-slick";

export function Blog({}){

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          draggable: true,
          arrows: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 390,
        settings: {
            slidesToShow: 1,
        },
    }
    ]
  };

  return (
      <div className={styles.blog}>
          <div className={styles.blogContainer}>
              <div className={styles.titleBlog}>
                  <Tipografia texto= "Descubre todos los detalles" isTitleLarge/>
              </div>
                <div className={styles.slider}>
                  <Slider {...settings}>
                      <Card
                          src="https://www.lego.com/cdn/cs/set/assets/blta24a8b661f0f0388/75368_75369_7537HERO-Mobile.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                          title="Las mejores ideas de pequeños regalos de Navidad"
                          content="La Navidad no tiene por qué suponer un gasto excesivo. 
                          Echa un vistazo a nuestra selección de las mejores ideas de pequeños 
                          regalos de Navidad LEGO® y encuentra el detalle perfecto."
                          button="Lee más"
                          iconButton={<FaChevronRight />}
                        />
                        <Card
                          src="https://www.lego.com/cdn/cs/set/assets/blt014723f35f4a3a01/2023_Hero_Banner_-_Mobile.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                          title="Los mejores regalos de Navidad para adolescentes y jóvenes adultos"
                          content="En nuestra fantástica colección LEGO® encontrarás el regalo de Navidad perfecto 
                          para adolescentes y jóvenes adultos, desde iconos del pop y Vespas hasta flores silvestres 
                          y el globo terráqueo."
                          button="Lee más"
                          iconButton={<FaChevronRight />}
                        />
                        <Card
                          src="https://www.lego.com/cdn/cs/set/assets/blt891c0c1fd6c1fe11/76266_OG.png?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                          title="12 mejores juguetes LEGO® de superhéroes para esta Navidad"
                          content="Estos doce juguetes de superhéroes son todo lo que necesitas para llenar de 
                          acción la Navidad este año. ¡Perfectos para fans de Marvel y entusiastas de los sets 
                          LEGO® de todas las edades!"
                          button="Lee más"
                          iconButton={<FaChevronRight />}
                        />
                        <Card
                          src="https://www.lego.com/cdn/cs/set/assets/bltb1d96bf651522a88/76421_OG.png?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                          title="13 mejores sets LEGO® Harry Potter™ para Navidad"
                          content="Entra en el Mundo Mágico de Harry Potter™ en estas fiestas y déjate llevar por 
                          la magia con los 13 mejores sets LEGO® Harry Potter para Navidad."
                          button="Lee más"
                          iconButton={<FaChevronRight />}
                        />
                  </Slider>
                        </div>
              </div>
        </div>
  )
}