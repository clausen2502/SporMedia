import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Verkefni from "./pages/Verkefni"

export default function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/verkefni" element={<Verkefni />} />
      </Routes>
  );
}
