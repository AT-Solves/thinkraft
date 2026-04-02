# No Hardcoding Guide

## Overview

This document explains the "no hardcoding" practice implemented in Thinkraft. The goal is to make the codebase more maintainable, testable, and flexible.

## Principles

1. **Single Source of Truth** - All configuration values exist in one place
2. **Easy Maintenance** - Change values in one file instead of searching across the codebase
3. **Environment Flexibility** - Different configurations for dev, staging, production
4. **Testability** - Easy to mock/override values for testing
5. **Scalability** - Easier to add new features without duplicating values

## Configuration Files

### 1. `src/config/constants.js`
**Purpose**: UI text, labels, CSS classes, component data

**Usage:**
```jsx
import { LANDING_PAGE, UI_CLASSES, BUTTON_TEXTS } from "../config/constants";

// Instead of:
<h1>Thinkraft</h1>
<button className="btn-primary">Get Started</button>

// Do this:
<h1>{LANDING_PAGE.HERO.TITLE}</h1>
<button className={UI_CLASSES.BUTTONS.PRIMARY}>{BUTTON_TEXTS.GET_STARTED}</button>
```

### 2. `src/config/environment.js`
**Purpose**: API endpoints, feature flags, storage keys, auth configuration

**Usage:**
```javascript
import { API_CONFIG, FEATURE_FLAGS } from "../config/environment";

// Instead of:
fetch("https://api.example.com/api/sessions")

// Do this:
fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SESSIONS}`)

// Feature toggle:
if (FEATURE_FLAGS.ENABLE_AI_SUGGESTIONS) {
    // Show AI suggestions
}
```

### 3. `src/app/routes.js`
**Purpose**: Route path constants

**Usage:**
```javascript
import { ROUTES } from "../app/routes";

// Instead of:
navigate("/dashboard")

// Do this:
navigate(ROUTES.DASHBOARD)
```

### 4. `src/app/navigationHelpers.js`
**Purpose**: Navigation utility functions

**Usage:**
```javascript
import { useThinkraftNavigation } from "../app/navigationHelpers";

const { goToDashboard, goBack } = useThinkraftNavigation();

// Instead of:
const navigate = useNavigate();
navigate("/dashboard");

// Do this:
goToDashboard();
```

## When to Create New Constants

Create constants for:
- ✅ UI text and labels
- ✅ CSS class names
- ✅ API endpoints and URLs
- ✅ Route paths
- ✅ Magic numbers (delays, timeouts, limits)
- ✅ Validation rules or regular expressions
- ✅ Feature flags
- ✅ Storage keys
- ✅ Error messages
- ✅ Status codes or states

Don't create constants for:
- ❌ Temporary/intermediate values
- ❌ Computed values that change based on state
- ❌ Single-use values that are self-explanatory

## Organization by Feature

Group related constants together:
```javascript
// ❌ Don't scatter values
export const PHASE_TITLE = "Phase";
export const QUESTION_LABEL = "Question";
export const PREVIOUS_BTN = "Previous";

// ✅ Do organize by feature
export const WORKSPACE_PAGE = {
    PROGRESS_LABEL: "Phase",
    PROGRESS_QUESTION: "Question",
    BUTTONS: {
        PREVIOUS: "Previous",
        NEXT: "Next",
        FINISH: "Finish",
    },
};
```

## Adding New Constants

1. **Identify** where the hardcoded value is located
2. **Categorize** - which config file should it go in?
3. **Group** related values together
4. **Import** the constant in your component
5. **Replace** the hardcoded value

**Example:**
```javascript
// Step 1: Found hardcoded error message in ErrorBoundary.jsx
// Step 2: Goes in constants.js (UI text)
// Step 3: Add to ERROR_MESSAGES object
// Step 4 & 5:
import { ERROR_MESSAGES } from "../config/constants";
<p>{ERROR_MESSAGES.UNEXPECTED_ERROR}</p>
```

## Environment-Specific Configuration

Use environment variables for sensitive data and environment-specific values:

```javascript
// config/environment.js
export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:3000",
    API_KEY: import.meta.env.VITE_API_KEY,
};
```

Set in `.env.local`:
```
VITE_API_URL=https://api.production.com
VITE_API_KEY=your_api_key_here
```

## Best Practices

1. **Use Descriptive Names**
   ```javascript
   ✅ TEXTAREA_ROWS: 4
   ❌ ROWS: 4
   ```

2. **Group Related Values**
   ```javascript
   ✅ BUTTONS: { PRIMARY: "...", SECONDARY: "..." }
   ❌ PRIMARY_BTN: "...", SECONDARY_BTN: "..."
   ```

3. **Add Comments for Complex Logic**
   ```javascript
   // Refresh token if expiring within 5 minutes
   TOKEN_REFRESH_THRESHOLD: 5 * 60 * 1000
   ```

4. **Export Only What's Needed**
   ```javascript
   ✅ export const LANDING_PAGE = { ... }
   ❌ export const LANDING_PAGE = { ... }
   ❌ export const CONFIG = { LANDING_PAGE, ... }
   ```

5. **Keep Values Simple and Reusable**
   ```javascript
   ✅ Can be used in multiple places
   ❌ Too specific to one component
   ```

## File Structure

```
src/
├── config/
│   ├── constants.js        # UI text, labels, CSS classes
│   └── environment.js      # API config, feature flags, storage keys
├── app/
│   ├── routes.js          # Route path constants
│   └── navigationHelpers.js # Navigation utilities
├── modules/
│   └── thinkraft/
│       ├── components/
│       ├── pages/
│       └── config/        # Feature-specific constants (optional)
└── ...
```

## Refactoring Checklist

- [ ] Search for hardcoded strings in components
- [ ] Group related values logically
- [ ] Add them to appropriate config file
- [ ] Import constants in component
- [ ] Replace hardcoded values
- [ ] Test that it still works
- [ ] Update this guide if adding new categories

## Examples

### ❌ Before (with hardcoding)
```jsx
export default function ThinkraftLanding() {
    return (
        <section className="thinkraft-hero">
            <h1>Thinkcraft</h1>
            <p>Craft your thinking. Own your idea.</p>
            <button className="btn-primary" onClick={() => navigate("/dashboard")}>
                Get Started
            </button>
        </section>
    );
}
```

### ✅ After (with constants)
```jsx
import { LANDING_PAGE, UI_CLASSES } from "../config/constants";
import { ROUTES } from "../app/routes";

export default function ThinkraftLanding() {
    const navigate = useNavigate();
    
    return (
        <section className={UI_CLASSES.SECTIONS.HERO}>
            <h1 className={UI_CLASSES.TITLES.HERO}>
                {LANDING_PAGE.HERO.TITLE}
            </h1>
            <p className={UI_CLASSES.TITLES.HERO_SUBTITLE}>
                {LANDING_PAGE.HERO.SUBTITLE}
            </p>
            <button className={UI_CLASSES.BUTTONS.PRIMARY} onClick={() => navigate(ROUTES.DASHBOARD)}>
                {LANDING_PAGE.HERO.CTA_TEXT}
            </button>
        </section>
    );
}
```

## Benefits

✅ **Easier to maintain** - Change text in one place
✅ **Easier to theme** - Modify CSS classes globally
✅ **Easier to test** - Mock configuration values
✅ **Easier to localize** - Extract all strings to config
✅ **Easier to onboard** - New developers know where to find values
✅ **Type-safe** (with TypeScript) - IDE autocomplete for all values
✅ **DRY principle** - No duplicate values across files
✅ **Scalability** - Grows with the project
