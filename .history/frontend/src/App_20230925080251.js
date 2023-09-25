import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailsListPage from "./pages/DetailsListPage";
import OptionsListPages from "./pages/OptionsListPages";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <OptionsListPages /> */}
        <Routes>
          <Route exact path="/" element={<OptionsListPages />} />
          <Route exact path="/:str" element={<DetailsListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
