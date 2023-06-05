
import {
    motion,
    useAnimation,
    AnimatePresence
} from 'framer-motion';

import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import styles from '../../pages/styles/main.module.scss'
import Card from '../Card'

const Projetos = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <AnimatePresence>
            <motion.div className={styles.sectionProjects} ref={ref} initial="hidden" animate={control} exit="hidden" variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0,
                    transition: {
                        ease: "anticipate", duration: 1
                    }
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        ease: [0.19, 1, 0.22, 1], duration: 2.5
                    }
                },
            }}>
                <motion.h1 style={{
                    "margin": "0rem 0rem .5rem 1rem",
                    "font-weight": "800",
                    "font-size": "2rem"
                }}>Projetos</motion.h1>
                <motion.h3 style={{
                    "margin": "0rem 0rem 1rem 1rem",
                    "color": "#676767"
                }}>Aplicações Mobile</motion.h3>
                <div style={{
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "flex-wrap": "wrap",
                    "max-width": "100%",
                }}>
                    <Card titulo={"Invest Futuro"} subtitulo={"Aplicação iOS em SwiftUI"} image="/print-invest.png" iconName="/investlogo.jpg" link="projects/invest" />
                    <Card titulo={"Maps"} subtitulo={"Clone maps em SwiftUI"} image="/maps.png"  iconName="/maps-icon.png" link="projects/maps"/>                   
                    <Card titulo={"ImagineIA"} subtitulo={"Gerar imagens através da OpenIA"} iconName="/appstore.png" image="/imagineia/screenshotmain.png" link="projects/ImagineIA"/>
                    <Card titulo={"DeliverTrack"} subtitulo={"App para rastrear encomendas"} iconName="/delivertrackicon.png" image="/deliverTrack.png" link="projects/DeliverTrack"/>
                    <Card titulo={"Memorize Game"} subtitulo={"Jogo de memória curso cs193p"} iconName="/memory-icon.webp" image="/memorize.png" link="projects/memorize"/>

                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Projetos;