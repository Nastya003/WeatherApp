import { Route, Routes } from "react-router-dom";
import CitiesPage from "./pages/CitiesPage";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
          <Route path="/" element ={<MainPage />} />
          <Route path="/cities" element={<CitiesPage />} />
        </Routes>
    </div>     
  )
}

export default App;