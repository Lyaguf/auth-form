/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"


/**
 * Custom hook like a useMutation hook from react-query hook.
 * @param {Function} requestCall Request function.
 */
export const useAsyncData = <TCallType extends (...smth: any) => Promise<Awaited<ReturnType<TCallType>>>>(requestCall: TCallType) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Awaited<ReturnType<TCallType>>>();
    const sendFetch = async (...args: any) => {
        setIsLoading(true);
        setData(await requestCall(...args));
        setIsLoading(false);
    }

    return { isLoading, data, sendFetch }
}