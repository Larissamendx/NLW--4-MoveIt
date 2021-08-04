import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { ChallengeActive, ChallengeNotActive, Container, FailedButton, Header, SucceededButton } from '../styles/components/ChallengeBox';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <Container>
            { activeChallenge ? (
                <ChallengeActive>
                    <Header>
                        <header>Ganhe {activeChallenge.amount} xp</header>
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} />
                            <strong>Novo Desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                    </Header>
                    <footer>
                        <FailedButton 
                            type="button"
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </FailedButton>
                        <SucceededButton
                            type="button"
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </SucceededButton>
                    </footer>
                </ChallengeActive>
            ) : (
                <ChallengeNotActive>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </p>
                </ChallengeNotActive>
            ) }
        </Container>
    );
}
