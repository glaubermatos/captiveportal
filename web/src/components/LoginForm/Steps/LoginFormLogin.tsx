import { useState } from 'react'
import { loginFormSteps } from '..'
import { ButtonBack } from '../../ButtonBack'
import { ErrorMessage } from '../ErrorMessage'
import styles from '../styles.module.scss'

interface LoginFormLoginProps {
    onChangeStep: (step: string) => void;
    error: boolean;
}

export function LoginFormLogin({ onChangeStep, error }: LoginFormLoginProps) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    let fieldPasswordHasValid = false
    let fieldUsernameHasValid = false

    function formIsValid() {
        if(password.length >= 3) {
            if (password === '123@Mudar') {
                fieldPasswordHasValid = false
            } else {
                fieldPasswordHasValid = true
            }
        } else {
            fieldPasswordHasValid = false
        }

        if(username.trim().length >= 3) {
            fieldUsernameHasValid = true
        } else {
            fieldUsernameHasValid = false
        }

        if(fieldPasswordHasValid && fieldUsernameHasValid) {
            return true
        }else {
            return false
        }
    }

    return(
        <div className={styles.container}>
            <ButtonBack onChangeStep={onChangeStep} />

            <form method="post" action="https://hotspot.si.ifbaiano.edu.br:8011/index.php?zone=servidores">
                <ErrorMessage isVisible={error} />
                <h2>Acessar rede</h2>

                <div className={styles.inputGroup}>
                    <label htmlFor="user">Usuário <small>(ex.: joao.silva)</small></label>

                    <div className={styles.input}>
                        <img src="assets/icon-user.svg" alt="" />
                        <input id="user" name="auth_user" type="text" autoComplete="off" required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="pass">Senha <small>(a senha padrão não é permitida)</small></label>
                    <div className={styles.input}>
                        <img src="assets/icon-password.svg" alt="" />
                        <input id="pass" name="auth_pass" type={showPassword ? "text" : "password"} required onChange={(e) => setPassword(e.target.value)} />

                        { showPassword ? (
                            <button onClick={() => setShowPassword(!showPassword)} type="button" className={styles.btnEye} title="Esconder senha">
                                <img src="assets/icon-hide-password.svg" alt="" />
                            </button>
                        ) : (
                            <button onClick={() => setShowPassword(!showPassword)} type="button" className={styles.btnEye} title="Mostrar senha">
                                <img src="assets/icon-show-password.svg" alt="" />
                            </button>
                        )}
                    </div>
                </div>
                {/* <a className="forgot-password" href="https://portal.ifbaiano.si.intranet/univention/self-service/#passwordreset" target="_blank" rel="noopener noreferrer">Esqueci minha senha</a> */}
                {/* <input name="redirurl" type="hidden" value="$PORTAL_REDIRURL$" /> */}
                <input name="redirurl" type="hidden" value="http://portal.ifbaiano.si.intranet"></input>
                {/* <input name="zone" type="hidden" value="$PORTAL_ZONE$" /> */}
                <input name="accept" type="submit" value="ACESSAR" className="button primary" disabled={!formIsValid()} />
            </form>
        </div>
    )
}