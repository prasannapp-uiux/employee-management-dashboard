import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Employee from "./pages/employee/employee.jsx";
import Settings from "./pages/settings/settings.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/employee-list" element={<Employee />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
