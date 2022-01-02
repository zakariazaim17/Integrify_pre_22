import { makeStyles } from "@mui/styles";

const cardstyles = makeStyles({
  cardHeader: {
    fontWeight: "bold",
    textAlign: "center",
  },
  cardButton: {
    cursor: "pointer",
    justifyContent: "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  buttonText: {
    color: "#2f3c56",
  },
  card: {
    border: "1px solid #FE6B8B",
  },
  cardContent: {
    height: 150,
    textAlign: "center",
  },
  typography: {
    marginTop: "20px",
  },
});

export default cardstyles;
