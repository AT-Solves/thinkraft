import { useState, useMemo } from "react";
import PageShell from "../../../shared/layout/PageShell";
import Container from "../../../shared/components/Container";
import Card from "../../../shared/components/Card";
import Button from "../../../shared/components/Button";
import { WORKSPACE_PAGE, UI_CLASSES } from "../../../config/constants";

/**
 * Workspace Page - Interactive questionnaire across multiple phases
 */
export default function ThinkraftWorkspace() {
    const [phaseIndex, setPhaseIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [input, setInput] = useState("");

    const PHASES = useMemo(() => WORKSPACE_PAGE.PHASES, []);

    const currentPhase = PHASES[phaseIndex];
    const currentQuestion = currentPhase?.questions[questionIndex];
    const isLastPhase = phaseIndex === PHASES.length - 1;
    const isLastQuestion =
        questionIndex === ((currentPhase?.questions?.length ?? 0) - 1);

    const handlePrevious = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        } else if (phaseIndex > 0) {
            const prevPhaseIndex = phaseIndex - 1;
            setPhaseIndex(prevPhaseIndex);
            setQuestionIndex(PHASES[prevPhaseIndex].questions.length - 1);
        }
    };

    const handleNext = () => {
        if (isLastPhase && isLastQuestion) {
            console.log("Workspace complete!");
            return;
        }

        if (isLastQuestion) {
            setPhaseIndex(phaseIndex + 1);
            setQuestionIndex(0);
        } else {
            setQuestionIndex(questionIndex + 1);
        }
    };

    if (!currentPhase || !currentQuestion) {
        return null;
    }

    return (
        <PageShell>
            <Container>
                <div className={UI_CLASSES.SECTIONS.WORKSPACE}>
                    <Card className={UI_CLASSES.SECTIONS.WORKSPACE_CARD}>
                        <div className={UI_CLASSES.TITLES.WORKSPACE_PHASE}>
                            {currentPhase.title}
                        </div>

                        <div className={UI_CLASSES.TITLES.WORKSPACE_QUESTION}>
                            {currentQuestion.question}
                        </div>

                        <textarea
                            className={UI_CLASSES.INPUT.TEXTAREA}
                            rows={WORKSPACE_PAGE.TEXTAREA_ROWS}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={currentQuestion.placeholder}
                        />

                        <div className={UI_CLASSES.SECTIONS.WORKSPACE_ACTIONS}>
                            <Button onClick={handlePrevious}>
                                {WORKSPACE_PAGE.BUTTONS.PREVIOUS}
                            </Button>

                            <Button onClick={handleNext}>
                                {isLastPhase && isLastQuestion
                                    ? WORKSPACE_PAGE.BUTTONS.FINISH
                                    : WORKSPACE_PAGE.BUTTONS.NEXT}
                            </Button>
                        </div>
                    </Card>

                    <div className={UI_CLASSES.SECTIONS.WORKSPACE_PROGRESS}>
                        {WORKSPACE_PAGE.PROGRESS_LABEL} {phaseIndex + 1}{" "}
                        {WORKSPACE_PAGE.PROGRESS_SEPARATOR}{" "}
                        {WORKSPACE_PAGE.PROGRESS_QUESTION} {questionIndex + 1}
                    </div>
                </div>
            </Container>
        </PageShell>
    );
}
