import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavLink from "./Components/Navbar";
import AllRoutes from "../src/Components/AllRoutes";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <NavLink />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
