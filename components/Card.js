

import Image from 'next/image';
import Link from 'next/link';

import { 
  motion, 
  useAnimation,
} from 'framer-motion';

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import styles from "../pages/styles/main.module.scss"

const Card = ({ titulo, subtitulo, image, iconName, link }) => {

  const isExternalLink = link?.startsWith("http");

    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  
  
    const cardContent = (
      <motion.div ref={ref} exit="pageExit" variants={{
        pageExit: {
          backgroundColor: 'black',
          transition: { ease : "anticipate" }
        }
      }}
        style={{
          margin: typeof window !== 'undefined' && window.innerWidth < 600 ? 0 : 10
        }}>
        <Image className={styles.iconCard} src={iconName} width={50} height={50} objectFit="cover"></Image>
          <div className={styles.card}>
          <div className={styles.imageScreen}>
  
          <Image src={image} width={350} height={450} objectFit="contain" priority></Image>
  
          </div>
          <h2 style={{
            marginBottom: "0.5rem"
          }}>{titulo}</h2>
          <h4 style={{
            marginBottom: "0.6rem",
            lineHeight: "1.4"
          }}>{subtitulo}</h4>
          <p style={{
            margin: "0.8rem 0 0 0",
            fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
            color: "#a0afc4",
            lineHeight: "1.5"
          }}>Clique para explorar</p>
  
      </div>
      </motion.div>
    );

    if (isExternalLink) {
      return (
        <a href={link} target="_blank" rel="noreferrer">
          {cardContent}
        </a>
      );
    }

    return (
      <Link href={link ?? ""}>
        {cardContent}
      </Link>
    );
  };

  export default Card;