import Head from 'next/head'
import React, { SetStateAction } from 'react'
import { useState, useEffect, useRef } from 'react'
import styles from '../../styles/Mum.module.css'
import { mums } from '../../utils/utils'


export default function Mum() {
    return (
        <main className={styles.main}>
            <div className={styles.filter}></div>
            {
            mums.map((spot) =>(
                <div key={spot.id} 
                    className={`${styles.spot}`}
                    style={
                    {
                        width: `${spot.width}px`,
                        height: `${spot.width}px`,
                        top: `${spot.top}px`,
                        left: `${spot.left}px`
                    }
                    }>
                </div>
            ))
            }
        </main>
    )
}