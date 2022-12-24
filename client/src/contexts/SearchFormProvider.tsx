import { createContext, ReactNode, useState } from "react";

interface SearchFormData {
  search: string;
}

const defValue: SearchFormData = {
  search: "",
};
const searchFormCtx = createContext({
  search: "",
});

type Props = {
  children: ReactNode;
};
const SearchFormProvider = (props: Props) => {
  const [formData, setFormData] = useState<SearchFormData>(defValue);

  const handleDataChange = (name: "search", value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <searchFormCtx.Provider value={formData}>
      {props.children}
    </searchFormCtx.Provider>
  );
};
export default SearchFormProvider;
