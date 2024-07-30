/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

/**
 * Custom hook like a useMutation hook from react-query hook.
 * @param {Function} requestCall Request function.
 */
export const useAsyncData = <TCallType extends (...smth: any) => Promise<Awaited<ReturnType<TCallType>>>, TError = any>(requestCall: TCallType) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Awaited<ReturnType<TCallType>>>();
    const [error, setError] = useState<TError>();
    const sendFetch = async (...args: any) => {
        setIsLoading(true);
        try {
            setData(await requestCall(...args));
        } catch (err) {
            setError(err as TError);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, data, sendFetch, error }
}