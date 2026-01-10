import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
  font-size: 20px;
  max-width: 100%;
  transition: 0.3s;
  list-style-type: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
        margin-top: 36px;
        grid-gap: 5px;
        font-size: 12px;
    }
`;

export const Tile = styled.li`
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.tileBackground};
    box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
    padding: 20px;
    margin: 20px 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.border};
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

export const Name = styled.h3`
  margin: 18px 0;
  font-size: 24px;
  font-weight: 700;
  text-align: start;
  color: ${({ theme }) => theme.color.scienceBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px) {
        font-size: 16px;
        margin: 5px 0;
  }
  
@media (max-width: 540px) {
        font-size: 16px;
        margin: 5px 0;
  }`;

export const Description = styled.p`
  margin-left: 0;
  text-align: left;
  padding: 10px 0;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.fontAnother};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 5px 0;
  }`;

export const Links = styled.dl`
  margin-top: 10px;
  margin-bottom: 0;
  line-height: 1.6;
  display: grid;
  grid-gap: 8px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => (theme.colors.primary)};
  padding-bottom: 1px;

  &:hover {
    border-color: unset;
  }
`;