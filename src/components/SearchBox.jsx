import { Box, Paper, TextInput } from "@mantine/core";
import "./SearchBox.css";

function SearchBox({
  placeholder,
  searchText,
  onSearchChange,
  results,
  onResultClicked,
}) {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Paper withBorder shadow="sm" w="100%" className="results">
        {results.map((result, index) => (
          <Box key={index} p="sm" className="result-item">
            {result}
          </Box>
        ))}
      </Paper>
    </>
  );
}

export default SearchBox;
