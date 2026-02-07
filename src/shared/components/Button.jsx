/**
 * Button
 *
 * Base reusable button component for Thinkraft.
 * Uses design system classes only.
 *
 * Supports variants:
 * - primary
 * - secondary
 */

export default function Button({

    children,
    onClick,
    variant = "primary",
    type = "button",
    disabled = false

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

}
