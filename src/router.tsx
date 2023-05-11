import { BrowserRouter, Route, Routes } from "react-router-dom";
import MealTable from "./pages/MealTable";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mealTable" element={<MealTable />} />
      </Routes>
    </BrowserRouter>
  );
}
