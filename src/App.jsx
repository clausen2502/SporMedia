import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import { useState } from 'react'; 

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-detail/:slug" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
