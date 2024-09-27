import { Route, Routes } from "react-router-dom";
import RecentsAds from "./components/RecentAds";
import Layout from "./pages/Layout";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RecentsAds />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
