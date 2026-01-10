import { Button } from "./styled";
import { githubUsername } from "../../../portfolioApi";
import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as Error } from "../../../../assets/spinner.svg";

export const ErrorBox = () => (
  <Wrapper>
    <Error />
    <Header>Ooops! Someting went&nbsp;wrong...</Header>
    <Paragraph>
      Sorry, failed to load GitHub&nbsp;projects.<br />
      You can check them directly&nbsp;on&nbsp;GitHub.
    </Paragraph>
    <Button href={`https://github.com/${githubUsername}`} target="_blank">
      Go to GitHub
    </Button>
  </Wrapper>
);