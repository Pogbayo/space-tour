import Home from "./components/Home";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";


function App() {
 
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="destination" element={<Destination />} />
              <Route path="crew" element={<Crew />} />
              <Route path="technology" element={<Technology />} />
              <Route />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
