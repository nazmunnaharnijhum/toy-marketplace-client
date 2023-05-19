import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
// import ToysCard from "../pages/Home/Toys/ToysCard";
import ToyTable from "../pages/ToyTable/ToyTable";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'allToys',
          element: <ToyTable></ToyTable>
          // loader: () => fetch('toys.json')
        },
        {
            path: 'login',
            element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;