import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>welcome to here</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <Link to="/Home">Home</Link> | <Link to="/Detail">Detail</Link>
      </nav>
    </div>
  );
}

export default App;
