import Home from "./components/Home";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  // const location = useLocation();

  // const backgroundImages: { [key: string]: string } = {
  //   "/": "./assets/home/background-home-desktop.jpg",
  //   "/crew": "./assets/crew/background-crew-desktop.jpg",
  //   "/destination": "./assets/destination/background-destination-desktop.jpg",
  //   "/technology": "./assets/technology/background-technology-desktop.jpg",
  // };
  // const backgroundImage: string | undefined =
  //   backgroundImages[location.pathname];
  // useEffect(() => {
  //   document.documentElement.style.setProperty(
  //     "--background-image",
  //     `url(${backgroundImage})`
  //   );
  // }, [backgroundImage]);
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
