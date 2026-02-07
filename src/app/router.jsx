import { createBrowserRouter } from "react-router-dom";

import ThinkraftLanding from "../modules/thinkraft/pages/ThinkraftLanding";
import ThinkraftDashboard from "../modules/thinkraft/pages/ThinkraftDashboard";
import ThinkraftWorkspace from "../modules/thinkraft/pages/ThinkraftWorkspace";
import ThinkraftSummary from "../modules/thinkraft/pages/ThinkraftSummary";

export const router = createBrowserRouter([
    {
        path: "/thinkraft",
        element: <ThinkraftLanding />,
    },
    {
        path: "/thinkraft/dashboard",
        element: <ThinkraftDashboard />,
    },
    {
        path: "/thinkraft/workspace",
        element: <ThinkraftWorkspace />,
    },
    {
        path: "/thinkraft/summary",
        element: <ThinkraftSummary />,
    },
]);
