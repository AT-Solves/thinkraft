/**
 * Route configuration constants
 * Centralized route definitions for easier maintenance and consistency
 */

export const ROUTES = {
    HOME: "/",
    DASHBOARD: "/dashboard",
    WORKSPACE: "/workspace",
    SUMMARY: "/summary",
};

/**
 * Route paths object - use these throughout the app instead of hardcoding paths
 * Example: navigate(ROUTES.DASHBOARD)
 */
export const getRoutePath = (routeName) => ROUTES[routeName] || ROUTES.HOME;
