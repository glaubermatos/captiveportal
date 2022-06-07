import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Body } from '../components/Body'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import { LoginForm } from '../components/LoginForm'
import { Footer } from '../components/Footer'

const Error: NextPage = () => {
  return (
    <main className={styles.mainContainer}>
      <Head>
        <meta name="description" content="Acesso a rede sem fio servidores" />
        <link rel="icon" href="/favicon.ico" />

        <title>Login na rede Servidores</title>
      </Head>
      
      <section className={styles.imageContainer}>
          <img src="assets/image-login.svg" alt="image-login" />
      </section>
      <section className={styles.content}>
          <div className={styles.container}>
              <Header />
              <Body>
                <LoginForm error={true} />                
              </Body>
          </div>
          <Footer />
      </section>

    </main>
  )
}

export default Error
