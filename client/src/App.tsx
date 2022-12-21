import "./styles/App.css";
import PageHeading from "./components/pageHeading/PageHeading";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import SearchForm from "./components/searchForm/SearchForm";
import FilterResult from "./components/filterResult/FilterResult";
import SearchResultLayout from "./layouts/searchResultLayout/SearchResultLayout";

function App() {
  return (
    <div className="App">
      <PageHeading />
      <Breadcrumbs />
      <SearchForm />
      <SearchResultLayout
        filterOptionsSection={<FilterResult />}
        resultSection={<div>resultSection</div>}
      />
    </div>
  );
}

export default App;
