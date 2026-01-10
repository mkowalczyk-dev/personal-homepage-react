import styled from "styled-components";
import { ReactComponent as githubIcon } from "../../../assets/github-icon.svg";

export const IconWrapper = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    width: 42px;
    height: 42px;
    margin-bottom: 40px;
    justify-content: baseline;
    align-items: center;
`;

export const IconItem = styled.li`
    list-style-type: none;
    margin: 0;
    &:not(:last-child) {
        margin-right: 24px;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
            margin-right: 16px;
        }
    }
`;

export const styledIcon = Icon => styled(Icon)`
    width: 50px;
    height: 50px;
    fill: ${({ theme }) => theme.colors.font};
    
    &:hover {
      fill: ${({ theme }) => theme.color.scienceBlue};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 30px;
  }`

export const GithubIcon = styled(githubIcon)`
    width: 50px;
    height: 50px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 30px;
  }
`;

export const IconLink = styled.a`
    display: block;

    &:hover {
      cursor: pointer;
    }
`;