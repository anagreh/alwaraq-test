import "./styles/App.css";
import PageHeading from "./components/pageHeading/PageHeading";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import SearchForm from "./components/searchForm/SearchForm";
import FilterResult from "./components/filterResult/FilterResult";
import SearchResultLayout from "./layouts/searchResultLayout/SearchResultLayout";
import SearchResult from "./components/searchResult/SearchResult";

function App() {
  return (
    <div className="App">
      <PageHeading forPage="search-result" />
      <Breadcrumbs />
      <SearchForm />
      <SearchResultLayout
        filterOptionsSection={<FilterResult />}
        resultSection={<SearchResult />}
      />
    </div>
  );
}

export default App;
