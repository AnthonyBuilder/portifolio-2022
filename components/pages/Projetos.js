
import {
    motion,
    useAnimation,
    AnimatePresence
} from 'framer-motion';

import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import styles from '../../pages/styles/main.module.scss'
import Card from '../Card'
import Slideshow from '../Slideshow'

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
                    translateX: -100,
                    opacity: 0,
                    transition: {
                        ease: "anticipate", duration: 1
                    }
                },
                visible: {
                    translateX: 0,
                    opacity: 1,
                    transition: {
                        ease: [0.19, 1, 0.22, 1], duration: 2.5
                    }
                },
            }}>
                <h1 style={{
                    "margin": "0rem 0rem .5rem clamp(0.5rem, 5vw, 2rem)",
                    "font-weight": "800",
                    "font-size": "clamp(1.8rem, 5vw, 2.5rem)"
                }}>Projetos</h1>
                <h3 style={{
                    "margin": "2rem 0rem 1rem clamp(0.5rem, 5vw, 2rem)",
                    "color": "#676767",
                    "font-size": "clamp(1rem, 3vw, 1.4rem)"
                }}>Sites Web</h3>
                <Slideshow slides={[
                    { src: "/lingatec_frame.png", href: "https://ling-pied.vercel.app/", title: "Lingatec", subtitle: "Site institucional" },
                    { src: "/papodepanela_frame.png", href: "https://papodepanela.site", title: "Papo de Panela", subtitle: "Projeto web" }
                ]} height={820} />
                <h3 style={{
                    "margin": "2rem 0rem 1rem clamp(0.5rem, 5vw, 2rem)",
                    "color": "#676767",
                    "font-size": "clamp(1rem, 3vw, 1.4rem)"
                }}>Aplicações Mobile</h3>
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