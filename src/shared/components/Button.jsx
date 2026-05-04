/**
 * Button
 *
 * Base reusable button component for Thinkraft.
 * Uses design system classes only.
 *
 * Supports variants:
 * - primary
 * - secondary
 *
 * Memoized to prevent unnecessary re-renders when parent updates.
 */

import { memo } from "react";

const Button = memo(function Button({
    children,
    onClick,
    variant = "primary",
    type = "button",
    disabled = false,
}) {
    const className = `btn btn-${variant}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
