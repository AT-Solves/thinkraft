/**
 * Card
 *
 * Base container component for Thinkraft.
 * Uses design system class "card".
 *
 * This ensures:
 * - No hardcoded styling
 * - Consistent UI across Thinkraft
 * - Easy future design changes
 *
 * Memoized to prevent unnecessary re-renders.
 */

import { memo } from "react";

const Card = memo(function Card({ children, className = "", onClick }) {
    return (
        <div className={`card ${className}`} onClick={onClick}>
            {children}
        </div>
    );
});

Card.displayName = "Card";

export default Card;
