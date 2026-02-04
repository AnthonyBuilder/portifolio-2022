import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../pages/styles/main.module.scss';

const HeroSection = ({ name, scrollPosition }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageScale = Math.max(1 - scrollPosition / (isMobile ? 900.0 : 700.0), isMobile ? 0.7 : 0.55);
  const textScale = isMobile ? 1 : Math.max(1 - scrollPosition / 2400.0, 0.9);
  const textOpacity = Math.max(1 - scrollPosition / (isMobile ? 450.0 : 320.0), isMobile ? 0.6 : 0);
  const wobble = Math.sin(scrollPosition / 180.0) * (isMobile ? 2.5 : 5);
  const tilt = Math.cos(scrollPosition / 240.0) * (isMobile ? 2 : 4);
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const imageShift = clamp(scrollPosition / 6, -45, 45);
  const titleShift = clamp(scrollPosition / 10, -28, 28);
  const nameShift = clamp(scrollPosition / 12, -24, 24);

  return (
    <motion.div
      style={{
        textAlign: 'center',
        marginTop: '5rem',
        marginBottom: '15rem',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '900px',
        transformStyle: 'preserve-3d'
      }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 1,
          opacity: 0,
          transition: {
            ease: 'anticipate',
            duration: 1,
          },
        },
        visible: {
          scale: 1,
          opacity: textOpacity,
          transition: {
            ease: [0.19, 1, 0.22, 1],
            duration: 1,
          },
        },
      }}
    >
      <div className={styles.imageProfile} style={{
        transform: `translate3d(0, ${imageShift}px, 0) scale(${imageScale}) rotateX(${tilt}deg) rotateY(${wobble}deg)`,
        transformOrigin: 'center top',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}>
        <a href="https://wa.me/5511939575273">
          <div className={styles.image}>
            <Image
              src="/profile.jpeg"
              width={200}
              height={200}
              objectFit="cover"
              style={{
                borderRadius: '100%',
              }}
            />
          </div>
          <div className={styles.textProfile}>
            <h6>Whatsapp</h6>
          </div>
        </a>
      </div>

      <h1 className={styles.title} style={{
        fontSize: 'clamp(2.4rem, 6vw, 4rem)',
        marginBottom: '-0.4rem',
        color: '#6b7280',
        fontWeight: '900',
        letterSpacing: '-1px',
        transform: `translate3d(0, ${titleShift}px, 0) scale(${textScale}) rotateX(${tilt * 0.6}deg) rotateY(${wobble * 0.6}deg)`,
        transformOrigin: 'center top',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}>Bem vindo ao meu portfólio.</h1>

      <div>
        <p className={styles.description} style={{
          fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
          color: '#7a8a9c',
          marginTop: '0',
          marginBottom: '0.2rem',
          fontWeight: '600',
          transform: `translate3d(0, ${nameShift}px, 0) scale(${textScale}) rotateX(${tilt * 0.4}deg) rotateY(${wobble * 0.4}deg)`,
          transformOrigin: 'center top',
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}>Meu nome é <span style={{ color: '#38bdf8' }}>{name}</span></p>
      </div>

      <div className={styles.columnFlex} style={{
        gap: '2rem',
        marginTop: '2.5rem',
        flexDirection: 'row',
        flexWrap: 'nowrap'
      }}>
        <a href="https://github.com/AnthonyBuilder" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.8rem 1.5rem',
          borderRadius: '12px',
          background: 'rgba(56, 189, 248, 0.1)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          cursor: 'pointer'
        }} onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.6)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          <Image
            src="/github-icon.png"
            width={32}
            height={32}
            objectFit="contain"
          />
          <h3 style={{
            margin: '0',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: '#38bdf8',
            fontWeight: '600'
          }}>GitHub</h3>
        </a>

        <a href="https://www.linkedin.com/in/anthonyjs?trk=contact-info" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.8rem 1.5rem',
          borderRadius: '12px',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          cursor: 'pointer'
        }} onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.6)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          <Image
            src="/linkedin.jpeg"
            width={32}
            height={32}
            objectFit="contain"
          />
          <h3 style={{
            margin: '0',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: '#3b82f6',
            fontWeight: '600'
          }}>LinkedIn</h3>
        </a>
      </div>
    </motion.div>
  );
};

export default HeroSection;
