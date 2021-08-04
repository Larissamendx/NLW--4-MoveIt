import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ProfileContainer } from '../styles/components/Profile';

export function Profile (){
    const { level } = useContext(ChallengesContext);

    return(
        <ProfileContainer>
            <span>
                <img src="./icons/user.svg" alt="Larissa Carvalho"/>
            </span>
            <div>
                <strong>User</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
    );
}