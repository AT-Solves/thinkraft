import { createBrowserRouter, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { APP_STATES } from "../config/constants";

const ThinkraftLanding = lazy(() =>
    import("../modules/thinkraft/pages/ThinkraftLanding")
);
const ThinkraftDashboard = lazy(() =>
    import("../modules/thinkraft/pages/ThinkraftDashboard")
);
const ThinkraftWorkspace = lazy(() =>
    import("../modules/thinkraft/pages/ThinkraftWorkspace")
);
const ThinkraftSummary = lazy(() =>
    import("../modules/thinkraft/pages/ThinkraftSummary")
);
const NotFound = lazy(() => import("../modules/thinkraft/pages/NotFound"));

const LoadingFallback = () => (
    <div className={APP_STATES.LOADING_CLASS}>{APP_STATES.LOADING_TEXT}</div>
);

const DashboardLayout = () => (
    <Suspense fallback={<LoadingFallback />}>
        <Outlet />
    </Suspense>
);

const ErrorBoundaryFallback = ({ error }) => (
    <div className={APP_STATES.ERROR_CLASS}>
        <h1>{APP_STATES.ERROR_TITLE}</h1>
        <p>{error?.message || APP_STATES.ERROR_DEFAULT_MSG}</p>
    </div>
);

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <Suspense fallback={<LoadingFallback />}>
                    <ThinkraftLanding />
                </Suspense>
            ),
        },
        {
            element: <DashboardLayout />,
            errorElement: <ErrorBoundaryFallback />,
            children: [
                {
                    path: "dashboard",
                    element: <ThinkraftDashboard />,
                },
                {
                    path: "workspace",
                    element: <ThinkraftWorkspace />,
                },
                {
                    path: "summary",
                    element: <ThinkraftSummary />,
                },
            ],
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ],
    {
        basename: "/thinkraft/",
    }
);
