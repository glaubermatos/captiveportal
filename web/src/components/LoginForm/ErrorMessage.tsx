
import styles from './styles.module.scss'

interface ErrorMessageProps {
    isVisible?: boolean;
}

export function ErrorMessage({isVisible = false}: ErrorMessageProps) {
    return(
        <>
            { isVisible && (
                <div className={styles.errorContainer}>
                    <img src="assets/icon-alert.svg" alt="" />
                    {/* Mensagens do servidor ex.: Invalid credentials especifieds! */}
                    <p>{"$PORTAL_MESSAGE$"}</p>
                </div>
            ) }
        </>
    )
}