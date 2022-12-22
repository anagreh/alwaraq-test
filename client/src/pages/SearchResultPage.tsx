import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FilterResult from "../components/filterResult/FilterResult";
import PageHeading from "../components/pageHeading/PageHeading";
import SearchForm from "../components/searchForm/SearchForm";
import SearchResult from "../components/searchResult/SearchResult";
import SearchResultLayout from "../layouts/searchResultLayout/SearchResultLayout";

function SearchResultPage() {
  return (
    <>
      <PageHeading forPage="search-result" />
      <Breadcrumbs for="searchResult" />
      <SearchForm />
      <SearchResultLayout
        filterOptionsSection={<FilterResult />}
        resultSection={<SearchResult />}
      />
    </>
  );
}

export default SearchResultPage;
