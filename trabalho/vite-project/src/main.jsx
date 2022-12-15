import React from "react";
    import ReactDOM from "react-dom/client";

    import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

    import App from "./App";
    import Filmes from "./Filmes";
    import NovoFilme from "./NovoFilme";
    import EditarFilme from "./EditarFilme"

    const router = createBrowserRouter([
    {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Filmes />,
      },
      {
        path: "/novo",
        element: <NovoFilme />,
      },
      {
        path: "/editar/:id",
        element: <EditarFilme />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);