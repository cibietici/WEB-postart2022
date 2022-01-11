import Head from 'next/head'
import React, { SetStateAction } from 'react'
import { useState, useEffect, useRef } from 'react'
import { letters } from '../../utils/globals'
import styles from '../../styles/Letters.module.css'

function createLetter(): string {
  const totLetters = letters.length
  const randomIndex = Math.floor(Math.random() * totLetters)
  const currentLetter = letters[randomIndex]
  return currentLetter
} 

export default function Letters() {

  const [letter, setLetter ] = useState(createLetter())
  const [phrase, setPhrase ] = useState('')

  /*useEffect(() => {
    async function create() {
      setLetter(createLetter()) 
    }
    create()
  })*/

  useEffect(() => {
    setInterval(() => {
      const randomLetter = createLetter()
      setPhrase(() => phrase + randomLetter)
      setLetter(randomLetter) 
    }, 4000)
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Postart</title>
        <meta name="description" content="Postart - experiments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.phraseBox}>{phrase}</div>
        <div className={styles.letterBox}>
          {letter}
        </div>
      </main>
    </div>
  )
}
