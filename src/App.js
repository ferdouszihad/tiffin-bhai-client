import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Error404 from "./pages/Error404";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AddService from "./pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UserReview from "./pages/UserReview/UserReview";
import { ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "home",
          loader: () => {
            const services = fetch(
              "https://tiffinbhai-server.vercel.app/3services"
            );
            return services;
          },

          element: <Home></Home>,
        },
        {
          path: "",
          loader: () => {
            const services = fetch(
              "https://tiffinbhai-server.vercel.app/3services"
            );
            return services;
          },
          element: <Home></Home>,
        },

        {
          path: "/services",
          loader: () => {
            const services = fetch(
              "https://tiffinbhai-server.vercel.app/services"
            );
            return services;
          },
          element: <Services></Services>,
        },
        {
          path: "/services/:id",
          loader: ({ params }) => {
            const serviceDetail = fetch(
              `https://tiffinbhai-server.vercel.app/services/${params.id}`
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
            const services = fetch(
              "https://tiffinbhai-server.vercel.app/services"
            );
            return services;
          },
          element: <Error404></Error404>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/addService",
          element: (
            <PrivateRoute>
              <AddService></AddService>
            </PrivateRoute>
          ),
        },
        {
          path: "/user-review/:uid",
          loader: ({ params }) => {
            const userReviews = fetch(
              `https://tiffinbhai-server.vercel.app/user-review/${params.uid}`
            );
            return userReviews;
          },
          element: (
            <PrivateRoute>
              <UserReview></UserReview>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
