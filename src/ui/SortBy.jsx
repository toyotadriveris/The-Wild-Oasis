import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParms] = useSearchParams();

  const currentValue = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParms(searchParams);
  }

  return (
    <Select
      value={currentValue}
      options={options}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
