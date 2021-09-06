import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react'
import { CrossStorageClient } from 'cross-storage/lib/index'


export default function Home() {

  const[storage, setStorage] = useState(true);

  useEffect(() => {
    // const storage = new CrossStorageClient('http://localhost:3000/');
    const storage = new CrossStorageClient('https://xvercel.ml/');
    storage.onConnect()
    .then(() => storage.get('cart'))
    .then(res => console.log("testing", res))
    .catch(err => console.log(err));
  }, [storage])


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <button onClick={() => setStorage(!storage)}>Get Latest Values</button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
