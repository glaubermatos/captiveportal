import { loginFormSteps } from '..'
import styles from '../styles.module.scss'

interface LoginFormWelcomeProps {
    onChangeStep: (step: string) => void
}

export function LoginFormWelcome({ onChangeStep }: LoginFormWelcomeProps) {
    return(
        <div className={styles.container}>
            <h2>Bem-vindo!</h2>
            <p>Esta rede é de uso exclusivo dos servidores TAEs, docentes e terceirizados.</p>

            <div className={styles.help}>
                <span>Como posso ter acesso a essa rede?</span>
                <p>É necessário cadastrar uma senha de uso pessoal, caso ainda não a possua.</p>

                <a onClick={() => onChangeStep(loginFormSteps.about)} >Por que preciso dessa senha?</a>
            </div>

            <div className={styles.actions}>
                <a className="button" target="_blank" rel="noopener noreferrer" href="https://portal.ifbaiano.si.intranet/univention/self-service/#page=passwordchange">Cadastrar minha senha pessoal</a>
                <div>
                    <div>Já cadastrei minha senha</div>
                    <a onClick={() => onChangeStep(loginFormSteps.login)} className="button primary">Entrar</a>
                </div>
            </div>
        </div>
    )
}