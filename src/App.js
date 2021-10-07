import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./_pages/AboutUs";
import ContactPage from "./_pages/ContactPage";
import Header from "./_components/Header";
import HomePage from "./_pages/HomePage";
import PageTitle from "./_components/PageTitle";
import ServicesPage from "./_pages/ServicesPage";
import TeamPage from "./_pages/TeamPage";
import styled from "styled-components";

const AppContent = styled.div`
  width: 100%
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  bottom: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  // margin-bottom: -20rem;s
`;

// TODO: comments form on comment page;
// TODO: review section on main and about us;

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
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/our-team">
            <TeamPage />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
        </AppContent>
      </div>
    </Router>
  );
}

export default App;
