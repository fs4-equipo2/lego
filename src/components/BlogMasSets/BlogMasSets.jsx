import React, { useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./BlogMasSets.module.scss"
import Tipografia from "../Tipografia/Tipografia";
import { CardPopulares } from '../CardPopulares/CardPopulares';



const BlogMasSets = () => {

    const [progressWidth, setProgressWidth] = useState(0);
    const sliderRef = useRef(null);

    // Calcula el progreso basado en el slide actual, el total de slides y los slides que se muestran
    const calculateProgress = () => {
      if (!sliderRef.current) return;

      const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
      const totalSlides = sliderRef.current.props.children.length;
      const slidesToShow = sliderRef.current.props.slidesToShow;
      // Asegúrate de que el cálculo evita divisiones por cero en casos extremos
      const progress = totalSlides > slidesToShow ? ((currentSlide / (totalSlides - slidesToShow)) * 100).toFixed(2) : 100;

      setProgressWidth(progress);
    };

    useEffect(() => {
      // Esto ajusta el progreso inicialmente al cargar.
      calculateProgress();
    }, []); // Dependencias vacías para que se ejecute solo una vez al montar el componente

    const handleProgressBarClick = (event) => {
        const progressBar = event.currentTarget; // Elemento de la barra de progreso
        const clickX = event.clientX - progressBar.getBoundingClientRect().left; // Posición X del clic relativa al inicio de la barra
        const progressBarWidth = progressBar.offsetWidth; // Ancho total de la barra de progreso
        const clickPositionRatio = clickX / progressBarWidth; // Ratio de la posición del clic sobre el ancho total

        const totalSlides = sliderRef.current.props.children.length;
        const slidesToShow = sliderRef.current.props.slidesToShow;
        const slideToGo = Math.round(clickPositionRatio * (totalSlides - slidesToShow));

        sliderRef.current.slickGoTo(slideToGo); // Mueve el carrusel al slide calculado
      };


      function NewArrow(props){
        const { className, style, onClick} = props;
        return (
            <div
            className={className}
            style={{...style, display: "flex", padding: "8px" ,alignItems: "center", background: "rgba(128, 128, 128, 0.5)", width: "35px", height: "35px", borderRadius: "50%"}}
            onClick={onClick}
            />
        );
      }
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NewArrow/>,
      prevArrow: <NewArrow/>,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: false,
            draggable: true,
            arrows: true,
            slidesToShow: 3,
          }
        },
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
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }
      ],
      afterChange: () => calculateProgress(),
    };

    return (
            <div className={styles.blog}>
                <div className={styles.blogContainer}>
                    <div className={styles.cardsContainer}>
                    <div className={styles.titleBlog}>
                        <Tipografia texto= "Descubre más sets increíbles:" isTitleLarge/>
                    </div>
                <Slider {...settings} ref={sliderRef}>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/bltea91c53f2609bfa5/75375.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Halcón Milenario"
                            content={84.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"f2e68e69-abf0-4932-9d78-a6fff1f26033"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/bltec012c948c003fba/10316_alt16.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
                            title="El Señor de los Anillos: Rivendel"
                            content={499.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"27a52968-a9c1-4400-a575-8530c8e5da94"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/blt0e2b04c977a2dc2a/10307.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
                            title="Torre Eiffel"
                            content={629.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"03c73f8f-76b3-496f-b677-1508264d1431"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/blt3d62bb5d68e6dbd7/10295.jpg?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
                            title="Porsche 911"
                            content={169.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"9969db09-3e56-4574-8dad-d780e569439b"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/blt06c6593d8e8d1c13/75367.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
                            title="Crucero de Ataque Clase Venator de la República"
                            content={649.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"5bb98304-a719-4975-9786-e3411a228da0"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/bltbd4f1a39f110e3eb/76285.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
                            title="Máscara de Spider-man"
                            content={69.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"4e08adfc-e750-4829-a9d1-44b1cfeb6b2c"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/blt88bd1fb644a30a73/76282.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Rocket y Bebé Groot"
                            content={59.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"47feeb31-36ca-42e6-982f-3205878b2835"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/blt08ba1f2bb5e8f2fb/10326.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Museo de Historia Natural"
                            content={299.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"0657ae95-369e-4da9-881f-6e39db85a7da"}
                            />
                        </div>
                </Slider>
                <div className={styles.progressBar} onClick={handleProgressBarClick}>
                    <div className={styles.progress} style={{width: `${progressWidth}%`}}></div>
                </div>
                </div>
            </div>
        </div>
    )

};

export default BlogMasSets;
