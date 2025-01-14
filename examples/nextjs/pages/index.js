import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to My Portfolio
        </h1>

        <p className={styles.description}>
          Explore my work and learn more about what I do
        </p>

        <div className={styles.grid}>
          <Link href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Discover the various projects I've worked on.</p>
          </Link>

          <Link href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Read my latest thoughts and tutorials on web development.</p>
          </Link>

          <Link href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Learn more about me and my professional journey.</p>
          </Link>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}