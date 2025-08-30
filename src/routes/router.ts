import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AddTurn from "../pages/addAppointment";
import CallHistory from "../pages/callHistory";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import OutboundCall from "../pages/outboundCall";
import Patients from "../pages/patient";
import Staff from "../pages/staff";
import TaskManager from "../pages/taskManager";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "", Component: Home },
      { path: "/tasks", Component: TaskManager },
      { path: "/dashboard", Component: Dashboard },
      { path: "/patients", Component: Patients },
      { path: "/add-appointment", Component: AddTurn },
      { path: "/call-history", Component: CallHistory },
      { path: "/staff", Component: Staff },
      { path: "/outbound-call", Component: OutboundCall },
      { path: "/add-appointment", Component: AddTurn },
    ],
  },
]);
