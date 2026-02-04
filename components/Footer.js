import Image from 'next/image';
import styles from '../pages/styles/main.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '0.5rem'
          }}>
            <Image
              src="/profile.jpeg"
              width={36}
              height={36}
              objectFit="cover"
              style={{ borderRadius: '50%' }}
            />
            <h4>Anthony José</h4>
          </div>
          <p>Desenvolvedor Full Stack</p>
          <p>Mobile e Web</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Contato</h4>
          <p>
            <a href="tel:+5511939575273">📱 +55 11 93957-5273</a>
          </p>
          <p>
            <a href="https://wa.me/5511939575273" target="_blank" rel="noreferrer">
              💬 WhatsApp
            </a>
          </p>
          <p>
            <a href="mailto:anthony.builder@example.com">✉️ Email</a>
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>Redes Sociais</h4>
          <p>
            <a href="https://github.com/AnthonyBuilder" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/anthonyjs?trk=contact-info" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2024 Anthony José - Feito em NextJS</p>
      </div>
    </footer>
  );
};

export default Footer;
