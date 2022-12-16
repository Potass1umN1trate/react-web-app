import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import PhotographerPage from "./PhotographerPage";
import PhotographersList from "./PhotographersList";
import photographers from "./HardcodedPhotographers";
import "./bg.css";

const App = () => {
  const routes = photographers.map((p, i) => {
    const route = (
      <Route
        path={"/photographer/" + (i + 1)}
        element={<PhotographerPage photographer={p} />}
      ></Route>
    );
    return route;
  });

  return (
      <HashRouter basename="/">
        <NavbarComponent />
        <Routes>
          <Route
            path="/home"
            element={<Homepage photographer={photographers[3]} />}
          ></Route>
          <Route
            path="/"
            element={<Homepage photographer={photographers[3]} />}
          ></Route>
          <Route
            path="/photographers-list"
            element={<PhotographersList photographers={photographers} />}
          ></Route>
          {routes}
        </Routes>
      </HashRouter>
  );
}

export default App;
