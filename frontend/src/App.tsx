import { Route, Routes } from "react-router-dom";
import RecentsAds from "./components/RecentAds";
import Layout from "./pages/Layout";
import About from "./pages/About";
import AdDetails from "./pages/AdDetails";
import NewAd from "./pages/NewAd";
import NewCategory from "./pages/NewCategory";
import AdsByCategory from "./pages/AdsByCategory";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RecentsAds />} />
        <Route path="about" element={<About />} />
        <Route path="ad/new" element={<NewAd />} />
        <Route path="ad/:id" element={<AdDetails />} />
        <Route path="category/new" element={<NewCategory />} />
        <Route path="category/:name" element={<AdsByCategory />} />
      </Route>
    </Routes>
  );
};

export default App;
