import axios from "axios";
import { baseUrl } from "../utils/constants";
import { React, useEffect, useState } from "react";
import Cardi from "../components/Card";
import TextField from "@mui/material/TextField";

import "../styles/HomeScreenStyle.css";

import { Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

import Alert from "@mui/material/Alert";

import IconButton from "@mui/material/IconButton";
import { margin } from "@mui/system";

export default function Home() {
  const [breweriesData, setBreweriesData] = useState([]);
  const [error, setError] = useState("");
  const [textInputValue, setTextInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [isAlert, setAlert] = useState(false);

  const searchBrewries = async () => {
    const response = await axios.get(
      `${baseUrl}?${filterValue}=${textInputValue}`
    );
    if (response.data.length > 0) {
      console.log("searcheddd", response.data);
      setBreweriesData(response.data);
    } else {
      setError(
        "There is no breweries found for your search, try again later on 😊"
      );
      setAlert(true);
    }
  };

  const validateSearch = () => {
    if (textInputValue.trim().length !== 0 && filterValue.includes("by")) {
      setAlert(false);
      searchBrewries();
    } else {
      setAlert(true);
      setError("Please enter the required search fields");
      console.log("object", textInputValue.trim());
      console.log("object", textInputValue.trim().length !== 0);
      console.log("object", filterValue.includes("by"));
    }

    //return false;
  };
  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await axios.get(`${baseUrl}`);

      setBreweriesData(response.data);
      console.log("data", response.data);
      console.log("data22", breweriesData);
    };

    fetchBreweries();
  }, []);

  return (
    <Box className="grandDiv">
      {isAlert ? (
        <Collapse in={isAlert}>
          <Alert
            severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ margin: "0 6rem" }}
          >
            {error}
          </Alert>
        </Collapse>
      ) : (
        <></>
      )}
      <Box className="searchBarContainer">
        <Box className="horizontalTextInputGroup">
          <FormControl className="filterText">
            <InputLabel>Filter</InputLabel>
            <Select
              value={filterValue}
              label="Filter"
              onChange={(e) => setFilterValue(e.target.value)}
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
            here is search bar
          </TextField>

          <Button
            className="filterButton"
            variant="text"
            onClick={() => {
              console.log(textInputValue);
              console.log(filterValue);
              //searchBrewries();
              validateSearch();
            }}
          >
            Text
          </Button>
        </Box>
      </Box>
      <Box className="parent_div">
        {breweriesData.length > 0 ? (
          breweriesData.map((item) => <Cardi data={item} />)
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
