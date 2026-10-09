import LandingPage from "./pages/landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //   path: "/gallery",
  //   element: <Gallery />,
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
