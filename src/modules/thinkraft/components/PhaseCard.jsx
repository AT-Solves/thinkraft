import Card from "../../../shared/components/Card";

export default function PhaseCard({ title, description, onClick }) {

    return (

        <Card className="thinkraft-phase-card" onClick={onClick}>

            <div className="thinkraft-phase-card-title">
                {title}
            </div>

            <div className="thinkraft-phase-card-description">
                {description}
            </div>

        </Card>

    );

}
