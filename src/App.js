import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Templates from "./components/Templates";
import HowYamakWorks from "./components/HowYamakWorks";
import Help from "./components/Help";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingHome from "./components/Pages/LandingHome";
import Plans from "./components/Plans";
import GetStarted from "./components/GetStarted";
import PlansHeader from "./components/PlansHeader";
import SignIn from "./components/Pages/SignIn";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={[
              <Header />,
              <Home />,
              <Templates />,
              <HowYamakWorks />,
              <Help />,
              <FAQ />,
              <Footer />,
            ]}
          />

          <Route path="/features" element={[<Header />, <Footer />]} />
          <Route
            path="/pricing"
            element={[
              <Header />,
              <LandingHome />,
              <PlansHeader />,
              <Plans />,
              <FAQ />,
              <GetStarted />,
              <Footer />,
            ]}
          />
          <Route
            path="/signin"
            element={[<Header />, <SignIn />, <Footer />]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
