import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "./Layout/HomeLayout.jsx";
import Home from "./components/Home/Home.jsx";
import ProjectDetails from "./components/Project/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/details/:id",
        Component: ProjectDetails,
        loader: ({ params }) =>
          fetch("/data.json")
            .then((res) => res.json())
            .then((data) => data.find((project) => project.id === params.id)),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
