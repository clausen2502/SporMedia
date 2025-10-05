import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useState } from 'react'; 

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
