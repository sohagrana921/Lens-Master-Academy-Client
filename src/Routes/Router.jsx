import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import DashBoard from "../pages/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/DashBoard/AddClass";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        ),
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
    ],
  },
]);
export default router;
