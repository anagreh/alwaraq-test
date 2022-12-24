import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import FilterResult from "../components/filterResult/FilterResult";
import PageHeading from "../components/pageHeading/PageHeading";
import SearchForm from "../components/searchForm/SearchForm";
import SearchResult from "../components/searchResult/SearchResult";
import SearchResultLayout from "../layouts/searchResultLayout/SearchResultLayout";

import { useState } from "react";
import { useQuery } from "react-query";
import { getBooks } from "../services/getBooks";
import { Book, Subject } from "../schema/bookSchema";
import { getSubjects } from "../services/getSubjects";

export type HandleSelectedSubjectsChange = (action: {
  type: "add" | "remove" | "all" | "none";
  payload?: string;
}) => void;

function SearchResultPage() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const { data, refetch, isLoading } = useQuery<Book[]>(
    ["Books", { searchValue, selectedSubjects }],
    () => getBooks({ search: searchValue, subjects: selectedSubjects }),
    {
      refetchOnWindowFocus: false,
    },
  );

  const { data: subjects, isLoading: subjectsIsLoading } = useQuery<Subject[]>(
    ["subjects"],
    getSubjects,
  );

  const handleOnSubmit = (searchInputValue: string) => {
    setSearchValue(searchInputValue);
    refetch();
  };

  const handleSelectedSubjectsChange: HandleSelectedSubjectsChange = (
    action,
  ) => {
    switch (action.type) {
      case "add":
        if (action.payload)
          setSelectedSubjects([...selectedSubjects, action.payload]);
        break;

      case "remove":
        setSelectedSubjects(
          selectedSubjects.filter((s) => s !== action.payload),
        );
        break;

      case "none":
        setSelectedSubjects([]);
        break;

      case "all":
        setSelectedSubjects((subjects || []).map((s) => s.id));
        break;
    }
  };

  return (
    <>
      <PageHeading forPage="search-result" />
      <Breadcrumbs for="searchResult" />
      <SearchForm handleOnSubmit={handleOnSubmit} />

      <SearchResultLayout
        filterOptionsSection={
          <FilterResult
            subjects={subjects || []}
            isLoading={subjectsIsLoading}
            selectedSubjects={selectedSubjects}
            handleSelectedSubjectsChange={handleSelectedSubjectsChange}
          />
        }
        resultSection={
          <SearchResult result={data || []} isLoading={isLoading} />
        }
      />
    </>
  );
}

export default SearchResultPage;
