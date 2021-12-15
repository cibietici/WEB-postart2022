import Head from 'next/head'
import React, { SetStateAction } from 'react'
import styles from '../../styles/Spots.module.css'
import { spots, spotsEl } from '../../utils/utils'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Postart</title>
        <meta name="description" content="Postart - experiments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          spotsEl.map((spot) =>(
            <div key={spot.id} 
              className={`${styles.spot} animation${spot.animation}`}
              style={
                {
                  backgroundColor: spot.color,
                  width: `${spot.width}px`,
                  height: `${spot.width}px`,
                  top: `${spot.posY}%`,
                  left: `${spot.posX}%`
                }
                }>
            </div>
          ))
        }
      </main>
    </div>
  )
}
