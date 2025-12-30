import styled from "styled-components";

export const TilePortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-gap: 20px;
  font-size: 20px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        grid-template-columns: auto 1fr;
        grid-gap: 16px;
        margin-top: 36px;
        padding: 16px;
    }
`;

export const TilePortfolioTitle = styled.h1`
  margin: 18px 0;
  font-size: 24px;
  font-weight: 900;
  text-align: start;
  color: ${({ theme }) => theme.color.cornflowerBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        font-size: 16px;
        margin: 5px 0;
  }
  
@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TilePortfolioImage = styled.div`
  width: 176px;
  display: block;
  aspect-ratio: 2 / 3;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-color: transparent;
  margin: 0 auto 16px auto;
  background-image: ${({ $posterUrl, $noPosterUrl }) =>
        `url(${$posterUrl || $noPosterUrl})`};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    aspect-ratio: 2 / 3;
    margin: 0;
    width: 135px;
  }

  @media (max-width: 540px) {
        width: 140px;
        background-size: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontalMobile}px) {
    width: 114px;
    background-size: cover;
  }
`;

export const TilePortfolioContainer = styled.header`
    font-size: 22px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
    padding: 20px;
    margin: 20px 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.whisper};
    border-width: 5px;

    &:hover {
    border-color: ${({ theme }) => theme.color.seagull};
  }
`

export const TilePortfolioName = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 22px;
  line-height: 1.3;
  font-weight: 500;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 5px 0;
  }

@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TilePortfolioList = styled.ul`
li::marker {
    color: ${({ theme }) => theme.color.blue};
  }
  display: grid;
  grid-template-columns: 1fr;
  text-align: start;
  justify-content: center;
  list-style: none;
  margin-left: 0;
  padding-left: 0px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 5px 0;
  }

@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TilePortfolioListItem = styled.li`
  margin-left: 0;
  padding: 10px 0;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.grey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 5px 0;
  }

@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;