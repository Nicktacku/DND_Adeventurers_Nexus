import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailsListPage from "./pages/DetailsListPage";
import OptionsListPages from "./pages/OptionsListPages";

function App() {
  const [items, setItem] = useState();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await fetch("https://www.dnd5eapi.co/api");
    const data = await response.json();
    console.log(Object.keys(data || {}));
    setItem(data);
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<OptionsListPages key="start" />} />
          <Route exact path="/:title" element={<DetailsListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
