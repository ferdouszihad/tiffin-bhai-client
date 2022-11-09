import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Error404 from "./pages/Error404";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Blog from "./pages/Blog/Blog";

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
        {
          path: "/services/:id",
          loader: ({ params }) => {
            const serviceDetail = fetch(
              `http://localhost:5000/services/${params.id}`
            );
            return serviceDetail;
          },
          element: <ServiceDetail></ServiceDetail>,
        },
        {
          path: "/blog",

          element: <Blog></Blog>,
        },
        {
          path: "/*",
          loader: () => {
            const services = fetch("http://localhost:5000/services");
            return services;
          },
          element: <Error404></Error404>,
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
