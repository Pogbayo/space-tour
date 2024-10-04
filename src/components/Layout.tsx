import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {

  const location = useLocation();

  const backgroundImages: { [key: string]: string } = {
    "/": "./assets/home/background-home-desktop.jpg",
    "/crew": "./assets/crew/background-crew-desktop.jpg",
    "/destination": "./assets/destination/background-destination-desktop.jpg",
    "/technology": "./assets/technology/background-technology-desktop.jpg",
  };
  const backgroundImage: string  =
    backgroundImages[location.pathname];
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-image",
      `url(${backgroundImage})`
    );
  }, [backgroundImage]);


  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
