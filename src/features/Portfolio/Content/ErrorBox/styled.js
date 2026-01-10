import styled from "styled-components";

export const Wrapper = styled.article`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: grid;
  grid-gap: 32px;
  text-align: center;
  justify-items: center;
  margin-top: 96px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-gap: 24px;
  }
`;

export const Header = styled.header`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
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