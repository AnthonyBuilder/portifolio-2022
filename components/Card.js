

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
          margin: 10
        }}>
        <Image className={styles.iconCard} src={iconName} width={50} height={50} objectFit="cover"></Image>
          <div className={styles.card}>
          <div className={styles.imageScreen}>
  
          <Image src={image} width={300} height={400} objectFit="contain"></Image>
  
          </div>
          <h2>{titulo}</h2>
          <h4>{subtitulo}</h4>
  
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