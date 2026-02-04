import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../pages/styles/main.module.scss';

const HeroSection = ({ name, scrollPosition }) => {
  return (
    <motion.div
      style={{
        textAlign: 'center',
        marginTop: '3rem',
        height: '750px',
      }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.9,
          opacity: 0,
          transition: {
            ease: 'anticipate',
            duration: 1,
          },
        },
        visible: {
          scale: Math.max(1 - scrollPosition / 1500.0, 0.4),
          opacity: Math.max(1 - scrollPosition / 500.0, 0),
          transition: {
            ease: [0.19, 1, 0.22, 1],
            duration: 1,
          },
        },
      }}
    >
      <h1 className={styles.title}>Bem Vindo ao meu portifólio.</h1>

      <div>
        <p className={styles.description}>Meu nome é {name}.</p>
      </div>

      <div className={styles.imageProfile}>
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

      <div className={styles.columnFlex}>
        <motion.div className={styles.contactItems}>
          <Image
            src="/github-icon.png"
            width={35}
            height={35}
            objectFit="contain"
          />
          <a href="https://github.com/AnthonyBuilder">
            <h3>AnthonyBuilder</h3>
          </a>
        </motion.div>

        <motion.div className={styles.contactItems}>
          <Image
            src="/linkedin.jpeg"
            width={35}
            height={35}
            objectFit="contain"
          />
          <a href="https://www.linkedin.com/in/anthony-josé-94b151144/">
            <h3>Linkedin</h3>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
