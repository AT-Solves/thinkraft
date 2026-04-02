import { useState, useMemo } from "react";
import { useLocalStorage } from "../../../shared/hooks/useLocalStorage";
import { THINKRAFT_PHASES } from "../../../config/constants";

/**
 * Thinkraft Session Engine with Persistence
 * Manages phase progression, question tracking, and session persistence
 */
const STORAGE_KEY = "thinkraft-session";

export function useThinkraftSession() {
    // Load initial session from localStorage
    const [sessionData, setSessionData] = useLocalStorage(STORAGE_KEY, {
        phaseIndex: 0,
        questionIndex: 0,
        answers: {},
    });

    const [phaseIndex, setPhaseIndex] = useState(sessionData.phaseIndex || 0);
    const [questionIndex, setQuestionIndex] = useState(
        sessionData.questionIndex || 0
    );
    const [answers, setAnswers] = useState(sessionData.answers || {});

    // Memoize current phase and question lookups
    const currentPhase = useMemo(
        () => THINKRAFT_PHASES[phaseIndex],
        [phaseIndex]
    );

    const currentQuestion = useMemo(
        () => currentPhase?.questions[questionIndex],
        [currentPhase, questionIndex]
    );

    const isLastQuestion = useMemo(
        () => questionIndex === currentPhase?.questions.length - 1,
        [questionIndex, currentPhase]
    );

    const isLastPhase = useMemo(
        () => phaseIndex === THINKRAFT_PHASES.length - 1,
        [phaseIndex]
    );

    // Auto-save session to localStorage whenever state changes
    const saveSession = () => {
        setSessionData({
            phaseIndex,
            questionIndex,
            answers,
        });
    };

    /**
     * Save answer - updates both state and localStorage
     */
    const saveAnswer = (questionId, value) => {
        const updatedAnswers = {
            ...answers,
            [questionId]: value,
        };
        setAnswers(updatedAnswers);
        setSessionData({
            phaseIndex,
            questionIndex,
            answers: updatedAnswers,
        });
    };

    /**
     * Navigate to next question
     */
    const next = () => {
        if (isLastQuestion) {
            if (isLastPhase) {
                console.log("Thinkraft Complete");
                return;
            }
            setPhaseIndex((prev) => prev + 1);
            setQuestionIndex(0);
        } else {
            setQuestionIndex((prev) => prev + 1);
        }
        saveSession();
    };

    /**
     * Navigate to previous question
     */
    const previous = () => {
        if (questionIndex > 0) {
            setQuestionIndex((prev) => prev - 1);
        } else if (phaseIndex > 0) {
            const prevPhaseIndex = phaseIndex - 1;
            const prevPhaseQuestionCount =
                THINKRAFT_PHASES[prevPhaseIndex].questions.length - 1;
            setPhaseIndex(prevPhaseIndex);
            setQuestionIndex(prevPhaseQuestionCount);
        }
        saveSession();
    };

    /**
     * Reset session completely
     */
    const reset = () => {
        setPhaseIndex(0);
        setQuestionIndex(0);
        setAnswers({});
        setSessionData({
            phaseIndex: 0,
            questionIndex: 0,
            answers: {},
        });
    };

    return {
        phaseIndex,
        questionIndex,
        currentPhase,
        currentQuestion,
        answers,
        saveAnswer,
        next,
        previous,
        reset,
        isLastPhase,
        isLastQuestion,
    };
}
