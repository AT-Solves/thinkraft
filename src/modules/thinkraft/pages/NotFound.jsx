import { useNavigate } from "react-router-dom";
import PageShell from "../../../shared/layout/PageShell";
import Button from "../../../shared/components/Button";
import { ERROR_MESSAGES, BUTTON_TEXTS } from "../../../config/constants";
import { ROUTES } from "../../../app/routes";

/**
 * NotFound Page - Displayed for undefined routes
 */
export default function NotFound() {
    const navigate = useNavigate();

    return (
        <PageShell>
            <section className="thinkraft-not-found">
                <h1>{ERROR_MESSAGES.PAGE_NOT_FOUND}</h1>
                <p>{ERROR_MESSAGES.PAGE_NOT_FOUND_DESC}</p>
                <Button onClick={() => navigate(ROUTES.HOME)}>
                    {BUTTON_TEXTS.BACK_TO_HOME}
                </Button>
            </section>
        </PageShell>
    );
}
