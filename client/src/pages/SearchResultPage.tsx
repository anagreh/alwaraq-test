import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FilterResult from "../components/filterResult/FilterResult";
import PageHeading from "../components/pageHeading/PageHeading";
import SearchForm from "../components/searchForm/SearchForm";
import SearchResult from "../components/searchResult/SearchResult";
import SearchResultLayout from "../layouts/searchResultLayout/SearchResultLayout";

import { useState } from "react";
import { useQuery } from "react-query";
import { getBooks } from "../services/getBooks";
import { Book } from "../schema/bookSchema";

function SearchResultPage() {
  const [searchValue, setSearchValue] = useState("");

  const { data, refetch, isLoading } = useQuery<Book[]>(
    ["Books", searchValue],
    () => getBooks({ search: searchValue }),
    {
      refetchOnWindowFocus: false,
    },
  );

  const handleOnSubmit = (searchInputValue: string) => {
    setSearchValue(searchInputValue);

    refetch();
  };

  return (
    <>
      <PageHeading forPage="search-result" />
      <Breadcrumbs for="searchResult" />
      <SearchForm handleOnSubmit={handleOnSubmit} />

      {isLoading ||
        (data && (
          <SearchResultLayout
            filterOptionsSection={<FilterResult />}
            resultSection={<SearchResult result={data} />}
          />
        ))}
    </>
  );
}

export default SearchResultPage;
