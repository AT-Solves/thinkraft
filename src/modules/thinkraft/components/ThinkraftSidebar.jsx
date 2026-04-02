import { SIDEBAR, UI_CLASSES } from "../../../config/constants";

/**
 * ThinkraftSidebar - Navigation phases sidebar
 */
export default function ThinkraftSidebar() {
    return (
        <aside className={UI_CLASSES.SIDEBAR.WRAPPER}>
            <div className={UI_CLASSES.SIDEBAR.BRAND}>
                {SIDEBAR.BRAND}
            </div>

            <nav className={UI_CLASSES.SIDEBAR.NAV}>
                {SIDEBAR.PHASES.map((phase) => (
                    <div
                        key={phase.label}
                        className={UI_CLASSES.SIDEBAR.ITEM}
                    >
                        {phase.label}: {phase.title}
                    </div>
                ))}
            </nav>
        </aside>
    );
}
