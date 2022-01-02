import Head from 'next/head'
import Image from 'next/image'
import React, { SetStateAction } from 'react'
import styles from '../../styles/Spots.module.css'
import { spots, spotsEl, bacteries } from '../../utils/utils'


export default function Home() {

  let pulsingVariation = 'A'

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
        <div className={styles.shape}>
          <Image src="/shape01.svg" alt="shape" layout='fill' width={500} height={100} />
        </div>
        {
          bacteries(4800).map((b) =>{

            const output = <div className={styles.bactery}
              key={b.id}
              style={
                {
                  width: `${b.width}px`,
                  height: `${b.height}px`,
                  top: `${b.top}px`,
                  left: `${b.left}px`,
                  //animationName: `pulsing${pulsingVariation}`,
                  //animationDuration: '0.9s',
                  //animationIterationCount: 'infinite'
                }
              }>
            </div>
            ( pulsingVariation === 'A') ? pulsingVariation = 'B' : pulsingVariation = 'A'
            return output
          })
        }
      </main>
    </div>
  )
}
