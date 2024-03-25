import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomeBody />} />
        <Route path="homebody" element={<HomeBody />} />
  {/*<Route path="profile-search" element={<ProfileSearch />} />*/}
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
