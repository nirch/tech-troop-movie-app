import { Container } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";

function ActorsPage() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [actors, setActors] = useState([]);

  // const results = [
  //   "Item1", "Item2", "Item33333"
  // ];

  useEffect(() => {
    if (searchText) {
      setSearchResults(["Item1", "Item2", "Item33333"]);
    } else {
      setSearchResults([]);
    }
  }, [searchText]);


  function addActor(resultIndex) {
    // alert(searchResults[resultIndex]);
    setActors(actors.concat(searchResults[resultIndex]))
    setSearchText("");
  }

  return (
    <Container size="md">
      <h1>Actors Page</h1>
      <SearchBox
        placeholder="Search actors..."
        searchText={searchText}
        onSearchChange={(value) => setSearchText(value)}
        results={searchResults}
        onResultClicked={addActor}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quibusdam.
        Delectus unde inventore eum quaerat excepturi placeat iure, tempore odit
        magni maxime deleniti quas consequuntur ab! Distinctio culpa fugiat ad?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quibusdam.
        Delectus unde inventore eum quaerat excepturi placeat iure, tempore odit
        magni maxime deleniti quas consequuntur ab! Distinctio culpa fugiat ad?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quibusdam.
        Delectus unde inventore eum quaerat excepturi placeat iure, tempore odit
        magni maxime deleniti quas consequuntur ab! Distinctio culpa fugiat ad?
      </p>
      {actors.map((actor, index) => <p key={index}>{actor}</p>)}
    </Container>
  );
}

export default ActorsPage;
