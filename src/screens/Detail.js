import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/DetailScreenstyle.css";
import { baseUrl } from "../utils/constants";
import Cards from "../components/Card";
import { Button } from "@mui/material";

export default function Detail() {
  const { brewerieId } = useParams();
  const navigate = useNavigate();
  const [brewerieData, setBrewerieData] = useState();
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${brewerieId}`);
        setBrewerieData(response.data);
      } catch (e) {
        setError(true);
      }
    };

    fetchDetails();
  }, []);

  const NodataFound = () => {
    return (
      <Box>
        <h1>Seems there is no detail for this query 😞</h1>
        <Button onClick={() => navigate("/", { replace: true })}>
          return to home screen
        </Button>
      </Box>
    );
  };

  return (
    <Box className="parentContainer">
      {brewerieData && <Cards data={brewerieData} isDetailed={true} />}
      {isError && <NodataFound />}
    </Box>
  );
}
