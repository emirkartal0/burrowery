import MainPage from "./components/MainPage";
import AboutPage from "./pages/AboutPage";
import SustainedPage from "./pages/SustainedPage";
import ProductsPage from "./pages/ProductsPage";
import BlogPage from "./pages/BlogPage";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  return (
    <Router>
      <Header />
      <AboutUs />
      <Video />
      <Sustained />
      <Products />
      <Blog />
    </Router>
  );
}

export default App;
