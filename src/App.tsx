import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home/home'
import Users from "./pages/users/users";
import Tasks from "./pages/tasks/tasks";
import Products from "./pages/products/products";
import NewUser from "./pages/users/new-user";
import NewTask from "./pages/tasks/new-task";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/users/new",
      element: <NewUser />,
    },
    {
      path: "/tasks",
      element: <Tasks />,
    },
    {
      path: "/tasks/new",
      element: <NewTask />,
    },    
    {
      path: "/products",
      element: <Products />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}