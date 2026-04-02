import { memo } from "react";
import Card from "../../../shared/components/Card";

/**
 * PhaseCard
 *
 * Displays a phase/feature card on the landing page.
 * Memoized to optimize re-renders during parent updates.
 */
const PhaseCard = memo(function PhaseCard({ title, description, onClick }) {
    return (
        <Card className="thinkraft-phase-card" onClick={onClick}>
            <div className="thinkraft-phase-card-title">{title}</div>
            <div className="thinkraft-phase-card-description">
                {description}
            </div>
        </Card>
    );
});

PhaseCard.displayName = "PhaseCard";

export default PhaseCard;
