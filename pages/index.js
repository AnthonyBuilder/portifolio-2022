import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { 
  motion, 
  useScroll, 
} from 'framer-motion';
  
import { useRef, useState } from 'react';
import { useEffect } from "react";
import styles from "./styles/main.module.scss"
import Projetos from "../components/pages/Projetos"
import Presentation from "../components/pages/Presentation"
import { Analytics } from '@vercel/analytics/react';


export default function Home() {

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
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8762893864776699"
        crossorigin="anonymous"></script>
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

          <div className={styles.imageProfile}>
            <a href="https://wa.me/5511942807999">
              <div className={styles.image} >
              <Image src='/profile.jpeg' width={200} height={200} objectFit="cover" style={{
                "border-radius": "100%"
              }}>
              </Image>
              </div>
              <div className={styles.textProfile }>
                <h6>Whatsapp</h6>
              </div>
            </a>
          </div>

          <div className={styles.columnFlex}>
            <motion.div className={styles.contactItems}>
              <Image src="/github-icon.png" width={35} height={35} objectFit="contain"></Image>
              <a href='https://github.com/AnthonyBuilder'><h3>AnthonyBuilder</h3></a>
            </motion.div>

            <motion.div className={styles.contactItems}>
              <Image src="/linkedin.jpeg" width={35} height={35} objectFit="contain"></Image>
              <a href='https://www.linkedin.com/in/anthony-josé-94b151144/'><h3>Linkedin</h3></a>
            </motion.div>
          </div>
        </motion.div>

        <Presentation></Presentation>
        
        <div style={{
          "margin-top": "300px"
        }}></div>
        <Projetos></Projetos>

      </main>

     
      <motion.footer>
        <h5>© 2023 Anthony José - Feito em NextJS</h5>
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
          font-weight: 500
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
      <Analytics />
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