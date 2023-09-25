import { BrowserRouter as Router, Routes, Router } from "react-router-dom";
import "./App.css";
import DetailsListPage from "./pages/DetailsListPage";

function App() {
  return (
    <Router>
      <Routes>
        <div className="App">
          <DetailsListPage />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
