import ThinkraftSidebar from "./ThinkraftSidebar";
import { UI_CLASSES } from "../../../config/constants";

/**
 * ThinkraftDashboardLayout - Sidebar + content layout
 */
export default function ThinkraftDashboardLayout({ children }) {
    return (
        <div className={UI_CLASSES.DASHBOARD_LAYOUT.MAIN}>
            <ThinkraftSidebar />

            <div className={UI_CLASSES.DASHBOARD_LAYOUT.SIDEBAR_WRAPPER}>
                {children}
            </div>
        </div>
    );
}
