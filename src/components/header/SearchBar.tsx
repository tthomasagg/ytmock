import { TextField, Box, Autocomplete, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { SearchIcon } from "../icons";
import { useLocalStorage } from "../../application/persistance/localStorage";

const SearchBar = () => {
  const { q } = useSearch({ from: "/search", shouldThrow: false }) || {};
  const [searchTerm, setSearchTerm] = useState(q || "");

  const [storedSuggestions, addNewSuggestion] = useLocalStorage(
    "searchTerms",
    [],
  );

  const [suggestions, setSuggestions] = useState(storedSuggestions);

  useEffect(() => {
    if (suggestions.length !== storedSuggestions.length) {
      setSuggestions([...storedSuggestions]);
    }
  }, [suggestions, storedSuggestions]);

  const navigate = useNavigate();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      addNewSuggestion(searchTerm);
      navigate({
        to: "/search",
        search: { q: searchTerm },
      });
    }
  };

  const handleSuggestions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSuggestionClick = (_e, suggestion: string) => {
    setSearchTerm(suggestion);
  };

  return (
    <Box component="form" onSubmit={handleSubmitSearch}>
      <Grid size={12}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          value={searchTerm}
          selectOnFocus
          options={suggestions.map((option) => option.title)}
          onChange={handleSuggestionClick}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search"
              variant="outlined"
              size="small"
              onChange={handleSuggestions}
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: <SearchIcon />,
                  type: "search",
                },
              }}
            />
          )}
        />
      </Grid>
    </Box>
  );
};

export default SearchBar;
