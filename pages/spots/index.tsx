import Head from 'next/head'
import React, { SetStateAction } from 'react'
import styles from '../../styles/Letters.module.css'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Postart</title>
        <meta name="description" content="Postart - experiments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.letterBox}>
          A
        </div>
      </main>
    </div>
  )
}
