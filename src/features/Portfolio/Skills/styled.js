import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.tileBackground};
  transition: 0.3s;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.shadow};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
  padding: 20px;
  margin: 20px 0;
  font-size: 20px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    margin-top: 36px;
    padding: 16px;
  }
`;

export const List = styled.ul`
li::marker {
    color: ${({ theme }) => theme.color.scienceBlue};
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

export const Item = styled.li`
  margin-left: 0;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.fontAnother};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
        margin: 5px 0;
  }

@media (max-width: 540px) {
        margin: 5px 0;
  }`;

export const Title = styled.h1`
  margin: 18px 0;
  font-size: 24px;
  font-weight: 900;
  text-align: start;
  color: ${({ theme }) => theme.colors.font};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 16px;
        margin: 5px 0;
  }
`;

export const Break = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, transparent, #000, transparent);
`;