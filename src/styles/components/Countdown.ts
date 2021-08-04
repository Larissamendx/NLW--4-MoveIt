import styled from 'styled-components'

export const Container = styled.div`
    
`;

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);

    div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    
        background: var(--color-primary);
        box-shadow: 0 0 60px rgba(0, 0, 0 0.05);
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;
    }

    div span {
        flex: 1;
    }

    div span:first-child {
        border-right: 1px solid #f0f1f3;
    }

    div span:last-child {
        border-left: 1px solid #f0f1f3;
    }

`;

export const Point = styled.span`
    font-size: 6.25rem;
    margin: 0 0.5rem;
`;

export const Button = styled.button`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: var(--color-secondary);
    color: var(--button-text);

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;

    outline: 0;

    position: relative;

    &:not(:disabled):hover{
        background: var(--color-secondary-dark);
    }

    &:disabled {
        background: var(--color-primary);
        color: var(--text);
        cursor: not-allowed;
        border-bottom: 4px solid var(--green);
    }

    &:disabled > img {
        margin-left: 0.6rem;
    }
`;

export const ButtonActive = styled.button`
    background: var(--color-primary);
    color: var(--text);
    width: 100%;
    height: 100%;

    border: 0;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.25rem;
    font-weight: 600;

    &:hover {
        background: var(--red);
        // color: var(--color-primary);
    }


`;

export const Border = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    background: var(--line);
    width: 100%;
    height: 5px;
    border-radius: 0 0 5px 5px;
`;

export const BorderBefore = styled.span`
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 5px;
    background: var(--green);
`;