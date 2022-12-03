import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Products from "./components/Products";
import Sustained from "./components/Sustained";
import Video from "./components/Video";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  return (
    <Router>
    <HamburgerMenu/>
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
