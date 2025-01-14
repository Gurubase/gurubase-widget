import styles from '../styles/Home.module.css';


export default function About() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>About Us</h1>
        
        <p className={styles.description}>
          We are a team of passionate developers building the next generation of web applications.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>To create innovative solutions that make the web better for everyone.</p>
          </div>

          <div className={styles.card}>
            <h3>Our Team</h3>
            <p>A diverse group of developers, designers, and creative thinkers.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 