// File: src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

// Pages
import App from "./App"; // Layout wrapper
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Fashion from "./pages/Fashion";
import Wedding from "./pages/Wedding";
import WeddingGallery from "./pages/WeddingGallery";
import StoryView from "./pages/StoryView";
import AboutUs from "./pages/AboutUs";
import Enquire from "./pages/Enquire";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/",
    element: <App />, // Layout wrapper with <Outlet />
    children: [
      { path: "home", element: <Home /> },
      { path: "fashion", element: <Fashion /> },
      { path: "wedding", element: <Wedding /> },
      { path: "gallery/:slug", element: <WeddingGallery /> },
      { path: "story/:id", element: <StoryView /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "enquire", element: <Enquire /> },
      { path: "*", element: <Landing /> }, // fallback route
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
