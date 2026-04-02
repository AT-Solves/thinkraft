/**
 * constants.js
 * Centralized configuration and constants for Thinkraft application.
 * Single source of truth for all hardcoded values, text, and class names.
 */

export const APP_CONFIG = {
    APP_NAME: "Thinkraft",
    TAGLINE: "Craft your thinking. Own your idea.",
    BRAND_TITLE: "Thinkraft",
    BRAND_SUBTITLE: "by AchieverThoughts",
};

export const ROUTES = {
    HOME: "/",
    DASHBOARD: "/dashboard",
    WORKSPACE: "/workspace",
    SUMMARY: "/summary",
    NOT_FOUND: "*",
};

export const PAGE_SHELL = {
    BRAND_TITLE: "Thinkraft",
    BRAND_SUBTITLE: "by AchieverThoughts",
    AUTH: {
        LOGIN: "Login",
        SIGNUP: "Sign Up",
    },
};

export const LANDING_PAGE = {
    HERO: {
        TITLE: "Thinkraft",
        SUBTITLE: "Craft your thinking. Own your idea.",
        CTA_TEXT: "Get Started",
    },
    PHASES: [
        {
            NUMBER: "1",
            TITLE: "Idea Clarity",
            DESCRIPTION: "Idea Clarity",
        },
        {
            NUMBER: "2",
            TITLE: "Evidence & Logic",
            DESCRIPTION: "Evidence & Logic",
        },
        {
            NUMBER: "3",
            TITLE: "Investor Ready",
            DESCRIPTION: "Investor Ready",
        },
    ],
    INFO_SECTION: {
        BENEFITS: [
            "Structured thinking framework",
            "Validation methodology",
            "Investor-ready packaging",
        ],
    },
};

export const DASHBOARD_PAGE = {
    HEADER_TITLE: "Your Sessions",
    NEW_SESSION_BTN: "New Session",
    SESSIONS: [
        {
            TITLE: "Startup Idea Validation Platform",
            PHASE: "Phase 1 - Idea Clarity",
        },
        {
            TITLE: "B2B Trust Marketplace",
            PHASE: "Phase 2 - Evidence & Logic",
        },
    ],
};

export const SESSION_CARD = {
    RESUME_BTN: "Resume",
};

export const SIDEBAR = {
    BRAND: "Thinkraft",
    PHASES: [
        {
            label: "Phase 0",
            title: "Orientation",
        },
        {
            label: "Phase 1",
            title: "Idea Clarity",
        },
        {
            label: "Phase 2",
            title: "Evidence & Logic",
        },
        {
            label: "Phase 3",
            title: "Investor Packaging",
        },
    ],
};

export const WORKSPACE_PAGE = {
    TEXTAREA_ROWS: 8,
    BUTTONS: {
        PREVIOUS: "Previous",
        NEXT: "Next",
        FINISH: "Finish",
    },
    PROGRESS_LABEL: "Phase",
    PROGRESS_SEPARATOR: "/",
    PROGRESS_QUESTION: "Question",
    PHASES: [
        {
            title: "Phase 0: Orientation",
            questions: [
                {
                    question: "What problem are you trying to solve?",
                    placeholder: "Describe the core problem...",
                },
                {
                    question: "Who is affected by this problem?",
                    placeholder: "Identify your target users...",
                },
            ],
        },
        {
            title: "Phase 1: Idea Clarity",
            questions: [
                {
                    question: "What is your proposed solution?",
                    placeholder: "Explain your solution...",
                },
                {
                    question: "What makes your solution unique?",
                    placeholder: "Describe your competitive advantage...",
                },
            ],
        },
        {
            title: "Phase 2: Evidence & Logic",
            questions: [
                {
                    question: "What evidence supports your idea?",
                    placeholder: "Provide market research, validation data...",
                },
                {
                    question: "What is your business model?",
                    placeholder: "How will you generate revenue?...",
                },
            ],
        },
        {
            title: "Phase 3: Investor Packaging",
            questions: [
                {
                    question: "What is your funding ask?",
                    placeholder: "How much capital do you need?...",
                },
                {
                    question: "What is your use of funds?",
                    placeholder: "How will you spend the investment?...",
                },
            ],
        },
    ],
};

export const APP_STATES = {
    LOADING_TEXT: "Loading...",
    LOADING_CLASS: "app-loading",
    ERROR_CLASS: "app-error",
    ERROR_TITLE: "Something went wrong",
    ERROR_DEFAULT_MSG: "An unexpected error occurred",
};

export const BUTTON_TEXTS = {
    GET_STARTED: "Get Started",
    NEW_SESSION: "New Session",
    LOGIN: "Login",
    SIGNUP: "Sign Up",
    RESUME: "Resume",
    PREVIOUS: "Previous",
    NEXT: "Next",
    FINISH: "Finish",
};

export const ERROR_MESSAGES = {
    PAGE_NOT_FOUND: "Page not found",
    PAGE_NOT_FOUND_DESCRIPTION: "The page you're looking for doesn't exist.",
    BACK_HOME: "Back to Home",
};

export const UI_CLASSES = {
    LAYOUT: {
        PAGE_SHELL: "page-shell",
        PAGE_SHELL_HEADER: "page-shell-header",
        PAGE_SHELL_HEADER_INNER: "page-shell-header-inner",
        PAGE_SHELL_BRAND: "page-shell-brand",
        PAGE_SHELL_BRAND_TITLE: "page-shell-brand-title",
        PAGE_SHELL_BRAND_SUBTITLE: "page-shell-brand-subtitle",
        PAGE_SHELL_ACTIONS: "page-shell-actions",
        PAGE_SHELL_CONTENT: "page-shell-content",
    },
    DASHBOARD_LAYOUT: {
        MAIN: "thinkraft-dashboard",
        SIDEBAR_WRAPPER: "thinkraft-dashboard-main",
    },
    SIDEBAR: {
        WRAPPER: "thinkraft-sidebar",
        BRAND: "thinkraft-sidebar-brand",
        NAV: "thinkraft-sidebar-nav",
        ITEM: "thinkraft-sidebar-item",
    },
    SESSION_CARD: {
        WRAPPER: "thinkraft-session-card",
        INNER: "thinkraft-session-card-inner",
        TITLE: "thinkraft-session-title",
        PHASE: "thinkraft-session-phase",
    },
    DASHBOARD: {
        HEADER: "thinkraft-dashboard-header",
        TITLE: "thinkraft-dashboard-title",
        SESSIONS: "thinkraft-dashboard-sessions",
    },
    LANDING: {
        HERO: "thinkraft-hero",
        HERO_TITLE: "thinkraft-hero-title",
        HERO_SUBTITLE: "thinkraft-hero-subtitle",
        PHASE_SECTION: "thinkraft-phase-section",
    },
    BUTTONS: {
        BASE: "btn",
        PRIMARY: "btn-primary",
        SECONDARY: "btn-secondary",
    },
    SECTIONS: {
        WORKSPACE: "thinkraft-workspace",
        WORKSPACE_CARD: "thinkraft-workspace-card",
        WORKSPACE_ACTIONS: "thinkraft-workspace__actions",
        WORKSPACE_PROGRESS: "thinkraft-workspace__progress",
    },
    TITLES: {
        WORKSPACE_PHASE: "thinkraft-workspace-phase",
        WORKSPACE_QUESTION: "thinkraft-workspace-question",
    },
    INPUT: {
        TEXTAREA: "thinkraft-workspace__input",
    },
};
