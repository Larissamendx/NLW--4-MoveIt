import React from 'react';
import { CountdownContext } from "../contexts/CountdownContext";
import { useContext } from 'react';
// import styles from '../styles/components/Countdown.module.css';
import { Border, BorderBefore, Button, ButtonActive, Container, CountdownContainer, Point } from '../styles/components/Countdown';

export function Countdown() {
    const { 
        minutes, 
        seconds, 
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
        progressButton
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    // console.log(progressButton)
    return(
        <Container>
            <CountdownContainer>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <Point>:</Point>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </CountdownContainer>

            { hasFinished ? (
                <Button 
                    disabled
                >
                    Ciclo Encerrado
                    <img src="icons/completed.svg" alt=""/>          
                </Button>
            ) : (
                <>
                    { isActive ? (
                        <div>
                            
                            <Button 
                                type="button" 
                                onClick={resetCountdown}
                            >
                                    <ButtonActive>
                                    Abandonar ciclo
                                    <img src="icons/close.svg" alt=""/>
                                    </ButtonActive> 
                                    <Border></Border>
                                <BorderBefore style={{width: progressButton + '%'}}></BorderBefore>
                            </Button>
                            
                        </div>
                    ) : (
                        <Button 
                            type="button" 
                            onClick={startCountdown}
                        >   
                                Iniciar um ciclo
                                <img src="icons/play-arrow.svg" alt=""/>      
                        </Button>
                    )}
                </>
            )}

        </Container>
    );
}