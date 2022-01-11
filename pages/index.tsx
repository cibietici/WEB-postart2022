import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import { experiments } from '../utils/globals'


export default function Spots() {
  return (
    <div className={styles.container}>
      <Head>
        <html lang="en" />
        <title>Postart</title>
        <meta name="description" content="Postart - experiments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav>
          <ul className={styles.experimentsList}>
            {
              experiments.map((experiment) => (
                <Link as={experiment.link} href={experiment.link} passHref={true} key={experiment.increment}>
                  <li>
                    <span>{experiment.increment}</span>
                    <p>{experiment.title}</p>
                  </li>
                </Link>
              ))
            }
          </ul>
        </nav>
      </main>
    </div>
  )
}
