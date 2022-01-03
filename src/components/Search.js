import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/HomeScreenStyle.css";
import React, { useState } from "react";

export default function Search({ onClick }) {
  const [filterValue, setFilterValue] = useState("");
  const [textInputValue, setTextInputValue] = useState("");

  const validateSearch = () => {
    if (textInputValue.trim().length !== 0 && filterValue.includes("by")) {
      onClick(filterValue, textInputValue);
    }
  };

  return (
    <Box>
      <Box className="searchBarContainer">
        <Box className="horizontalTextInputGroup">
          <FormControl className="filterText">
            <InputLabel>Filter</InputLabel>
            <Select
              value={filterValue}
              label="Filter"
              onChange={(e) => {
                setFilterValue(e.target.value);
              }}
            >
              <MenuItem value="by_city">City</MenuItem>
              <MenuItem value="by_name">name</MenuItem>
              <MenuItem value="by_state">state</MenuItem>
              <MenuItem value="by_postal">postal</MenuItem>
              <MenuItem value="by_type">type</MenuItem>
              <MenuItem value="by_dist">dist</MenuItem>
            </Select>
          </FormControl>

          <TextField
            variant="outlined"
            className="inputField"
            value={textInputValue}
            onChange={(e) => setTextInputValue(e.target.value)}
          >
            search ...
          </TextField>

          <IconButton
            className="filterButton"
            variant="text"
            onClick={() => validateSearch()}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
