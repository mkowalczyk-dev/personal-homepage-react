import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 0 auto;
  max-width: 1068px;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 32px;
  line-height: 1.2;
  align-items: center;
  text-align: center;
  margin: 24px 0 24px 0;
  color: ${({ theme }) => theme.colors.font};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    margin: 4px 0 12px 0;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  align-items: center;
  text-align: center;
  margin: 24px 0 24px 0;
  color: ${({ theme }) => theme.colors.font};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    margin: 4px 0 12px 0;
  }
`;

export const Content = styled.div`
  padding: 0;
`;