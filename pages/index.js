import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

import { 
  motion, 
  useSpring,
  useAnimation,
  useScroll,
  useTransform,
  MotionValue, 
  AnimatePresence, 
  usePresence
} from 'framer-motion';
  
import { useRef, useState } from 'react';

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import styles from "./styles/main.module.scss"

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { type: "antecipate", duration: .2 } },
  hidden: { opacity: 0, y: 100, transition: { ease: "anticipate", duration: 0.5 } }
};

const birthElementsVariant = {
  hidden: {
    translateY: 20,
    opacity: 0
  },
  visible: {
    translateY: 0,
    opacity: 1,
    transition: {
      ease: "anticipate", duration: 1
    }
  }
}


const Card = ({ titulo, subtitulo, iconName, link }) => {

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
    <Link href={link ?? ""}>
    <motion.div ref={ref} exit="pageExit" variants={{
      pageExit: {
        backgroundColor: 'black',
        transition: {ease : "anticipate"}
      }
    }}
      style={{
        margin: 10
      }}>
      <Image className={styles.iconCard} src={iconName} width={50} height={50} objectFit="cover"></Image>
        <div className={styles.card}>
        <div className={styles.imageScreen}>

        <Image src='/print-invest.png' width={300} height={400} objectFit="contain"></Image>

        </div>
        <h2>{titulo}</h2>
        <h4>{subtitulo}</h4>

    </div>
    </motion.div>
    </Link>
  );
};

export function Projetos({isVisible}) {
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
        <Card titulo={"Invest Futuro"} subtitulo={"Aplicação iOS em SwiftUI"} iconName="/investlogo.jpg" link="projects/invest"/>
        <Card titulo={"Nubank"} subtitulo={"Clone nubank em React"} iconName="/nu-icon.png"/>
        <Card titulo={"Maps"} subtitulo={"Clone maps em SwiftUI"} />
        <Card titulo={"Invest Futuro"} subtitulo={"Aplicação iOS em SwiftUI"} />
      </div>
    </motion.div>
      </AnimatePresence>
  );
}

export default function Home() {

  
  const { scrollYProgress } = useScroll();


  const name = "Anthony José"

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
    
    <div className={styles.container}>
      <Head>
        <title>Portifolio {name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.div style={{
          "text-align": "center",
          "margin-top": "3rem",
          "height": "750px",
        }} initial="hidden" animate="visible" variants={{
          hidden: {
            scale: 0.9,
            opacity: 0,
            transition: {
               ease: "anticipate", duration: 1
            }
          },
          visible: {
            scale:  1 - scrollPosition / 1500.0,
            opacity: 1 - scrollPosition / 500.0,
            transition: {
                ease: [0.19, 1, 0.22, 1], duration: 1
            }
          },
        }}>
          <h1 className={styles.title}>
            Bem Vindo ao meu portifólio.
          </h1>

          <div>
            <p className={styles.description}>
              Meu nome é {name}.
            </p>
          </div>

          <div>
            <Image src='/profile.jpeg' width={200} height={200} objectFit="cover" style={{
              "border-radius": "100%"
            }}></Image>
          </div>

          <motion.div className={styles.githubContainer}>
            <Image src="/github-icon.png" width={35} height={35} objectFit="contain"></Image>
            <h3>AnthonyBuilder</h3>
          </motion.div>
        </motion.div>

        <Projetos></Projetos>

      </main>

     
      <motion.footer>
        <h3>
          Feito com NextJS
        </h3>
      </motion.footer>

      <style jsx global>{`
      main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 300px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

// function Sun(props) {
//     const ref = useRef();
//     const { scrollY, scrollYProgress } = useViewportScroll();
  
//     // useTransform(motionValue, from, to);
//     const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    
//     useLayoutEffect(() => {
//       // Get the distance from the start of the page to the element start
//       const rect = ref.current.getBoundingClientRect();
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
//       const offsetStart = rect.top + scrollTop;
//       const offsetEnd = (offsetTop + rect.height);
      
//       const elementScrollStart = offsetStart / document.body.clientHeight;
//       const elementScrollEnd = offsetEnd / document.body.clientHeight;
      
//       // to be continued
//     });
  
//     // Adding a new div as an "anchor" in case motion.div
//     // has other transforms that affect its position on the page
//     return (
//       <div ref={ref}>
//         <motion.div
//           style={{
//             scale,
//           }}
//         >
//           <SunSVG />
//         </motion.div>
//       </div>
//     );
//   }