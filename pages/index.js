import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>
        Caitlin&#39;s Next Portfolio
      </h1>
        <p>
          Instantly deploy your Next.js site to a shareable URL
          with&nbsp;Vercel.
        </p>
    </>
  )
}
