import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FirstFloorCharts from "./components/charts/first_floor/FirstFloorCharts.jsx";
import SecondFloorCharts from "./components/charts/second_floor/SecondFloorCharts.jsx";
import ThirdFloorCharts from "./components/charts/third_floor/ThirdFloorCharts.jsx";
import FourthFloorCharts from "./components/charts/fourth_floor/FourthFloorCharts.jsx";
import AccessPointsTable from "./components/tables/AccessPointsTable";
import ObstaclesTable from "./components/tables/ObstaclesTable";
import RoutersTable from "./components/tables/RoutersTable";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="flex-container">
          <Navbar />
          <Routes>
            <Route path="/routers" element={<RoutersTable />} />
            {/*<Route path="/access-points" element={<AccessPointsTable />} />*/}
            <Route path="/obstacles" element={<ObstaclesTable />} />
            <Route path="/charts/first-floor" element={<FirstFloorCharts />} />
            <Route
              path="/charts/second-floor"
              element={<SecondFloorCharts />}
            />
            <Route path="/charts/third-floor" element={<ThirdFloorCharts />} />
            <Route
              path="/charts/fourth-floor"
              element={<FourthFloorCharts />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
