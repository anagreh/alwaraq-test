import "./styles/App.css";
import PageHeading from "./components/pageHeading/PageHeading";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import SearchForm from "./components/searchForm/SearchForm";

function App() {
  return (
    <div className="App">
      <PageHeading />
      <Breadcrumbs />
      <SearchForm />
    </div>
  );
}

export default App;
