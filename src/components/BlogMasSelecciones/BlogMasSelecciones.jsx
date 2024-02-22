import { FaChevronRight } from "react-icons/fa6"
import styles from "./BlogMasSelecciones.module.scss"
import Tipografia from "../Tipografia/Tipografia"
import { CardSelecciones } from "../CardSelecciones/CardSelecciones"
import React from "react"
import Slider from "react-slick"

const BlogMasSelecciones = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: false,
          draggable: true,
          arrows: true,
          slidesToShow: 2,
        }
      }, 
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
            draggable: true,
            slidesToShow: 1,
        },
    }
    ]
  };
  return (
          <div className={styles.blog}>
            <div className={styles.blogContainer}>
                <div className={styles.titleBlog}>
                <Tipografia texto= "Selecciones de esta semana" isTitleLarge color= {"--black"}/>
                </div>
                <div className={styles.slider}>
                <Slider {...settings}>                  
                    <CardSelecciones
                        src="src\assets\images\1913-Novelty-012024-HP-Block-Standard-40725-CherryBlossoms (1).webp"
                        title="Flores de Cerezo"
                        content="Crea belleza que nunca se marchita con un nuevo set de flores LEGO®"
                        button="A la tienda"
                        iconButton={<FaChevronRight />}
                      />
                      <CardSelecciones
                        src="src\assets\images\1913-Novelty-012024-HP-Block-Standard-42619-Friends-Bus (1).jpeg"
                        title="Autobús de gran gira musical"
                        content="Lánzate a la carretera con un nuevo set de LEGO® Friends."
                        button="A la tienda"
                        iconButton={<FaChevronRight />}
                      />
                      <CardSelecciones
                        src="src\assets\images\1913-Novelty-012024-HP-Block-Standard-71431-SuperMario-BowserCar (1).jpeg"
                        title="Coche monstruoso de Bowser"
                        content="Aumenta la diversión con un nuevo set de expansión de LEGO® Super Mario"
                        button="A la tienda"
                        iconButton={<FaChevronRight />}
                      />
                      </Slider>
                      </div>
                  </div>
            </div>
  )
}

export default BlogMasSelecciones;