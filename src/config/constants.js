/**
 * App Metadata
 */
export const APP_CONFIG = {
    NAME: "Thinkraft",
    TAGLINE: "Craft your thinking. Own your idea.",
    BASENAME: "/thinkraft/",
};

/**
 * Page Shell Content (Header, Auth buttons, etc.)
 */
export const PAGE_SHELL = {
    BRAND_TITLE: "Thinkraft",
    BRAND_SUBTITLE: "by AchieverThoughts",
    AUTH: {
        LOGIN: "Login",
        SIGNUP: "Sign Up",
    },
};

/**
 * Landing Page Content
 */
export const LANDING_PAGE = {
    HERO: {
        TITLE: "Thinkcraft",
        SUBTITLE: "Craft your thinking. Own your idea.",
        CTA_TEXT: "Get Started",
    },
    PHASES: [
        { title: "Phase 1", description: "Idea Clarity" },
        { title: "Phase 2", description: "Evidence & Logic" },
        { title: "Phase 3", description: "Investor Ready" },
    ],
    INFO_SECTION: {
        TITLE: "Why Thinkcraft",
        BENEFITS: [
            "No AI invention",
            "Your ideas, your way",
            "Step-by-step guidance",
        ],
    },
};

/**
 * Dashboard Page Content
 */
export const DASHBOARD_PAGE = {
    HEADER: {
        TITLE: "Your Sessions",
        NEW_SESSION_BTN: "New Session",
    },
    SAMPLE_SESSIONS: [
        {
            id: 1,
            title: "Startup Idea Validation Platform",
            phase: "Phase 1 - Idea Clarity",
        },
        {
            id: 2,
            title: "B2B Trust Marketplace",
            phase: "Phase 2 - Evidence & Logic",
        },
    ],
};

/**
 * Session Card Content
 */
export const SESSION_CARD = {
    RESUME_BTN: "Resume",
};

/**
 * Sidebar Content
 */
export const SIDEBAR = {
    BRAND: "Thinkraft",
    PHASES: [
        { label: "Phase 0", title: "Orientation" },
        { label: "Phase 1", title: "Idea Clarity" },
        { label: "Phase 2", title: "Evidence & Logic" },
        { label: "Phase 3", title: "Investor Packaging" },
    ],
};

/**
 * Workspace Page Content
 */
export const WORKSPACE_PAGE = {
    TEXTAREA_ROWS: 4,
    BUTTONS: {
        PREVIOUS: "Previous",
        NEXT: "Next",
        FINISH: "Finish",
    },
    PROGRESS_LABEL: "Phase",
    PROGRESS_SEPARATOR: "·",
    PROGRESS_QUESTION: "Question",
    PHASES: [
        {
            id: 1,
            title: "Phase 1: Idea Clarity",
            questions: [
                {
                    id: 1,
                    question: "What is your startup idea?",
                    placeholder: "Describe your idea briefly...",
                },
                {
                    id: 2,
                    question: "Who is your target audience?",
                    placeholder: "Describe your ideal customer...",
                },
            ],
        },
        {
            id: 2,
            title: "Phase 2: Evidence & Logic",
            questions: [
                {
                    id: 3,
                    question: "What evidence supports your idea?",
                    placeholder: "Share market research, data, or validation...",
                },
            ],
        },
    ],
};

/**
 * Thinkraft Questions - Complete structured questionnaire
 * IMPORTANT: Thinkraft does NOT invent ideas. It only structures user thinking.
 */
export const THINKRAFT_PHASES = [
    {
        id: "orientation",
        title: "Phase 0 · Orientation",
        description: "Understand Thinkraft process",
        questions: [
            {
                id: "idea",
                question: "Describe your idea in one sentence.",
                type: "text",
                placeholder: "Example: A platform that connects mentors with students",
            },
            {
                id: "audience",
                question: "Who do you think this idea is for?",
                type: "text",
                placeholder: "Example: College students, founders, businesses",
            },
            {
                id: "motivation",
                question: "Why does this idea matter to you personally?",
                type: "text",
                placeholder: "Your personal motivation",
            },
        ],
    },
    {
        id: "clarity",
        title: "Phase 1 · Idea Clarity",
        description: "Clarify the problem and solution",
        questions: [
            {
                id: "problem",
                question: "What exact problem does your idea solve?",
                type: "text",
                placeholder: "Describe the problem clearly",
            },
            {
                id: "user",
                question: "Who experiences this problem most?",
                type: "text",
                placeholder: "Target user",
            },
            {
                id: "currentSolution",
                question: "How do people solve this problem today?",
                type: "text",
                placeholder: "Existing alternatives",
            },
            {
                id: "gap",
                question: "Why are current solutions not good enough?",
                type: "text",
                placeholder: "Gaps in existing solutions",
            },
        ],
    },
    {
        id: "evidence",
        title: "Phase 2 · Evidence & Logic",
        description: "Validate logic and feasibility",
        questions: [
            {
                id: "value",
                question: "What value does your solution provide?",
                type: "text",
                placeholder: "Describe the value proposition",
            },
            {
                id: "feasibility",
                question: "Can this realistically be built?",
                type: "text",
                placeholder: "Explain feasibility",
            },
            {
                id: "market",
                question: "Who would pay for this solution?",
                type: "text",
                placeholder: "Identify paying customers",
            },
        ],
    },
    {
        id: "packaging",
        title: "Phase 3 · Investor Packaging",
        description: "Prepare investor narrative",
        questions: [
            {
                id: "mvp",
                question: "What is the smallest version of your product?",
                type: "text",
                placeholder: "Describe your MVP",
            },
            {
                id: "vision",
                question: "Where do you want this to be in 2 years?",
                type: "text",
                placeholder: "Your vision",
            },
        ],
    },
];

/**
 * Loading & Error States
 */
export const APP_STATES = {
    LOADING_TEXT: "Loading...",
    LOADING_CLASS: "app-loading",
    ERROR_CLASS: "app-error",
    ERROR_TITLE: "Something went wrong",
    ERROR_DEFAULT_MSG: "An unexpected error occurred",
};

/**
 * UI Classes (for easier theme refactoring)
 */
export const UI_CLASSES = {
    // Layout classes
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

    // Dashboard layout
    DASHBOARD_LAYOUT: {
        MAIN: "thinkraft-dashboard",
        SIDEBAR_WRAPPER: "thinkraft-dashboard-main",
    },

    // Sidebar
    SIDEBAR: {
        WRAPPER: "thinkraft-sidebar",
        BRAND: "thinkraft-sidebar-brand",
        NAV: "thinkraft-sidebar-nav",
        ITEM: "thinkraft-sidebar-item",
    },

    // Session card
    SESSION_CARD: {
        WRAPPER: "thinkraft-session-card",
        INNER: "thinkraft-session-card-inner",
        TITLE: "thinkraft-session-title",
        PHASE: "thinkraft-session-phase",
    },

    // Button variants
    BUTTONS: {
        PRIMARY: "btn-primary",
        SECONDARY: "btn-secondary",
        BASE: "btn",
    },

    // Sections
    SECTIONS: {
        HERO: "thinkraft-hero",
        PHASE_SECTION: "thinkraft-phase-section",
        INFO_SECTION: "thinkraft-info-section",
        DASHBOARD_HEADER: "thinkraft-dashboard-header",
        DASHBOARD_SESSIONS: "thinkraft-dashboard-sessions",
        WORKSPACE: "thinkraft-workspace",
        WORKSPACE_CARD: "thinkraft-workspace__card",
        WORKSPACE_ACTIONS: "thinkraft-workspace__actions",
        WORKSPACE_PROGRESS: "thinkraft-workspace__progress",
    },

    // Titles & Typography
    TITLES: {
        HERO: "thinkraft-hero-title",
        HERO_SUBTITLE: "thinkraft-hero-subtitle",
        SECTION: "thinkraft-section-title",
        DASHBOARD: "thinkraft-dashboard-title",
        WORKSPACE_PHASE: "thinkraft-workspace__phase",
        WORKSPACE_QUESTION: "thinkraft-workspace__question",
    },

    // Lists
    LISTS: {
        INFO_LIST: "thinkraft-info-list",
    },

    // Input classes
    INPUT: {
        TEXTAREA: "thinkraft-workspace__input",
    },
};

/**
 * Error Messages
 */
export const ERROR_MESSAGES = {
    PAGE_NOT_FOUND: "404 - Page Not Found",
    PAGE_NOT_FOUND_DESC: "Sorry, the page you're looking for doesn't exist.",
    ERROR_OCCURRED: "Something went wrong",
    UNEXPECTED_ERROR: "An unexpected error occurred",
};

/**
 * Button Texts
 */
export const BUTTON_TEXTS = {
    BACK_TO_HOME: "Back to Home",
    GET_STARTED: "Get Started",
    NEW_SESSION: "New Session",
    LOGIN: "Login",
    SIGNUP: "Sign Up",
    RESUME: "Resume",
};
