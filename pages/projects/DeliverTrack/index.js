
import Head from 'next/head'
import Image from 'next/image';
import Link from "next/link";

import Slideshow from '../../../components/Slideshow';


import {
  motion,
} from 'framer-motion';

import { useRef, useState } from 'react';

import styles from './styles/main.module.scss'

export default function DeliverTrack() {
    //Array of Images
    const images = [
      '/delivertrack/screenshot1.jpeg',
      '/delivertrack/screenshot2.jpeg',
      '/delivertrack/screenshot3.jpeg',
      '/delivertrack/screenshot4.jpeg'
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
            <Image src="/delivertrackicon.png" width={50} height={50} objectFit="contain" className={styles.icon}></Image>

            <h1>DeliverTrack</h1>
            <h2>Aplicação própria iOS.</h2>
          </div>

          <div className={styles.containerImages} style={{
            'textAlign': 'center'
          }}>
            <Image src="/deliverTrack.png" width={300} height={600} objectFit="contain" />
          </div>

          <a href='https://apple.co/3WQ7Xda'>
              <Image src="/btDownload.svg" width={250} height={63} objectFit="contain"></Image>
            </a>

          <div className={styles.containerDescription}>
            <h1>Descrição</h1>
            <p>
              DeliverTrack é um aplicativo iOS de rastreamento de encomendas desenvolvido em SwiftUI com arquitetura escalável. 
              O app comunica com uma API personalizada construída em Next.js para obter dados de rastreamento do Correios e outras transportadoras. 
              A aplicação oferece atualizações em tempo real do status de pacotes, permitindo aos usuários monitorar entregas com precisão e receber notificações automáticas.
            </p>
          </div>


          <div style={{
            'margin-top': '2rem',
          }} className='image-slider'>
            <Slideshow images={images}></Slideshow>
          </div>
        </motion.div>

        <div className={styles.container}>
          <div className={styles.containerDescription}>
            <h1>Rastreamento em Tempo Real</h1>
            <p>Integração com APIs dos Correios e demais transportadoras para obter atualizações instantâneas da localização e status de pacotes. O sistema sincroniza dados regularmente para manter informações precisas e confiáveis.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>API Personalizada</h1>
            <p>Backend desenvolvido em Next.js para agregação de dados de múltiplas transportadoras, processamento seguro de requisições e caching inteligente de informações de rastreamento.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Notificações Automáticas</h1>
            <p>Sistema de push notifications que alerta usuários sobre mudanças no status de seus pacotes, atualizações de localização e eventos importantes na entrega.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Expansão de Transportadoras</h1>
            <p>Roadmap inclui integração com outras empresas de transporte além dos Correios, oferecendo suporte abrangente para entregas nacionais e internacionais.</p>
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




