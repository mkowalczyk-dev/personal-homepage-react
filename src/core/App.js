import { HashRouter } from "react-router-dom";
import ScrollToTop from "../core/ScrollToTop";
import { Container } from "../common/Container/styled";
import Header from "../common/Header/index";
import Section from "../common/Section";
import Tile from "../common/Tile/index";
import TilePortfolio from "../common/TilePortfolio/index";

function App() {

  return (
    <HashRouter>
      <Container>
        <Header
          subtitle="This is "
          title="Michał Kowalczyk"
          content="I've discovered, that coding is not only something wanted, but also very exiting for me"
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

        <Section
          title="Portfolio"
          subtitle="My recent projects"
          content={<>
            <TilePortfolio />
          </>
          }
        />
        <ScrollToTop />
      </Container>
    </HashRouter>
  )
}

export default App;