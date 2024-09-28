import { Route, Routes } from "react-router-dom";
import RecentsAds from "./components/RecentAds";
import Layout from "./pages/Layout";
import About from "./pages/About";
import AdDetails from "./pages/AdDetails";
import NewAd from "./pages/NewAd";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RecentsAds />} />
        <Route path="about" element={<About />} />
        <Route path="ad/new" element={<NewAd />} />
        <Route path="ad/:id" element={<AdDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
