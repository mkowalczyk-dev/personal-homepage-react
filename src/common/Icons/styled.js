import styled from "styled-components";
import { ReactComponent as githubIcon } from "../../assets/github-icon.svg";
import { ReactComponent as facebookIcon } from "../../assets/facebook-icon.svg";
import { ReactComponent as linkedinIcon } from "../../assets/linkedin-icon.svg";
import { ReactComponent as instagramIcon } from "../../assets/instagram-icon.svg";

export const IconWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    width: 42px;
    height: 42px;
    margin-left: 3px;
    margin-bottom: 40px;
    align-items: center;
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
    fill: ${({ theme }) => theme.colors.font};
    
    &:hover {
      fill: ${({ theme }) => theme.color.scienceBlue};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 30px;
  }
`;

export const FacebookIcon = styled(facebookIcon)`
    width: 60px;
    height: 60px;
    fill: ${({ theme }) => theme.colors.font};

    &:hover {
      fill: ${({ theme }) => theme.color.scienceBlue};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 30px;
  }
`;

export const LinkedinIcon = styled(linkedinIcon)`
    width: 52px;
    height: 52px;
    fill: ${({ theme }) => theme.colors.font};

    &:hover {
      fill: ${({ theme }) => theme.color.scienceBlue};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 30px;
  }
`;

export const InstagramIcon = styled(instagramIcon)`
    width: 52px;
    height: 52px;
    margin-left: 3px;
    fill: ${({ theme }) => theme.colors.font};

    &:hover {
      fill: ${({ theme }) => theme.color.scienceBlue};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 30px;
  }
`;

export const IconLink = styled.div`

    &:hover {
      cursor: pointer;
    }
`;