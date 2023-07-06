
import {
    motion,
    useAnimation,
    AnimatePresence
} from 'framer-motion';

import { useEffect, useState } from 'react';
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

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  

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
            }}>
                <h1 style={{
                    "margin": "0rem 0rem .5rem 1rem",
                    "font-weight": "800",
                    "font-size": "6vw"
                }}>Desenvolvedor Full stack</h1>
                <h3 style={{
                    "margin": "0rem 0rem 1rem 1rem",
                    "color": "#676767",
                    "font-size": "3vw"
                }}>Mobile e Web</h3>

                <div style={{"display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "flex-wrap": "wrap",
                    "max-width": "100%"}}>
                    <Carrousel></Carrousel>
                </div>

            </motion.div>
        </AnimatePresence>
    );
}

export default Presentation;