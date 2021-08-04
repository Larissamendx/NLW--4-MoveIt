import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4rem;

    span {
        font-size: 1rem;
    }
`;

export const Bar = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--line);
    margin: 0 1.5rem;
    position: relative;

    div {
        height: 4px;
        border-radius: 4px;
        background: var(--green);
    }

    span {
        position: absolute;
        top: 12px;
        transform: translateX(-50%);
    }

`;