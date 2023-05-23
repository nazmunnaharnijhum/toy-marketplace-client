import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
// import ToysCard from "../pages/Home/Toys/ToysCard";
import ToyTable from "../pages/ToyTable/ToyTable";
import Register from "../pages/Register/Register";
import ToyDetails from "../pages/Shared/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/MyToys/UpdateToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";

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
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'details/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://toy-marketplace-assignment-11-server-nazmunnaharnijhum.vercel.app/toys/${params.id}`)
        },
        {
          path: '/addToy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: '/myToys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: 'updateToy/:id',
          element: <UpdateToy></UpdateToy>,
          // loader: ({params}) => fetch(`https://toy-marketplace-assignment-11-server-nazmunnaharnijhum.vercel.app/myToys/${params.email}/${params.id}`)
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

  export default router;