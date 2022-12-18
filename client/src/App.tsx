import "./styles/App.css";
import PageHeading from "./components/pageHeading/PageHeading";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";

function App() {
  return (
    <div className="App">
      <PageHeading />
      <Breadcrumbs />
    </div>
  );
}

export default App;
