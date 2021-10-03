import "./App.css";
import styled from "styled-components";
import Header from "./_components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./_pages/AboutUs";
import HomePage from "./_pages/HomePage";

const AppContent = styled.div`
  min-width: 100vw
  min-height: 100vh;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Overlay />
        <AppContent>
          <Header />
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/history">
            <AboutUs />
          </Route>
        </AppContent>
      </div>
    </Router>
  );
}

export default App;
