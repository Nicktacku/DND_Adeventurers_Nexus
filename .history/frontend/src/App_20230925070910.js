import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import DetailsListPage from "./pages/DetailsListPage";

function App() {
  return (
    <Router>
      <Routes>
        <div className="App">
          <Route exact path="/" element={<DetailsListPage />} />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
