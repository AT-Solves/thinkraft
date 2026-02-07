import PageShell from "../../../shared/layout/PageShell";
import PhaseCard from "../components/PhaseCard";
import { useNavigate } from "react-router-dom";

export default function ThinkraftLanding() {

    const navigate = useNavigate();

    return (

        <PageShell>

            <section className="thinkraft-hero">

                <h1 className="thinkraft-hero-title">
                    Thinkraft
                </h1>

                <p className="thinkraft-hero-subtitle">
                    Craft your thinking. Own your idea.
                </p>

                <button
                    onClick={() => navigate("/thinkraft/dashboard")}
                    className="btn-primary"
                >
                    Get Started
                </button>

            </section>

            <section className="thinkraft-phase-section">

                <PhaseCard
                    title="Phase 1"
                    description="Idea Clarity"
                />

                <PhaseCard
                    title="Phase 2"
                    description="Evidence & Logic"
                />

                <PhaseCard
                    title="Phase 3"
                    description="Investor Ready"
                />

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
