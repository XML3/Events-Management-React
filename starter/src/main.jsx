import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { EventPage } from "./pages/EventPage";
import { EventsPage } from "./pages/EventsPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { SignIn } from "./components/forms/SignIn";
import { SignUp } from "./components/forms/SignUp";
import { APP_ROUTES } from "./components/UI/constants";
import Dashboard from "./components/Dashboard";
import { Root } from "./components/Root";
import UserPage from "./pages/UserPage";
import AboutPage from "./pages/AboutPage";
import ContactForm from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ChakraProvider>
        <Root />
      </ChakraProvider>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to={APP_ROUTES.SIGN_IN} replace />,
      },
      {
        path: APP_ROUTES.SIGN_UP,
        element: <SignUp />,
      },
      {
        path: APP_ROUTES.SIGN_IN,
        element: <SignIn />,
      },

      {
        path: APP_ROUTES.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
      },
      {
        path: "/user/:userId",
        element: <UserPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },

      {
        path: "*",
        element: <Navigate to={APP_ROUTES.SIGN_IN} replace />,
      },
    ],
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
