import styled from 'styled-components'

export const Container = styled.div`
    background: linear-gradient(to bottom, var(--color-primary) 0%, var(--background));
    height: 100vh;
    width: 6rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;

    img {
        margin-top: 2rem;
    }
`;

export const Icons = styled.div` {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 100%;

    img {
        margin-top: 2rem;

    }

`;
