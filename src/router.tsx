import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MealTable from "./pages/MealTable";
import SignUp from "./pages/SignUp";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/mealTable" element={<MealTable />} />
      </Routes>
    </BrowserRouter>
  );
}
