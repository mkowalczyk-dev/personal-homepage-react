import { HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../common/Container/styled";
import { ThemeSwitch } from "../common/ThemeSwitch/index";
import Header from "../common/Header/index";
import Section from "../common/Section";
import Tile from "../common/Tile/index";
import {
  IconWrapper,
  GithubIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  styledIcon,
  IconLink
} from "../common/Icons/styled";
import { ReactComponent as githubIcon } from "../assets/github-icon.svg";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "../core/theme";
import { GlobalStyle } from "../core/GlobalStyle";
import { Normalize } from "styled-normalize";
import { selectIsDarkTheme } from '../features/themeSlice';
import { Portfolio } from "../features/Portfolio/index";

function App() {

  const isDarkTheme = useSelector(selectIsDarkTheme);
  const socials = {
    name: "GitHub",
    url: "https://github.com/repos",
    Icon: styledIcon(githubIcon),
  }
  const handleClickGithub = () => {
    window.location.href = "https://github.com/repos";
  };

  const handleClickFacebook = () => {
    window.location.href = "https://www.facebook.com/profile.php?id=100008917428069&locale=pl_PL";
  };

  const handleClickLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/micha%C5%82-kowalczyk-1a72063a2/?locale=en-US";
  };

  const handleClickInstagram = () => {
    window.location.href = "https://www.instagram.com/wahasaku/";
  };

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <Container>
          <Section content={<ThemeSwitch />} />
          <Header
            header={true}
            subtitle="This is "
            title="Michał Kowalczyk"
            content="I've discovered, that coding is not only useful 🖥️, but also very exciting for me 🤩"
          />
          <Section
            content={
              <Tile
                firstPage={true} />}
          />
          <Section
            content={
              <Tile
                firstPage={false} />}
          />
          <IconLink onClick={handleClickGithub}>
            <GithubIcon />
          </IconLink>
          <Section
            title="Portfolio"
            subtitle="My recent projects"
            content={<>
              <Portfolio />
            </>
            }
          />
          <Header
            header={false}
            subtitle="Let's talk! "
            title="michalkowal3k@gmail.com"
            content="I'm ready for new job opportunities as soon as possible, I'm waiting for new challenges and endless improvement, so you can contact me anytime!"
          />
          <Section content={
            <IconWrapper>
              <IconLink onClick={handleClickGithub}>
                <GithubIcon />
              </IconLink>
              <IconLink onClick={handleClickFacebook}>
                <FacebookIcon />
              </IconLink>
              <IconLink onClick={handleClickLinkedin}>
                <LinkedinIcon />
              </IconLink>
              <IconLink onClick={handleClickInstagram}>
                <InstagramIcon />
              </IconLink>
            </IconWrapper>} />
        </Container>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App;