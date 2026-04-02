import { useNavigate } from "react-router-dom";
import { ROUTES } from "./routes";

/**
 * Navigation Helper Functions
 * Centralized navigation logic for consistency and easier refactoring
 */

const navigationHelpers = {
    toDashboard: (navigate) => navigate(ROUTES.DASHBOARD),
    toWorkspace: (navigate) => navigate(ROUTES.WORKSPACE),
    toSummary: (navigate) => navigate(ROUTES.SUMMARY),
    toHome: (navigate) => navigate(ROUTES.HOME),
    goBack: (navigate) => navigate(-1),
};

/**
 * Custom hook for navigation with all helpers
 * @returns {Object} Navigation helper functions
 * @example
 * const { goToDashboard, goBack } = useThinkraftNavigation();
 */
export const useThinkraftNavigation = () => {
    const navigate = useNavigate();

    return {
        goToDashboard: () => navigationHelpers.toDashboard(navigate),
        goToWorkspace: () => navigationHelpers.toWorkspace(navigate),
        goToSummary: () => navigationHelpers.toSummary(navigate),
        goHome: () => navigationHelpers.toHome(navigate),
        goBack: () => navigationHelpers.goBack(navigate),
    };
};
