import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home/home'
import Users from "./pages/users/users";
import NewUser from "./pages/users/new-user";
import UserDetail from "./pages/users/user-detail";
import Tasks from "./pages/tasks/tasks";
import NewTask from "./pages/tasks/new-task";
import Products from "./pages/products/products";

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
      path: "/users/:id",
      element: <UserDetail />,
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