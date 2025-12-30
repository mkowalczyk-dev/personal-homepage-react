import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../core/ScrollToTop";
import { Container } from "../common/Container/styled";
import Section from "../common/Section";
import Tile from "../common/Tile/index";
import TilePortfolio from "../common/TilePortfolio/index";

function App() {

  return (
    <HashRouter>
      <Container>
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
        <image src="../assets/github-color.svg"/>
        <Section
          title="Portfolio"
          subtitle="My recent projects"
          content={
            <TilePortfolio/>}
        />
        <Routes>
          <Route path="/" />
          <Route path="/about" />
        </Routes>
        <ScrollToTop />
      </Container>
    </HashRouter>
  )
}

export default App;