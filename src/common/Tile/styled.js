import styled from "styled-components";

export const TileWrapper = styled.div`
background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 40px;
  padding: 40px;
  margin: 40px 0;
  font-size: 20px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        grid-template-columns: auto 1fr;
        grid-gap: 16px;
        margin-top: 36px;
        padding: 16px;
    }
`;

export const TileTitle = styled.h2`
  margin: 18px 0;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        font-size: 16px;
        margin: 5px 0;
  }
  
@media (max-width: 540px) {
        font-size: 8px;
        margin: 5px 0;
  }`;

export const TileImage = styled.div`
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

export const TileJob = styled.ul`
  display: grid;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
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