import { createBrowserRouter } from "react-router-dom";

import ThinkraftLanding from "../modules/thinkraft/pages/ThinkraftLanding";
import ThinkraftDashboard from "../modules/thinkraft/pages/ThinkraftDashboard";
import ThinkraftWorkspace from "../modules/thinkraft/pages/ThinkraftWorkspace";
import ThinkraftSummary from "../modules/thinkraft/pages/ThinkraftSummary";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <ThinkraftLanding />,
        },
        {
            path: "/dashboard",
            element: <ThinkraftDashboard />,
        },
        {
            path: "/workspace",
            element: <ThinkraftWorkspace />,
        },
        {
            path: "/summary",
            element: <ThinkraftSummary />,
        },
    ],
    {
        basename:
            import.meta.env.PROD
                ? "/Thinkraft"
                : "/",
    }
);
