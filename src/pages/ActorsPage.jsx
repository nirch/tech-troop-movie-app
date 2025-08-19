import { Container, Grid } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";
import axios from "axios";
import ActorCard from "../components/ActorCard";
import { Navbar } from "../components/Navbar";
import { useDebounce } from "../hooks/useDebounce";

function ActorsPage() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [actors, setActors] = useState([]);
  const searchTextDebounced = useDebounce(searchText, 300);

  useEffect(() => {
    async function getData() {
      const searchURL = `https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=${searchText}`;
      const response = await axios.get(searchURL);
      setSearchResults(
        response.data.results.sort((a, b) => b.popularity - a.popularity)
      );
    }

    if (searchTextDebounced) {
      getData();
    } else {
      setSearchResults([]);
    }
  }, [searchTextDebounced]);

  function addActor(resultIndex) {
    setActors(actors.concat(searchResults[resultIndex]));
    setSearchText("");
  }

  return (
    <>
    <Navbar />
    <Container size="md">
      <h1>Actors Page</h1>
      <SearchBox
        placeholder="Search actors..."
        searchText={searchText}
        onSearchChange={(value) => setSearchText(value)}
        results={searchResults.map((result) => result.name)}
        onResultClicked={addActor}
      />
      <Grid>
        {actors.map((actor, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
            <ActorCard actor={actor} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
    </>
  );
}

export default ActorsPage;
