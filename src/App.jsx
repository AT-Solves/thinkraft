import { memo } from "react";

/**
 * Thinkraft Global Application Shell
 *
 * Provides global layout container and future integration points for:
 * - Auth Provider
 * - Theme Provider
 * - Session Provider
 *
 * Memoized to prevent unnecessary re-renders.
 */

const App = memo(function App({ children }) {
    return (
        <div className="app-shell">
            <div className="app-root">{children}</div>
        </div>
    );
});

App.displayName = "App";

export default App;
