import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../../../assets/spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  display: grid;
  justify-items: center;
  text-align: center;
  margin-top: 88px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 32px;
    font-size: 17px;
  }
`;

export const StyledSpinner = styled(Spinner)`
  color: ${({ theme }) => theme.colors.pimary};
  height: 160px;
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;

  @media (max-width: 540px) {
    margin-top: 32px;
    height: 60px;
  }
`;