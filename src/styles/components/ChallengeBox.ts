import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;

    background: var(--color-primary);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    text-align: center;

`;

export const Header = styled.header`
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 90%;

    header {
        color: var(--color-secondary);
        padding: 1.5rem 0;
        font-weight: 600;
        font-size: 1.25rem;
        border-bottom: 1px solid var(--line);
        width: 100%;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    main strong {
        font-weight: 600;
        font-size: 2rem;
        color: var(--title);
        margin: 1.5rem 0 1rem;
    }

    main p {
        line-height: 1.5;
    }
`;

export const ChallengeActive = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    

    footer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }

    footer button {
        height: 4rem;
    
        display: flex;
        align-items: center;
        justify-content: center;
    
    
        font-size: 1rem;
        font-weight: 600;

        transition: background 0.2s;
    }
`;

export const ChallengeNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 2rem;

    strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
    }

    p {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.4;
        max-width: 70%;
        margin-top: 3rem;
    }

    p img {
        margin-bottom: 1rem;
    }
`;

export const FailedButton = styled.button`
    color: var(--button-text-failed);
    background: var(--button-failed);
    border-top: 1px solid var(--line); 
    border-right: 1px solid var(--line); 
    border-radius: 0 0 0 5px;
    
    &:hover {
        background: var(--red);
        color: var(--color-primary);
    }
`;

export const SucceededButton = styled.button`
    color: var(--button-text-succeeded);
    background: var(--button-succeeded);
    border-top: 1px solid var(--line); 
    border-radius: 0 0 5px 0;

    &:hover {
        background: var(--green);
        color: var(--color-primary);
    }
    
`;