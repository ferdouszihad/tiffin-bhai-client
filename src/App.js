import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "home",
          loader: () => {
            const services = fetch("http://localhost:5000/3services");
            return services;
          },

          element: <Home></Home>,
        },
        {
          path: "",
          loader: () => {
            const services = fetch("http://localhost:5000/3services");
            return services;
          },
          element: <Home></Home>,
        },

        {
          path: "/services",
          loader: () => {
            const services = fetch("http://localhost:5000/services");
            return services;
          },
          element: <Services></Services>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
