import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Container, Bar } from '../styles/components/ExperienceBar';

export function ExperienceBar () {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return(
        <Container>
            <span>0 xp</span>
            <Bar>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </Bar>
            <span>{experienceToNextLevel} xp</span>
        </Container>
    );
}