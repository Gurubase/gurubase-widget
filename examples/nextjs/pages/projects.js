import styles from '../styles/Home.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Our Projects</h1>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Project 1</h3>
            <p>A revolutionary web application built with Next.js and React.</p>
          </div>

          <div className={styles.card}>
            <h3>Project 2</h3>
            <p>Mobile-first design system implemented across multiple platforms.</p>
          </div>

          <div className={styles.card}>
            <h3>Project 3</h3>
            <p>AI-powered analytics dashboard for real-time monitoring.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 