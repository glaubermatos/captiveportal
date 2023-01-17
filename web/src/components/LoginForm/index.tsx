import { LoginFormAboutPersonalPassword } from './Steps/LoginFormAboutPersonalPassword'
import { LoginFormWelcome } from './Steps/LoginFormWelcome'
import { LoginFormLogin } from './Steps/LoginFormLogin'
import { useState } from 'react'

interface LoginFormProps {
    error?: boolean;
}

export const loginFormSteps = {welcome: 'WELCOME', about: 'ABOUT', login: 'LOGIN'}

export function LoginForm( {error = false}: LoginFormProps ) {
    const [step, setStep] = useState<string>(loginFormSteps.welcome)

    function handleChangeStep(step: string) {
        setStep(step)
    }

    return(
        <>
            { step === loginFormSteps.welcome ? (
                <LoginFormWelcome onChangeStep={handleChangeStep} />

            ) : step === loginFormSteps.about ? (
                <LoginFormAboutPersonalPassword onChangeStep={handleChangeStep} />

            ) : (
                <LoginFormLogin error={error} onChangeStep={handleChangeStep} />
            )}
        </>
    )
}