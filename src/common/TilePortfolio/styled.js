import styled from "styled-components";

export const TilePortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
  font-size: 20px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        grid-template-columns: auto auto;
        grid-gap: 16px;
        margin-top: 36px;
        grid-gap: 5px;
        font-size: 12px;
    }
`;

export const TilePortfolioTitle = styled.h1`
  margin: 18px 0;
  font-size: 24px;
  font-weight: 900;
  text-align: start;
  color: ${({ theme }) => theme.color.cornflowerBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        font-size: 12px;
        margin: 5px 0;
  }
  
@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TilePortfolioContainer = styled.header`
    font-size: 22px;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
    padding: 20px;
    margin: 20px 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.whisper};
    border-width: 5px;

    &:hover {
    border-color: ${({ theme }) => theme.color.seagull};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 12px;
        margin: 5px 0;
        padding: 5px;
  }
`

export const TilePortfolioLink = styled.a`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
  padding-left: 5px;
  color: ${({ theme }) => theme.color.cornflowerBlue};

  &:hover {
    color: blue;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 12px;
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
        font-size: 12px;
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
        font-size: 12px;
        margin: 5px 0;
  }

@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;