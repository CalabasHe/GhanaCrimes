import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
