import { ReactNode } from 'react'
import styles from './card.module.css'

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}