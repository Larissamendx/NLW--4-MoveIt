import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    section {
        flex: 1;
    
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6.25rem;
        align-content: center;
        margin: auto;
    }
    nav {
        margin-right: 5rem
    }

    main {
        width: 70%;
        // margin: auto;
        padding: 2.5rem 0;
    }

`; 

export const Toggle = styled.div` 
    padding: 2.5rem 2rem 0 0;
`;
