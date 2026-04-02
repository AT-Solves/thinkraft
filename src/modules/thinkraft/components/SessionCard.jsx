import { memo } from "react";
import Card from "../../../shared/components/Card";
import Button from "../../../shared/components/Button";
import { SESSION_CARD, UI_CLASSES } from "../../../config/constants";

/**
 * SessionCard - Displays user session summary
 * Memoized to optimize re-renders in session lists.
 */
const SessionCard = memo(function SessionCard({ title, phase }) {
    return (
        <Card className={UI_CLASSES.SESSION_CARD.WRAPPER}>
            <div className={UI_CLASSES.SESSION_CARD.INNER}>
                <div>
                    <div className={UI_CLASSES.SESSION_CARD.TITLE}>
                        {title}
                    </div>

                    <div className={UI_CLASSES.SESSION_CARD.PHASE}>
                        {phase}
                    </div>
                </div>

                <Button>{SESSION_CARD.RESUME_BTN}</Button>
            </div>
        </Card>
    );
});

SessionCard.displayName = "SessionCard";

export default SessionCard;
