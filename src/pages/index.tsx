import React, { useContext, useEffect, useState} from 'react'
import { useSession } from 'next-auth/client'


import Head from 'next/head';
import { GetServerSideProps } from 'next'
import DarkModeToggle from 'react-dark-mode-toggle'

import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { CountdownProvider } from '../contexts/CountdownContext';
import { Lateral } from '../components/Lateral';
import { Profile } from '../components/Profile';
import { Container, Toggle } from '../styles/pages/Home';
import { ThemeContext } from 'styled-components';
import Rooter from '../routes';
import Login from './Login';
import { AutheticatedContext } from '../contexts/AutheticatedContext';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  toggleTheme: () => void;
  isAutheticated: boolean;

}

export default function Home(props) {
  const {title } = useContext(ThemeContext)
  const { autheticated } = useContext(AutheticatedContext)

  const [ session, loading ] = useSession()
  // const [ content , setContent ] = useState()

  // // Fetch content from protected route
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const res = await fetch('/api/examples/protected')
  //     const json = await res.json()
  //     if (json.content) { setContent(json.content) }
  //   }
  //   fetchData()
  // },[session])

  // // When rendering client side don't display anything until loading is complete
  // if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (props.isAutheticated == 0) { return  <Login /> }


return (
      <ChallengesProvider 
        level={props.level} 
        currentExperience={props.currentExperience} 
        challengesCompleted={props.challengesCompleted}>
        <Container>
          <Head>
            <title>Início | Move.It</title>
          </Head>
          <nav>
              <Lateral />
          </nav>
          <main>
            <ExperienceBar />
            <CountdownProvider>
              
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </main>
          <Toggle>
            <DarkModeToggle
              onChange={props.toggleTheme}
              checked={title === 'dark'}
            />
          </Toggle>
        </Container>
      </ChallengesProvider>

)}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted, isAutheticated } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      isAutheticated: Number(isAutheticated)
    }
  }
}
