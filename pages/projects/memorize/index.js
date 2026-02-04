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

    return (
      <main>
        <motion.div initial="hidden" animate="visible" variants={birthElementsVariant} className={styles.container}>
          <div className={styles.containerTitle}>
            <Image src="/memory-icon.webp" width={50} height={50} objectFit="contain" className={styles.icon}></Image>

            <h1>Memorize</h1>
            <h2>Clone do curso cs193p</h2>
          </div>

          <div className={styles.containerImages} style={{
            'textAlign': 'center'
          }}>
            <Image src="/memorize.png" width={300} height={600} objectFit="contain" />
          </div>

          <div className={styles.containerDescription}>
            <h1>Descrição</h1>
            <p>
              Memorize é um jogo de memória implementado em SwiftUI seguindo a arquitetura MVVM. O projeto foi desenvolvido como parte do curso Stanford CS193P de desenvolvimento iOS, 
              demonstrando sólidos conhecimentos de padrões de design e desenvolvimento reativo. O jogo oferece uma experiência envolvente com animações fluidas e lógica inteligente de gameplay.
            </p>
          </div>
          
          <div className={styles.containerDescription}>
            <h1>Arquitetura MVVM</h1>
            <p>Implementação completa do padrão Model-View-ViewModel separando a lógica do jogo da apresentação. O modelo gerencia o estado das cartas, lógica de correspondência e pontuação, enquanto a View camada renderiza a interface de forma reativa.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Mecânica de Jogo</h1>
            <p>Sistema robusto de lógica para emparelhamento de cartas com detecção automática de matches e manutenção de pontuação. O jogo oferece diferentes níveis de dificuldade e quantidade de cartas.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Animações Fluidas</h1>
            <p>Transições suaves e animações visuais que melhoram a experiência do usuário. As cartas giram com efeito 3D quando reveladas e desaparecem quando acertadas, criando feedback visual satisfatório.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Customização Temática</h1>
            <p>Suporte a temas visuais variados com diferentes emojis e temas de cores. Os usuários podem personalizar a aparência do jogo selecionando entre vários conjuntos de símbolos e paletas de cores.</p>
          </div>
          
          <div className={styles.movieContainer}>
          <video autoPlay loop style={{ height: '100vh' }} controls>
            <source src="/memorize-scene.mov" />
          </video>
          </div>
        </motion.div>

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




