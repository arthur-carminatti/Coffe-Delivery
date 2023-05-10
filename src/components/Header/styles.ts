import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 160px;
    gap: 820px;

    background-color: ${props => props.theme["white-100"]};
    border: 1px solid red;
`