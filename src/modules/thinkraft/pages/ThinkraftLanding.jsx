import PageShell from "../../../shared/layout/PageShell";
import PhaseCard from "../components/PhaseCard";
import { useNavigate } from "react-router-dom";
import { LANDING_PAGE, UI_CLASSES, ROUTES } from "../../../config/constants";

export default function ThinkraftLanding() {

    const navigate = useNavigate();

    return (

        <PageShell>

            <section className={UI_CLASSES.LANDING.HERO}>

                <h1 className={UI_CLASSES.LANDING.HERO_TITLE}>
                    {LANDING_PAGE.HERO.TITLE}
                </h1>

                <p className={UI_CLASSES.LANDING.HERO_SUBTITLE}>
                    {LANDING_PAGE.HERO.SUBTITLE}
                </p>

                <button
                    onClick={() => navigate(ROUTES.DASHBOARD)}
                    className={UI_CLASSES.BUTTONS.PRIMARY}
                >
                    {LANDING_PAGE.HERO.CTA_TEXT}
                </button>

            </section>

            <section className={UI_CLASSES.LANDING.PHASE_SECTION}>

                {LANDING_PAGE.PHASES.map((phase) => (
                    <PhaseCard
                        key={phase.NUMBER}
                        title={`Phase ${phase.NUMBER}`}
                        description={phase.DESCRIPTION}
                    />
                ))}

            </section>

            <section className="thinkraft-info-section">

                <h2 className="thinkraft-section-title">
                    Why Thinkraft
                </h2>

                <div className="thinkraft-info-list">

                    <div>No AI invention</div>

                    <div>Your ideas, your way</div>

                    <div>Step-by-step guidance</div>

                </div>

            </section>

        </PageShell>

    );

}
