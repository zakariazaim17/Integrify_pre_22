import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cardstyles from "../styles/Cardistyle";
import { useNavigate } from "react-router-dom";

import { fontSize, fontWeight, height } from "@mui/system";

export default function Cardi({ onclick, data }) {
  const classes = cardstyles();

  const history = useNavigate();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.cardHeader}
          sx={{ fontWeight: "bold", marginTop: "10px" }}
        >
          {data.name}
        </Typography>
        <Typography sx={{ marginTop: "10px" }}>{data.brewery_type}</Typography>
        <Typography sx={{ marginTop: "10px" }}>{data.city}</Typography>
      </CardContent>
      <CardActions
        className={classes.cardButton}
        onClick={() => history(`/Detail/${data.id}`)}
      >
        <Button size="small" className={classes.buttonText}>
          View Detail
        </Button>
      </CardActions>
    </Card>
  );
}
