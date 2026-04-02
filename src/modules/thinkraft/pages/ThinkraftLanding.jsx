import PageShell from "../../../shared/layout/PageShell";
import PhaseCard from "../components/PhaseCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../app/routes";
import { LANDING_PAGE, UI_CLASSES } from "../../../config/constants";

export default function ThinkraftLanding() {
    const navigate = useNavigate();

    return (
        <PageShell>
            <section className={UI_CLASSES.SECTIONS.HERO}>
                <h1 className={UI_CLASSES.TITLES.HERO}>
                    {LANDING_PAGE.HERO.TITLE}
                </h1>

                <p className={UI_CLASSES.TITLES.HERO_SUBTITLE}>
                    {LANDING_PAGE.HERO.SUBTITLE}
                </p>

                <button
                    onClick={() => navigate(ROUTES.DASHBOARD)}
                    className={UI_CLASSES.BUTTONS.PRIMARY}
                >
                    {LANDING_PAGE.HERO.CTA_TEXT}
                </button>
            </section>

            <section className={UI_CLASSES.SECTIONS.PHASE_SECTION}>
                {LANDING_PAGE.PHASES.map((phase) => (
                    <PhaseCard
                        key={phase.title}
                        title={phase.title}
                        description={phase.description}
                    />
                ))}
            </section>

            <section className={UI_CLASSES.SECTIONS.INFO_SECTION}>
                <h2 className={UI_CLASSES.TITLES.SECTION}>
                    {LANDING_PAGE.INFO_SECTION.TITLE}
                </h2>

                <div className="thinkraft-info-list">
                    {LANDING_PAGE.INFO_SECTION.BENEFITS.map((benefit) => (
                        <div key={benefit}>{benefit}</div>
                    ))}
                </div>
            </section>
        </PageShell>
    );
}
