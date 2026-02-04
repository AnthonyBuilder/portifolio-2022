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
    '/print-invest-1.png',
    '/print-invest-2.png',
    '/print-invest-3.png',
    '/print-invest-4.png',
    '/print-invest-5.png',
    '/print-invest-6.png',
    '/print-invest-7.png',
    '/print-invest-8.png',
    '/print-invest-9.png',
    '/print-invest-10.png',
    '/print-invest-11.png'
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
            <p>O Invest Futuro é uma aplicação iOS de fintech desenvolvida em SwiftUI. O app implementa integração com a API da Celcoin para operações de envio e recebimento de Pix, além de funcionalidades para pagamento de contas e recargas de celular. 
               O Backend utiliza Firebase para armazenar dados de usuários de forma segura e escalável, garantindo sincronização em tempo real.</p>
          </div>


          <div style={{
            'margin-top': '2rem',
          }} className='image-slider'>
            <Slideshow images={images}></Slideshow>
          </div>
        </motion.div>

        <div className={styles.container}>
          <div className={styles.containerDescription}>
            <h1>CoreData</h1>
            <p>Implementação de CoreData para modelagem e persistência de dados local. O aplicativo sincroniza dados com Firebase, permitindo que informações de usuários sejam armazenadas tanto localmente quanto na nuvem, garantindo acesso offline e performance otimizada.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Testes Unitários</h1>
            <p>Suite completa de testes unitários para validar a lógica de negócios, integração com APIs e tratamento de erros. Os testes garantem qualidade de código e facilitam detecção de bugs em diferentes cenários.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Segurança</h1>
            <p>Implementação de criptografia robusta para proteção de senhas definidas pelo usuário. Autenticação por telefone com verificação de OTP, garantindo acesso seguro e proteção contra acesso não autorizado.</p>
          </div>

          <div className={styles.containerDescription}>
            <h1>Webhook</h1>
            <p>Sistema de webhook integrado para notificar usuários em tempo real sobre operações de pagamento e recebimento. As notificações são push notifications que mantêm o usuário informado sobre todas as transações realizadas.</p>
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




