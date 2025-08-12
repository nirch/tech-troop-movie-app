import { Container } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import { useState } from "react";

function ActorsPage() {
  const [searchText, setSearchText] = useState("");

  const results = [
    "Item1", "Item2", "Item33333"
  ];


  return (
    <Container size="md">
      <h1>Actors Page</h1>
      <SearchBox
        placeholder="Search actors..."
        searchText={searchText}
        onSearchChange={(value) => setSearchText(value)}
        results={results}
      />
    </Container>
  );
}

export default ActorsPage;
