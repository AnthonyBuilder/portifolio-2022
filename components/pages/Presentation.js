import {
    motion,
    useAnimation,
    AnimatePresence
} from 'framer-motion';

import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import styles from '../../pages/styles/main.module.scss'

import Carrousel from '../carrousel/carrousel';

const Presentation = () => {
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
                    translateX:  0,
                    opacity: 1,
                    transition: {
                        ease: [0.19, 1, 0.22, 1], duration: 2
                    }
                },
            }} style={{ marginTop: '6rem' }}>
                <div style={{
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "justify-content": "center",
                    "width": "100%",
                    "padding": "0 clamp(1rem, 4vw, 2rem)"
                }}>
                    <p style={{
                        "margin": "0rem 0rem 1.5rem 0rem",
                        "color": "#7a8a9c",
                        "font-size": "clamp(1.05rem, 2.31vw, 1.47rem)",
                        "max-width": "720px",
                        "line-height": "1.8",
                        "text-align": "center",
                        "font-weight": "500"
                    }}>
                        Desenvolvedor Full Stack especializado em criar produtos Web e Mobile funcionais, escaláveis e prontos para produção.
                    </p>
                    <p style={{
                        "margin": "0rem 0rem 5rem 0rem",
                        "color": "#8fa4c4",
                        "font-size": "clamp(0.9rem, 1.9vw, 1.1rem)",
                        "max-width": "720px",
                        "line-height": "1.7",
                        "text-align": "center"
                    }}>
                        Com experiência prática em sistemas de autenticação e gestão de usuários, gerenciamento de conteúdo dinâmico e deploy em ambientes de produção real. Transformo ideias em soluções tecnológicas robustas.
                    </p>
                </div>
                <h1 style={{
                    "margin": "0rem 0rem .5rem 0rem",
                    "font-weight": "900",
                    "font-size": "clamp(1.89rem, 3.675vw, 3.36rem)",
                    "text-align": "center",
                    "color": "#5d6977",
                    "letter-spacing": "-0.5px"
                }}>Desenvolvedor Full stack</h1>
                <h3 style={{
                    "color": "#8fa4c4",
                    "font-size": "clamp(1rem, 3vw, 1.4rem)",
                    "text-align": "center"
                }}>Mobile e Web</h3>

                <div style={{"display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "flex-wrap": "wrap",
                    "max-width": "100%",
                    "margin-top": "1rem"}}>
                    <Carrousel></Carrousel>
                </div>
                <p style={{
                    "margin": "2rem 0rem 0rem 0rem",
                    "color": "#8fa4c4",
                    "font-size": "clamp(1rem, 2.6vw, 1.25rem)",
                    "line-height": "1.6",
                    "text-align": "center"
                }}>Disponível para freelas e projetos registrados, com contrato e entrega profissional.</p>

            </motion.div>
        </AnimatePresence>
    );
}

export default Presentation;