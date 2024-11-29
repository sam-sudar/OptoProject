import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./routes/index.css";
import About from "./routes/about.jsx";
import Services from "./routes/services.jsx";
import Blogs from "./routes/blogs.jsx";
// import BlogDetail from "./routes/blogsDetail.jsx";
import Contacts from "./routes/contact.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000, once: true });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  // {
  //   path: "/blogs/:id",
  //   element: <BlogDetail />,
  // },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
