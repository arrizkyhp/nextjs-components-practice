import Image from 'next/image';

import styles from '../common/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>
          🎉 Welcome to{' '}
          <a href="https://nextjs.org" className="font-bold">
            Next.js! Starter🎉
          </a>
        </h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
