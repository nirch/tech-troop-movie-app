import { Container } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import { useState } from "react";

function ActorsPage() {
  const [searchText, setSearchText] = useState("");

  return (
    <Container size="md">
      <h1>Actors Page</h1>
      <SearchBox
        placeholder="Search actors..."
        searchText={searchText}
        onSearchChange={(value) => setSearchText(value)}
      />
    </Container>
  );
}

export default ActorsPage;
