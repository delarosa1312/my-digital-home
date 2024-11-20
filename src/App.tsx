import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import generateRoutes from "./utils/generateRoutes";
import React from "react";
import About from "./pages/About";

function App() {
  const routes = generateRoutes();

  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element ? React.createElement(route.element) : null}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
