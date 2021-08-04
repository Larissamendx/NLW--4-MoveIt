import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";



interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
    initialTime: number;
    progressButton: number;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children } : CountdownProviderProps)  {
    const { startNewChallenge } = useContext(ChallengesContext);

    const initialTime = 0.1;
    const [timer, setTimer] = useState(0);
    const [time, setTime] = useState(initialTime * 300);
    // const [progressButton, setProgressButton] = useState(0);

    const [isActive, setisActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const progressButton =  Math.floor((timer * 100) / (initialTime * 300))

    

    function startCountdown() {
        setisActive(true);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTimer(timer + 1);
                setTime(time - 1);
            },1000)
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setisActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setisActive(false);
        setHasFinished(false);
        setTime(initialTime * 60); 
        setTimer(0)
    }

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
            initialTime,
            progressButton
        }}>
            {children}
        </CountdownContext.Provider>
    );
}