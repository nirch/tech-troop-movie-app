import { TextInput } from "@mantine/core";

function SearchBox({placeholder, searchText, onSearchChange, results, onResultClicked}) {

  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={searchText}
        onChange={e => onSearchChange(e.target.value)}
      />
    </>
  )
  
}

export default SearchBox;