import Layout from "./components/Layout"
import Home from "./components/Home";
import Destination from "./components/Destination";
import Accomodation from "./components/Accomodation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination/:id" element={<Destination />} />
          <Route path="accomodation" element={<Accomodation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
