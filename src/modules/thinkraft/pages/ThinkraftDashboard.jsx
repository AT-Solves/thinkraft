import ThinkraftDashboardLayout from "../components/ThinkraftDashboardLayout";
import SessionCard from "../components/SessionCard";
import Button from "../../../shared/components/Button";

/**
 * ThinkraftDashboard Page
 */

export default function ThinkraftDashboard() {

    return (

        <ThinkraftDashboardLayout>

            <div className="thinkraft-dashboard-header">

                <h1 className="thinkraft-dashboard-title">
                    Your Sessions
                </h1>

                <Button>
                    New Session
                </Button>

            </div>

            <div className="thinkraft-dashboard-sessions">

                <SessionCard
                    title="Startup Idea Validation Platform"
                    phase="Phase 1 - Idea Clarity"
                />

                <SessionCard
                    title="B2B Trust Marketplace"
                    phase="Phase 2 - Evidence & Logic"
                />

            </div>

        </ThinkraftDashboardLayout>

    );

}
