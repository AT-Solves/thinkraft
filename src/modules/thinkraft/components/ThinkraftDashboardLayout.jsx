import ThinkraftSidebar from "./ThinkraftSidebar";

/**
 * ThinkraftDashboardLayout
 *
 * Provides sidebar + content layout structure.
 */

export default function ThinkraftDashboardLayout({ children }) {

    return (

        <div className="thinkraft-dashboard">

            <ThinkraftSidebar />

            <div className="thinkraft-dashboard-main">

                {children}

            </div>

        </div>

    );

}
