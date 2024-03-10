import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Pricing from "./Components/Pricing/Pricing";
import UseCases from "./Components/UseCases/UseCases";
import Error from "././Page/Error/Error";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Pricing />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/UseCases" element={<UseCases />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
