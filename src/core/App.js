import { HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../common/Container/styled";
import { ThemeSwitch } from "../common/ThemeSwitch/index";
import Header from "../common/Header/index";
import Section from "../common/Section";
import Tile from "../common/Tile/index";
import { GithubIcon } from "../common/Icons/styled";
import { SocialMediaIcons } from "../common/Icons/index";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "../core/theme";
import { GlobalStyle } from "../core/GlobalStyle";
import { Normalize } from "styled-normalize";
import { selectIsDarkTheme } from '../features/themeSlice';
import { Portfolio } from "../features/Portfolio/index";

function App() {

  const isDarkTheme = useSelector(selectIsDarkTheme);

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
          <GithubIcon />
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
            <SocialMediaIcons />
          }
          />
        </Container>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App;