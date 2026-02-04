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

  //Array of Images
  const images = [
    '/maps-1.png',
    '/maps-2.png',
    '/maps-3.png',  
    ];

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

    return (
      <main>
        <motion.div initial="hidden" animate="visible" variants={birthElementsVariant} className={styles.container}>
          <div className={styles.containerTitle}>
            <Image src="/maps-icon.png" width={50} height={50} objectFit="contain" className={styles.icon}></Image>

            <h1>Maps</h1>
            <h2>Clone do app Maps.</h2>
          </div>

          <div className={styles.containerImages} style={{
            'textAlign': 'center'
          }}>
            <Image src="/maps.png" width={300} height={600} objectFit="contain" />
          </div>

          <div className={styles.containerDescription}>
            <h1>Descrição</h1>
            <p>Maps é um clone funcional do aplicativo Maps nativo da Apple, desenvolvido em SwiftUI. O app utiliza as APIs de localização do iOS para determinar a posição atual do usuário como ponto de partida. 
              O sistema busca locais no banco de dados com base nas coordenadas GPS e traça rotas automáticas. Além disso, armazena locais favoritos do usuário através do CoreData, permitindo acesso rápido aos destinos mais frequentes.</p>
          </div>


          <div style={{
            'margin-top': '2rem',
          }} className='image-slider'>
            <Slideshow images={images}></Slideshow>
          </div>
        </motion.div>

        <div className={styles.container}>
          <div className={styles.containerDescription}>
            <h1>APIs de Localização</h1>
            <p>Integração completa com CLLocationManager para rastreamento de localização em tempo real. O app solicita permissões de localização apropriadas e atualiza a posição do usuário continuamente, garantindo rotas precisas.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Armazenamento de Favoritos</h1>
            <p>Sistema de favoritos implementado com CoreData, permitindo que usuários salvem locais de interesse. Dados persistem entre sessões, oferecendo acesso rápido aos destinos salvos.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Cálculo de Rotas</h1>
            <p>Algoritmo de cálculo de rotas que determina o caminho mais eficiente entre a localização atual e o destino usando as APIs nativas do MapKit.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Interface do Mapa</h1>
            <p>Interface intuitiva e responsiva baseada em mapas interativos. Usuários podem fazer zoom, deslocar e interagir com o mapa para explorar locais e planejar rotas.</p>
          </div>
          </div>
        <style jsx global>{`

        * {
          margin: 0;
          padding: 0;
        }


        p {
          font-size: 1.2rem;
        }

        img {
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .icon {
          width: 100px;
          height: 100px;
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




