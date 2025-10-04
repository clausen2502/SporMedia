import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useState } from 'react'; 

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
