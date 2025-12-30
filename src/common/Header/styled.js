import styled from "styled-components";

export const HeaderWrapper = styled.section`
  margin: 20px auto;
  max-width: 1068px;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: start;
  text-align: left;
`;

export const HeaderContainer = styled.div`
  margin: auto 50px;
  max-width: 1068px;
  justify-content: center;
  text-align: left;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 42px;
  line-height: 1.2;
  align-items: center;
  margin: 24px 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    margin: 4px 0 12px 0;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  align-items: center;
  margin: 24px 0 24px 0;
  color: ${({ theme }) => theme.color.grey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    margin: 4px 0 12px 0;
  }
`;

export const Content = styled.div`
  padding: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.color.grey};
`;

export const HeaderImage = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 200px;
    display: flex;
    margin-top: 0;
    text-align: left;
    background-image: ${({ $posterUrl, $noPosterUrl }) =>
    `url(${$posterUrl || $noPosterUrl})`};
    background-size: cover;
    justify-self: start;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        width: 171px;
        height: 254px;
        margin-left: 0px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-row: 1;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
        width: 114px;
        height: 169px; 
    }
`;

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
        height: 50px;
        font-size: 20px;
        border: none;
        scale: 1.1;
        transition: 0.3s;
    }
`;