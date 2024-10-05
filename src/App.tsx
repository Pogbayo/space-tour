import Home from "./components/Home";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
function App() {
  interface Destination {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    description: string;
    distance: string;
    travel: string;
  }

  interface CrewMember {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    role: string;
    bio: string;
  }

  interface Technology {
    name: string;
    images: {
      portrait: string;
      landscape: string;
    };
    description: string;
  }

  interface RootObject {
    destinations: Destination[];
    crew: CrewMember[];
    technology: Technology[];
  }

  const [destination, setDestination] = useState<Destination[]>([]);
  const [crew, setCrew] = useState<CrewMember[]>([]);
  const [technology, setTechnology] = useState<Technology[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [destinationsResponse, crewResponse, technologyResponse] =
          (await Promise.all([
            axios.get("http://localhost:5000/destinations"),
            axios.get("http://localhost:5000/crew"),
            axios.get("http://localhost:5000/technology"),
          ])) as [
            AxiosResponse<Destination[]>,
            AxiosResponse<CrewMember[]>,
            AxiosResponse<Technology[]>
          ];

        setDestination(destinationsResponse.data);
        console.log(destinationsResponse.data);

        setCrew(crewResponse.data);
        console.log(crewResponse.data);

        setTechnology(technologyResponse.data);
        console.log(technologyResponse.data);
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
