import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/AboutPage/About";
import Home from "../pages/HomePage/Home";
import Packages from "../pages/Packages/Packages"
import Taxi from "../pages/TaxiService/TaxiService"
import Bike from "../pages/BikeRental/BikeRental"
import AllItems from "../pages/AllCars/AllCars";
import CardDetails from "../components/CardDetails";
import SingleBikePage from "../components/SingleBikePage"
import SingleTaxiPage from "../components/SingleTaxiPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/taxi-service',
        element: <Taxi />
      },
      {
        path: '/bike-rental',
        element: <Bike />
      },
      {
        path: '/holiday-packages',
        element: <Packages />
      },
      {
        path: '/cars',
        element: <AllItems></AllItems>
      },

      {
        path: '/carDetails/:id',
        element: <CardDetails />,
      },

      {
        path: '/bikeDetails/:id',
        element: <SingleBikePage />,
      },
      {
        path: '/taxi/:id',
        element: <SingleTaxiPage />,
      },
    ]
  },
]);
