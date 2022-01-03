import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cardstyles from "../styles/Cardistyle";
import { useNavigate } from "react-router-dom";

export default function Cards({ data, isDetailed }) {
  const classes = cardstyles();

  const navigate = useNavigate();

  return (
    <Card className={classes.card}>
      <CardContent
        className={
          isDetailed ? classes.detailedCardContent : classes.cardContent
        }
      >
        <Typography
          className={classes.cardHeader}
          sx={{ fontWeight: "bold", marginTop: "10px" }}
        >
          {data.name}
        </Typography>
        <Typography sx={{ marginTop: "10px" }}>{data.brewery_type}</Typography>
        <Typography sx={{ marginTop: "10px" }}>{data.city}</Typography>
        {isDetailed ? (
          <>
            <Typography sx={{ marginTop: "10px" }}>{data.street}</Typography>
            <Typography sx={{ marginTop: "10px" }}>{data.address_2}</Typography>
            <Typography sx={{ marginTop: "10px" }}>{data.address_3}</Typography>
            <Typography sx={{ marginTop: "10px" }}>{data.state}</Typography>
            <Typography sx={{ marginTop: "10px" }}>
              {data.county_province}
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>
              {data.postal_code}
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>{data.country}</Typography>
            <Typography sx={{ marginTop: "10px" }}>{data.longitude}</Typography>
            <Typography sx={{ marginTop: "10px" }}>{data.latitude}</Typography>
            <Typography sx={{ marginTop: "10px" }}>{data.phone}</Typography>
          </>
        ) : (
          <></>
        )}
      </CardContent>
      <CardActions
        className={classes.cardButton}
        onClick={() =>
          isDetailed ? navigate(-1) : navigate(`/Detail/${data.id}`)
        }
      >
        <Button size="small" className={classes.buttonText}>
          {isDetailed ? `Go back` : `View Detail`}
        </Button>
      </CardActions>
    </Card>
  );
}
