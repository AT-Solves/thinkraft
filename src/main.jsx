import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import App from "./App";
import { router } from "./app/router";

/**
 * Thinkraft Design System Entry Point
 * Only ONE stylesheet must be imported.
 * index.css internally loads tokens, components, layouts.
 */
import "./styles/index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

        <App>
            <RouterProvider router={router} />
        </App>

    </React.StrictMode>
);
