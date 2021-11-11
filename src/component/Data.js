
import Home from "./Home";
import User from "./User";
import { Routes, Route } from "react-router-dom";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/User/:id" element={<User/>} />
    </Routes>
  );
}

export default RoutesComponent;
