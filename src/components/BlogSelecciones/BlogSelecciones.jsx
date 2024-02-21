import { FaChevronRight } from "react-icons/fa6"
import styles from "./BlogSelecciones.module.scss"
import Tipografia from "../Tipografia/Tipografia"
import { CardSelecciones } from "../CardSelecciones/CardSelecciones"
import React from "react"
import Slider from "react-slick"

export function BlogSelecciones({}){
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
                        src="https://www.lego.com/cdn/cs/set/assets/blta7af47b8d4f21a91/21347-Exclusive-2402-PS-Block-Standard.jpg?fit=crop"
                        title="Nuevo set Cabina telefónica roja de Londres"
                        content="Da vida a un icono de la cultura con un nuevo set inspirado por un fan."
                        button="A la tienda"
                        iconButton={<FaChevronRight />}
                      />
                      <CardSelecciones
                        src="https://www.lego.com/cdn/cs/set/assets/bltf66caa857f738bb1/10327-HT-202402-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                        title="Recrea una emblemática aeronave de Dune"
                        content="El nuevo set Dune: Atreides Royal Ornithopter de LEGO® Icons hará las delicias de los fans."
                        button="A la tienda"
                        iconButton={<FaChevronRight />}
                      />
                      <CardSelecciones
                        src="https://www.lego.com/cdn/cs/set/assets/blt6f9c8133ee750c04/21346-HT-202402-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                        title="Decoración para el hogar con un toque personal"
                        content="Comparte preciados recuerdos con el nuevo set Árbol de la familia de LEGO® Ideas."
                        button="A la tienda"
                        iconButton={<FaChevronRight />}
                      />
                      </Slider>
                      </div>
                  </div>
            </div>
  )
}