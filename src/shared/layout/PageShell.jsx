/**
 * PageShell
 *
 * Global page layout for Thinkraft.
 * Provides header and content container.
 * Uses design system layout classes only.
 */

export default function PageShell({ children }) {

    return (

        <div className="page-shell">

            <header className="page-shell-header">

                <div className="page-shell-header-inner">

                    <div className="page-shell-brand">

                        <span className="page-shell-brand-title">
                            Thinkraft
                        </span>

                        <span className="page-shell-brand-subtitle">
                            by AchieverThoughts
                        </span>

                    </div>

                    <div className="page-shell-actions">

                        <button className="btn-secondary">
                            Login
                        </button>

                        <button className="btn-primary">
                            Sign Up
                        </button>

                    </div>

                </div>

            </header>

            <main className="page-shell-content">

                {children}

            </main>

        </div>

    );

}
