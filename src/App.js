import "./App.css";
import styled from "styled-components";
import Header from "./_components/Header";
import MainContent from "./_components/MainContent";
import MainBottom from "./_components/MainBottom.js";
import { BrowserRouter as Router } from "react-router-dom";

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
          <MainContent />
          <MainBottom />
        </AppContent>
      </div>
    </Router>
  );
}

export default App;
