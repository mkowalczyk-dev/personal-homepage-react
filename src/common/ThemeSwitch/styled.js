import styled from "styled-components";

export const Button = styled.button`
    color: ${({ theme }) => theme.color.whisper};
    height: 50px;
    font-size: 20px;
    margin: 20px 0;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.cornflowerBlue};

    &:hover{
        color: ${({ theme }) => theme.color.white};
        background-color: blue;
        scale: 1.1;
        transition: 0.3s;
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 12px;
        height: 30px;
        padding: 2px;
    }
`;