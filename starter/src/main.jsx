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
// import ContactForm from "./pages/ContactPage";

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
        element: <EventsPage />,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
      },
      {
        path: "/users/:userId",
        element: <UserPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      //*****
      //This section is removed in order to not receive emails from users, code will remain as reference
      // {
      //   path: "/contact",
      //   element: <ContactForm />,
      // },
    ],
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
