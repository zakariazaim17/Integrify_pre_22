import axios from "axios";
import { baseUrl } from "../utils/constants";
import { React, useEffect, useState } from "react";
import Cardi from "../components/Card";
import "../styles/HomeScreenStyle.css";
export default function Home() {
  const [breweriesData, setBreweriesData] = useState([]);
  const [error, setError] = useState("");

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
    <div className="grandDiv">
      <div className="parent_div">
        {breweriesData.length > 0
          ? breweriesData.map((item) => <Cardi data={item} />)
          : "frfrs"}
      </div>
    </div>
  );
}

//"There is no breweries found at the moment, try again later on 😊"
