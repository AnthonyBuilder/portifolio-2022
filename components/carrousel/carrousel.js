import styles from './style.module.scss'

export default function Carrousel({ technologies = [] }) {
    const defaultTechnologies = [
        'SwiftUI',
        'Xcode',
        'Flutter',
        'NodeJS',
        'JavaScript',
        'React',
        'NextJS',
        'Tailwindcss',
        'Bootstrap',
        'MongoDB',
        'Firebase',
        'MySQL',
        'PHP',
        'React Native',
        'TypeScript',
        'Python',
        'REST API',
        'Git',
        'Docker',
        'AWS',
        'HTML',
        'CSS',
 
    ];

    const techList = technologies.length > 0 ? technologies : defaultTechnologies;

    return(
        <div className={styles.slider}>
        <div className={styles.slideTrack}>
            {techList.map((tech, index) => (
                <div key={index} className={styles.slide}>
                    <h1>{tech}</h1>
                </div>
            ))}
        </div>
    </div>
    )
}