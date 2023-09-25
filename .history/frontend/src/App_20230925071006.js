import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailsListPage from "./pages/DetailsListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<DetailsListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
