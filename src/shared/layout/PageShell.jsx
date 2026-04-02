import {
    PAGE_SHELL,
    UI_CLASSES,
    BUTTON_TEXTS,
} from "../../config/constants";

/**
 * PageShell
 * Global page layout for Thinkraft.
 */
export default function PageShell({ children }) {
    return (
        <div className={UI_CLASSES.LAYOUT.PAGE_SHELL}>
            <header className={UI_CLASSES.LAYOUT.PAGE_SHELL_HEADER}>
                <div className={UI_CLASSES.LAYOUT.PAGE_SHELL_HEADER_INNER}>
                    <div className={UI_CLASSES.LAYOUT.PAGE_SHELL_BRAND}>
                        <span
                            className={
                                UI_CLASSES.LAYOUT.PAGE_SHELL_BRAND_TITLE
                            }
                        >
                            {PAGE_SHELL.BRAND_TITLE}
                        </span>

                        <span
                            className={
                                UI_CLASSES.LAYOUT.PAGE_SHELL_BRAND_SUBTITLE
                            }
                        >
                            {PAGE_SHELL.BRAND_SUBTITLE}
                        </span>
                    </div>

                    <div className={UI_CLASSES.LAYOUT.PAGE_SHELL_ACTIONS}>
                        <button className={UI_CLASSES.BUTTONS.SECONDARY}>
                            {PAGE_SHELL.AUTH.LOGIN}
                        </button>

                        <button className={UI_CLASSES.BUTTONS.PRIMARY}>
                            {PAGE_SHELL.AUTH.SIGNUP}
                        </button>
                    </div>
                </div>
            </header>

            <main className={UI_CLASSES.LAYOUT.PAGE_SHELL_CONTENT}>
                {children}
            </main>
        </div>
    );
}
