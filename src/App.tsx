import Home from "./components/Home";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { DestinationData } from "./Types/DestinationData";
import { CrewMember } from "./Types/CrewMember";
import { TechnologyData } from "./Types/TechnologyData";
function App() {
  // interface RootObject {
  //   destinations: DestinationData[];
  //   crew: CrewMember[];
  //   technology: TechnologyData[];
  // }

  const [destination, setDestination] = useState<DestinationData[]>([]);
  const [crew, setCrew] = useState<CrewMember[]>([]);
  const [technology, setTechnology] = useState<TechnologyData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [destinationsResponse, crewResponse, technologyResponse] =
          (await Promise.all([
            axios.get("/data.json/destinations"),
            axios.get("/data.json/crew"),
            axios.get("/data.json"),
          ])) as [
            AxiosResponse<DestinationData[]>,
            AxiosResponse<CrewMember[]>,
            AxiosResponse<TechnologyData[]>
          ];

        setDestination(destinationsResponse.data);
        console.log(destinationsResponse.data);
        setCrew(crewResponse.data);

        setTechnology(technologyResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="destination"
                element={<Destination destinations={destination} />}
              />
              <Route path="crew" element={<Crew crew={crew} />} />
              <Route
                path="technology"
                element={<Technology technology={technology} />}
              />
            </Route>{" "}
             
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
