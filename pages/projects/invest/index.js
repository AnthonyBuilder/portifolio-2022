import Head from 'next/head'
import Image from 'next/image';
import Link from "next/link";

import Slideshow from '../../../components/Slideshow';


import {
  motion,
} from 'framer-motion';

import { useRef, useState } from 'react';

import styles from './styles/main.module.scss'

export default function Invest() {

    const birthElementsVariant = {
      hidden: {
        scale: .5,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          ease: [0.19, 1, 0.22, 1], duration: 1
        }
      }
    }

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <main>
        <motion.div initial="hidden" animate="visible" variants={birthElementsVariant} className={styles.container}>
          <div className={styles.containerTitle}>
            <Image src="/investlogo.jpg" width={50} height={50} objectFit="contain" className={styles.icon}></Image>

            <h1>Invest Futuro</h1>
            <h2>Aplicação iOS de uma fintech.</h2>
          </div>

          <div className={styles.containerImages} style={{
            'textAlign': 'center'
          }}>
            <Image src="/print-invest.png" width={300} height={600} objectFit="contain" />
          </div>

          <div className={styles.containerDescription}>
            <h1>Descrição</h1>
            <p>O Aplicativo foi feito em SwiftUI, 
              ele implementa uma api da Celcoin para enviar e receber pix,
               além de pagar contas e realizar recargas de celular. 
               o Backend é no Firebase onde ficam armazenados todos os usuarios e seus dados.</p>
          </div>


          <div style={{
            'margin-top': '2rem',
          }} className='image-slider'>
            <Slideshow></Slideshow>
          </div>
        </motion.div>


        <style jsx global>{`

        * {
          margin: 0;
          padding: 0;
        }


        p {
          font-size: 1.4rem;
        }

        img {
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .root {
          display:flex;
          flex-direction: column;
        }

        .image-item {
        }
        .container-with-dots {
          width: 100%;
          margin-top: 20px;
          padding-bottom: 10px;
          display:flex;
          flex-direction: column;
        }
   

        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
  
        img {
          position: relative;
          max-width: 100vw;
          max-height: 30rem;
          justify-content: center;
          align-items: center;
        }


        @media (max-width: 600px) {
            .image-slider {
                max-width: 20rem;
                text-align: center;
            }
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
            background: black;
            color: white;
            animation: color-change-2x cubic-bezier(0.19, 1, 0.22, 1) 2s;
        }
        
        * {
          box-sizing: border-box;
        }
        
        /* ----------------------------------------------
        * Generated by Animista on 2022-11-8 12:11:19
        * Licensed under FreeBSD License.
        * See http://animista.net/license for more info. 
        * w: http://animista.net, t: @cssanimista
        * ---------------------------------------------- */

        /**
        * ----------------------------------------
        * animation color-change-2x
        * ----------------------------------------
        */
        @-webkit-keyframes color-change-2x {
          0% {
            background: white;
          }
          100% {
            background: black;

          }
        }
        @keyframes color-change-2x {
          0% {
            background: white;
          }
          100% {
            background: black;
            
          }
        }

        body {
          background: black;
        }
        
      `}</style>
      </main>


    );
}




