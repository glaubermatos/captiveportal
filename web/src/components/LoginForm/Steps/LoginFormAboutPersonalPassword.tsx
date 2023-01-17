import { loginFormSteps } from '..'
import { ButtonBack } from '../../ButtonBack'
import styles from '../styles.module.scss'

interface LoginFormAboutPersonalPasswordProps {
    onChangeStep: (step: string) => void
}
export function LoginFormAboutPersonalPassword({ onChangeStep }: LoginFormAboutPersonalPasswordProps) {
    return(
        <div className={styles.container}>
            <ButtonBack onChangeStep={onChangeStep}/>
            <article>
                <strong>Por que preciso dessa senha?</strong>
                <p>Para ter acesso aos serviços locais de tecnologia da informação no campus Santa Inês. Ex.: Acesso a internet, login nos computadores institucionais, serviço de impressão e acesso a arquivos compartilhados em rede.</p>
            </article>
            <article>
                <strong>Por que preciso cadastrar apenas a senha?</strong>
                <p>Todos, possuem uma conta de usuário cadastrada no sistema, com uma senha padrão.</p>
                <p>O nome do usuário é o mesmo do e-mail institucional, seguindo o mesmo padrão, Ex.: <b>nome.ultimo-sobrenome@ifbaiano.edu.br</b>.</p>
            </article>
            <article>
                <strong>Como cadastro minha senha pessoal?</strong>
                <p>Disponibilizamos 2 maneiras para cadastrar a senha pessoal.</p>
                <p>1- Pode fazer login em um computador institucional fornecendo o seu usuário e a senha padrão, o Windows irá solicitar a alteração da senha padrão.</p>
                <p>2- Dirigir-se ao setor NGTI para realizar a alteração da senha.</p>
            </article>

            <a onClick={() => onChangeStep(loginFormSteps.welcome)} className={styles.linkNavBack}>
                <img src="assets/arrow-left-sm.svg" alt="arrow left" />
                ok, entendi
            </a>
        </div>
    )
}