import styled from "styled-components";

export const TileWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 20px;
  padding: 20px;
  margin: 20px 0;
  font-size: 20px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        grid-template-columns: auto;
        grid-gap: 16px;
        margin-top: 36px;
        padding: 16px;
    }
`;

export const TileTitle = styled.h1`
  margin: 18px 0;
  font-size: 24px;
  font-weight: 900;
  text-align: start;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        font-size: 16px;
        margin: 5px 0;
  }
`;

export const TileContainer = styled.header`
    font-size: 22px;
`

export const TileName = styled.h2`
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

export const TileList = styled.ul`
li::marker {
    color: ${({ theme }) => theme.color.cornflowerBlue};
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: start;
  justify-content: center;
  list-style: disc;
  margin-left: 0;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 5px 0;
        grid-template-columns: 1fr 1fr;
  }

@media (max-width: 540px) {
        margin: 5px 0;
        grid-template-columns: 1fr;
  }`;

export const TileListItem = styled.li`
  margin-left: 0;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.grey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 5px 0;
  }

@media (max-width: 540px) {
        margin: 5px 0;
  }`;

export const TileBreak = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, transparent, #000, transparent);
`;