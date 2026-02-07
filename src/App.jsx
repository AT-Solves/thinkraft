import React from "react";

/**
 * Thinkraft Global Application Shell
 *
 * Responsibilities:
 * - Provides global layout container
 * - Applies design system layout classes
 * - Hosts router content
 * - Future integration point for:
 *    - Auth Provider
 *    - Theme Provider
 *    - AI Context Provider
 *    - Session Provider
 */

export default function App({ children }) {

    return (

        <div className="app-shell">

            <div className="app-root">

                {children}

            </div>

        </div>

    );

}
