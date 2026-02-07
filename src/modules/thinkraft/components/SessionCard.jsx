import Card from "../../../shared/components/Card";
import Button from "../../../shared/components/Button";

/**
 * SessionCard
 *
 * Displays user session summary.
 */

export default function SessionCard({ title, phase }) {

    return (

        <Card className="thinkraft-session-card">

            <div className="thinkraft-session-card-inner">

                <div>

                    <div className="thinkraft-session-title">
                        {title}
                    </div>

                    <div className="thinkraft-session-phase">
                        {phase}
                    </div>

                </div>

                <Button>
                    Resume
                </Button>

            </div>

        </Card>

    );

}
