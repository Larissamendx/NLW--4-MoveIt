import React, { useContext, useState } from 'react'
import Head from 'next/head';

import styles from '../styles/components/Login.module.css';
import { AutheticatedContext } from '../contexts/AutheticatedContext';
import { signIn, signOut, useSession } from 'next-auth/client'
import session from './api/examples/session';





export default function Login () {
    const { autheticated } = useContext(AutheticatedContext)

    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
            </Head>

            <div className={styles.loginContainer}>
                <h1><img src="icons/logo.svg" alt="Logo" className={styles.logo}/></h1>
                <h2>Bem Vindo</h2>
                <strong><img src="icons/github.svg" alt="GitHub"/> Faça login com seu Github para começar</strong>
                <form>
                    <input type="email" placeholder="Digite o seu username"/>
                    {/* <button type="submit"><img src="icons/arrow-right.svg" alt="Arrow Right"/></button>: */}
                        <button onClick={() => signIn()}><img src="icons/arrow-right.svg" alt="Arrow Right"/></button>
                </form>
                <br/>
                <a href="#" onClick={autheticated}>Entrar sem conta</a>
            </div>
        </div>
    );
}