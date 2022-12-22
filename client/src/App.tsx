import "./styles/App.css";
import PageHeading from "./components/pageHeading/PageHeading";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
