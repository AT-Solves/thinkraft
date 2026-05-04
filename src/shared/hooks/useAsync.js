import { useState, useEffect, useCallback } from "react";

/**
 * useAsync
 * Handles async operations with loading, error, and data states
 *
 * @param {function} asyncFunction - Async function to call
 * @param {boolean} immediate - Whether to call immediately (default: true)
 * @param {array} dependencies - Dependency array for re-running effect
 * @returns {object} - { status, data, error, execute }
 *
 * @example
 * const { status, data, error } = useAsync(fetchData, true, []);
 */
export function useAsync(asyncFunction, immediate = true, dependencies = []) {
    const [status, setStatus] = useState("idle");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const execute = useCallback(async () => {
        setStatus("pending");
        setData(null);
        setError(null);

        try {
            const response = await asyncFunction();
            setData(response);
            setStatus("success");
            return response;
        } catch (error) {
            setError(error);
            setStatus("error");
        }
    }, [asyncFunction]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return { status, data, error, execute };
}
