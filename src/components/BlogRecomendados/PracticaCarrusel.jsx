import React, { useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./BlogRecomendados.module.scss"
import Tipografia from "../Tipografia/Tipografia";
import { CardRecomendados } from '../CardRecomendados/CardRecomendados';


const PracticaCarrusel = () => {
    const sliderRef = useRef(null);
    const [progressWidth, setProgressWidth] = useState(0);

  // Función para manejar el clic en la barra de progreso
    const handleProgressClick = () => {
        const slidesToShow = sliderRef.current.props.slidesToShow;
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Desplaza el carrusel una "card" a la derecha
      const currentSlide = sliderRef.current.innerSlider.state.currentSlide; // Obtén el índice de la "card" actual
      const totalSlides = sliderRef.current.props.children.length; // Obtén el número total de "cards"
      const progressBarWidth = ((currentSlide + slidesToShow) / totalSlides) * 100; // Calcula el ancho de la barra de progreso
      setProgressWidth(progressBarWidth); // Actualiza el estado del ancho de la barra de progreso
    }
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false
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
                            src="https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
                            title="Vincent van Gogh: La Noche Estrellada"
                            content="169,99€"
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
                            src="https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
                            title="Vincent van Gogh: La Noche Estrellada"
                            content="169,99€"
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
                            src="https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
                            title="Vincent van Gogh: La Noche Estrellada"
                            content="169,99€"
                            button="Añadir a la bolsa"
                            link="link"
                            /> 
                        </div>
                </Slider>
                <div className={styles.progressBar} onClick={handleProgressClick}>
                    <div className={styles.progress} style={{ width: `${progressWidth}%` }}></div>
                </div>
                
            </div>
        </div>
    )

};

export default PracticaCarrusel;
