import {BrowserRouter, Routes, Route} from "react-router-dom";
import Attendance from "./pages/attendance/Attendance";
import Dashboard from './pages/dashboard/Dashboard';
import Employees from "./pages/employees/Employees";
import HelpDesk from "./pages/helpDesk/HelpDesk";
import Settings from './pages/settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/help_desk/*' element={<HelpDesk />} />
        <Route path='/attendance' element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
