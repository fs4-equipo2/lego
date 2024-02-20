import React, { useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./BlogRecomendados.module.scss"
import Tipografia from "../Tipografia/Tipografia";
import { CardRecomendados } from '../CardRecomendados/CardRecomendados';


const BlogRecomendados = () => {
    
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
  

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
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
                    <div className={styles.titleBlog}>
                        <Tipografia texto= "Recomendado para ti" isTitleLarge/>
                    </div>
                <Slider {...settings} ref={sliderRef}>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/blt0ba2da641d7f0426/21330_prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
                            title="LEGO® Ideas: Home Alone"
                            content="299,99€"
                            button="Añadir a la bolsa"
                            link="link"
                            />
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Trineo de Papá Noel"
                            content="39,99€"
                            button="Añadir a la bolsa"
                            link="link"
                            /> 
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
                            title="Vincent van Gogh: La Noche Estrellada"
                            content="169,99€"
                            button="Añadir a la bolsa"
                            link="link"
                            /> 
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/blteb14e8c6c9e027df/40524.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Girasoles"
                            content="14,99€"
                            button="Añadir a la bolsa"
                            link="link"
                            /> 
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/blte32d946cf23b2e5c/21342.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Colección de insectos"
                            content="79,99€"
                            button="Añadir a la bolsa"
                            link="link"
                            /> 
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/bltf876ca701fbacd4a/40725.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Flores de Cerezo"
                            content="14,99€"
                            button="Añadir a la bolsa"
                            link="link"
                            /> 
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/blt88bd1fb644a30a73/76282.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Rocket y Bebé Groot"
                            content="59,99€"
                            button="Añadir a la bolsa"
                            link="link"
                            /> 
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/blt08ba1f2bb5e8f2fb/10326.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Museo de Historia Natural"
                            content="299,99€"
                            button="Añadir a la bolsa"
                            link="link"
                            /> 
                        </div>
                </Slider>
                <div className={styles.progressBar} onClick={handleProgressBarClick}>
                    <div className={styles.progress} style={{width: `${progressWidth}%`}}></div>
                </div>
                
            </div>
        </div>
    )

};

export default BlogRecomendados;