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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quibusdam. Delectus unde inventore eum quaerat excepturi placeat iure, tempore odit magni maxime deleniti quas consequuntur ab! Distinctio culpa fugiat ad?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quibusdam. Delectus unde inventore eum quaerat excepturi placeat iure, tempore odit magni maxime deleniti quas consequuntur ab! Distinctio culpa fugiat ad?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quibusdam. Delectus unde inventore eum quaerat excepturi placeat iure, tempore odit magni maxime deleniti quas consequuntur ab! Distinctio culpa fugiat ad?</p>
    </Container>
  );
}

export default ActorsPage;
