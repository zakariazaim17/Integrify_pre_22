import axios from "axios";
import { baseUrl } from "../utils/constants";
import { React, useCallback, useEffect, useState } from "react";
import Cards from "../components/Card";

import "../styles/HomeScreenStyle.css";

import Collapse from "@mui/material/Collapse";

import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

import Alert from "@mui/material/Alert";

import IconButton from "@mui/material/IconButton";

import Search from "../components/Search";

export default function Home() {
  const [breweriesData, setBreweriesData] = useState([]);
  const [error, setError] = useState("");

  const [isAlert, setAlert] = useState(false);

  const searchBrewries = useCallback(async (filterValue, textInputValue) => {
    try {
      const response = await axios.get(
        `${baseUrl}?${filterValue}=${textInputValue}`
      );
      if (response.data.length > 0) {
        setBreweriesData(response.data);
      } else {
        setError(
          "There is no breweries found for your search, try again later on 😊"
        );
        setAlert(true);
      }
    } catch (e) {
      setError("please make sure that you entered correct inputs");
      setAlert(true);
    }
  }, []);

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await axios.get(`${baseUrl}`);

        setBreweriesData(response.data);
      } catch (e) {
        setAlert(true);
        setError(e);
      }
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

      <Search onClick={searchBrewries} />

      <Box className="parent_div">
        {breweriesData.length > 0 ? (
          breweriesData.map((item) => <Cards data={item} key={item.id} />)
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
