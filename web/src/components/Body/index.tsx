import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface BodyProps {
    children: ReactNode
}

export function Body({children}: BodyProps) {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}