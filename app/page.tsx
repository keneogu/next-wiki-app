import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
     <h1>Next App</h1>
    </main>
  )
}
