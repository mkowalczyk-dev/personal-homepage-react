import styled from "styled-components";

export const HeaderWrapper = styled.section`
  margin: 20px auto;
  max-width: 1068px;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: start;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: auto;
  }
`;

export const HeaderContainer = styled.div`
  margin: auto 0px;
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
  color: ${({ theme }) => theme.colors.font};

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
  color: ${({ theme }) => theme.colors.fontAnother};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    margin: 4px 0 12px 0;
  }
`;

export const Content = styled.div`
  padding: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.fontAnother};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 12px;
    }
`;

export const HeaderImage = styled.div`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    display: flex;
    margin-top: 0;
    margin-right: 50px;
    text-align: left;
    background-image: ${({ $posterUrl, $noPosterUrl }) =>
    `url(${$posterUrl || $noPosterUrl})`};
    background-size: cover;
    justify-self: start;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 149px;
        height: 149px;
        margin-left: 0px;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.whisper};
    height: 50px;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 20px;
    margin: 20px 0;
    border: 1px solid;
    border-radius: 5px;
    transition: 0.3s;
    background-color: ${({ theme }) => theme.color.scienceBlue};

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 2px 2px ${({ theme }) => theme.color.blumine};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 12px;
        height: 30px;
        padding: 2px;
    }
`;