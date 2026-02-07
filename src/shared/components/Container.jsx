/**
 * Container
 *
 * Provides consistent page width and spacing.
 * Uses design system class "page-container".
 *
 * This ensures:
 * - No hardcoded styling
 * - Consistent layout across Thinkraft
 * - Centralized control via design system
 */

export default function Container({

    children,
    className = ""

}) {

    return (

        <div className={`page-container ${className}`}>

            {children}

        </div>

    );

}
