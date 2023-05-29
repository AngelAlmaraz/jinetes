import { createBrowserRouter} from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailPage";
import ErrorPage from "./pages/ErrorPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "books/:id", element: <BookDetailPage /> },
      {path: "/signin", element:<SignIn />},
      {path:"/signup",element:<SignUp />},
    ],
  },
]);

export default router;
