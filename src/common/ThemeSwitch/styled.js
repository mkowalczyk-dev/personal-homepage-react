import styled, { css } from "styled-components";
import { ReactComponent as darkmodeIcon } from "../../assets/darkmode-icon.svg";

export const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.shadow};
    padding: 10px;
    margin: 0 15px;
    font-size: 20px;
    height: 25px;
    width: 42px;
    max-width: 100%;
    border: solid 2px;
    border-radius: 15px;
    border-color: ${({ theme }) => theme.color.grey};

    &:hover{
        border: solid 2px;
        border-color: ${({ theme }) => theme.color.grey};
        cursor: pointer;
    }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        margin-top: 36px;
        padding: 16px;
    }
`;

export const IconWrapper = styled.div`
    height: 50px;
    font-size: 12px;
    font-weight: 700px;
    margin: 20px 0;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${({ theme }) => theme.colors.font};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 12px;
        height: 30px;
        padding: 2px;
    }`;

export const Icon = styled(darkmodeIcon)`
    width: 14px;
    height: 14px;
    margin: -10px;
    padding: 0px;
    transition: 0.3s;
    fill: ${({ theme }) => theme.colors.font};

    ${({ $moveToRight }) => $moveToRight && css`
    transform: translateX(20px);
    
    `}

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 30px;
  }
`;