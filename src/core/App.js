import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../core/ScrollToTop";
import { Container } from "../common/Container/styled";
import Section from "../common/Section";
import Tile from "../common/Tile/index";

function App() {

  return (
    <HashRouter>
      <Container>
        <Section
          title="Portfolio"
          content={<Tile />}
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