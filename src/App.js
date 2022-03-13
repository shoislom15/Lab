import { Route, Routes } from "react-router-dom";
import ToolPage from "./Pages/ToolPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ToolPage />} />
    </Routes>
  );
}

export default App;
