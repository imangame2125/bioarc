import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import AddTurn from '../pages/addAppointment';
import Home from '../pages/home';
import Patients from '../pages/patient';
import TaskManager from '../pages/taskManager';
import Dashaboard from '../pages/dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { path: '', Component: Home },
      { path: '/tasks', Component: TaskManager },
      { path: '/dashboard', Component: Dashaboard },
      { path: '/patients', Component: Patients },
      { path: '/add-turn', Component: AddTurn },
    ],
  },
]);
