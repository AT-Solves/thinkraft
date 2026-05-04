import ThinkraftDashboardLayout from "../components/ThinkraftDashboardLayout";
import SessionCard from "../components/SessionCard";
import Button from "../../../shared/components/Button";
import { DASHBOARD_PAGE, UI_CLASSES } from "../../../config/constants";

/**
 * Dashboard Page - Displays user sessions
 */
export default function ThinkraftDashboard() {
    return (
        <ThinkraftDashboardLayout>
            <div className={UI_CLASSES.DASHBOARD.HEADER}>
                <h1 className={UI_CLASSES.TITLES.DASHBOARD}>
                    {DASHBOARD_PAGE.HEADER.TITLE}
                </h1>

                <Button>
                    {DASHBOARD_PAGE.HEADER.NEW_SESSION_BTN}
                </Button>
            </div>

            <div className={UI_CLASSES.DASHBOARD.SESSIONS}>
                {DASHBOARD_PAGE.SAMPLE_SESSIONS.map((session) => (
                    <SessionCard
                        key={session.id}
                        title={session.title}
                        phase={session.phase}
                    />
                ))}
            </div>
        </ThinkraftDashboardLayout>
    );
}
