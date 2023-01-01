import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "Pages/landing";

import "assets/css/App.css";

function resize() {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
function App() {
  resize();
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
