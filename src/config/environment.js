/**
 * Environment Configuration
 * API endpoints and environment-specific settings
 * 
 * Usage: import from this file instead of hardcoding API URLs, auth tokens, etc.
 * 
 * For production builds, create environment-specific files:
 * - config.dev.js
 * - config.prod.js
 */

const ENV = import.meta.env.MODE || "development";

export const API_CONFIG = {
    // Base API URL - configure based on environment
    BASE_URL:
        ENV === "production"
            ? "https://api.achieverthoughts.com"
            : "http://localhost:3000",

    // Endpoints
    ENDPOINTS: {
        SESSIONS: "/api/sessions",
        SESSION_DETAIL: "/api/sessions/:id",
        SESSION_CREATE: "/api/sessions",
        SESSION_UPDATE: "/api/sessions/:id",
        SESSION_DELETE: "/api/sessions/:id",
        PHASES: "/api/phases",
        QUESTIONS: "/api/questions",
    },

    // Timeouts and retries
    REQUEST_TIMEOUT: 30000, // 30 seconds
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000, // 1 second between retries
};

/**
 * Feature flags for progressive feature rollout
 */
export const FEATURE_FLAGS = {
    ENABLE_SESSION_EXPORT: true,
    ENABLE_SHARING: false,
    ENABLE_AI_SUGGESTIONS: false,
    ENABLE_ANALYTICS: true,
    DEBUG_MODE: ENV === "development",
};

/**
 * Storage keys for localStorage
 */
export const STORAGE_KEYS = {
    USER_SESSION: "thinkraft_user_session",
    DRAFT_WORKSPACE: "thinkraft_draft_workspace",
    USER_PREFERENCES: "thinkraft_user_preferences",
    CACHED_PHASES: "thinkraft_cached_phases",
};

/**
 * Authentication configuration
 */
export const AUTH_CONFIG = {
    TOKEN_KEY: "thinkraft_auth_token",
    TOKEN_EXPIRY_KEY: "thinkraft_token_expiry",
    REFRESH_TOKEN_KEY: "thinkraft_refresh_token",
    TOKEN_REFRESH_THRESHOLD: 5 * 60 * 1000, // Refresh if expiring within 5 minutes
};

/**
 * Analytics configuration
 */
export const ANALYTICS_CONFIG = {
    ENABLED: FEATURE_FLAGS.ENABLE_ANALYTICS,
    TRACKING_ID: import.meta.env.VITE_GA_ID || null,
    DEBUG: FEATURE_FLAGS.DEBUG_MODE,
};
