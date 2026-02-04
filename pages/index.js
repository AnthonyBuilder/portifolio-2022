import Head from 'next/head'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from "./styles/main.module.scss"
import Projetos from "../components/pages/Projetos"
import Presentation from "../components/pages/Presentation"
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"
import { Analytics } from '@vercel/analytics/react';


export default function Home() {

  const name = "Anthony José de A. Silva"
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    
    <div>
      <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8762893864776699"
        crossorigin="anonymous"></script>
        <title>{`Portifolio ${name}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="description" content="Portfólio de Anthony José - Desenvolvedor Full Stack Mobile e Web" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.pageTransition}>
          <HeroSection name={name} scrollPosition={scrollPosition} />
          <Presentation />
          
          <div style={{
            "margin-top": "300px"
          }}></div>
          <Projetos />
        </main>
      </div>

      <Footer />

      <style jsx global>{`
      main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 300px;
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