import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import ProfileSearch from "./routes/Home/ProfileSearch";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<HomeBody />} />
        <Route path="homebody" element={<HomeBody />} />
        <Route path="profile-search" element={<ProfileSearch />}>
         <Route path="profile-search/:sendUser" element={<ProfileSearch />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
  );
}
