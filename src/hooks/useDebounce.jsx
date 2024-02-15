import React, { useEffect, useRef } from 'react'

const useDebounce = (callback, delay) => {
    const ref = useRef(null)

    useEffect(() => {
        return () => {
            if (ref.current) {
                clearTimeout(ref.current)
            }
        }
    }, [])

    const debounceCB = (value) => {
        if (ref.current) {
            clearTimeout(ref.current)
        }

        ref.current = setTimeout(() => callback(value), delay)
    }
    return debounceCB
}

export default useDebounce