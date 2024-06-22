import Navbar from "./components/Navbar";
import logo from "./assets/NavLogo.webp";
import docimg from "./assets/HeroImage.webp";
import health from "./assets/Healthcare.webp";
import LandingPageContent from "./components/LandingPageContent";
function App() {
  return (
    <>
      <Navbar logo={logo} />
      <LandingPageContent docimg={docimg} health={health} />
    </>
  );
}

export default App;
