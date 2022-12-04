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

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/hakkımızda' element={<AboutPage />} />
        <Route path='/surdurulebilir' element={<SustainedPage />} />
        <Route path='/urunler' element={<ProductsPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
