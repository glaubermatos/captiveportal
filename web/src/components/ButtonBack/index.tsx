import { loginFormSteps } from '../LoginForm'
import styles from './styles.module.scss'

interface ButtonBackProps {
    onChangeStep: (step: string) => void
}

export function ButtonBack( { onChangeStep }: ButtonBackProps) {
    return(
        <a onClick={() => onChangeStep(loginFormSteps.welcome)} className={styles.container}>
            <img src="assets/arrow-left.svg" alt="Arrow left" />
        </a>
    )
}