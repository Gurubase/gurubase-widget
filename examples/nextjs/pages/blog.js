import styles from '../styles/Home.module.css';

export default function Blog() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Blog Posts</h1>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Getting Started with Next.js</h3>
            <p>Learn how to build modern web applications with Next.js</p>
            <small>Posted on March 15, 2024</small>
          </div>

          <div className={styles.card}>
            <h3>Web Development Best Practices</h3>
            <p>Essential tips for building scalable web applications</p>
            <small>Posted on March 10, 2024</small>
          </div>

          <div className={styles.card}>
            <h3>The Future of React</h3>
            <p>Exploring upcoming features and improvements in React</p>
            <small>Posted on March 5, 2024</small>
          </div>
        </div>
      </main>
    </div>
  );
} 