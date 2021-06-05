
import { useState, useEffect } from 'react'


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isErr, setIsError] = useState(false)

    useEffect(() => {

        const abortController = new AbortController()
        setTimeout(() => {
            fetch(url, { signal:abortController.signal })
            .then(
                res => {
                    // console.log(res)
                    if (!res.ok) {
                        setIsError(true)
                        setIsLoading(false)
                        throw Error('could not catch data for the resource');
                    }
                    return res.json()
                })
            .then(
                data => {
                    setData(data)
                    setIsLoading(false)
                    setIsError(false)
                }
            )
            .catch(
                err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')    // catches abort error and step over the block to return
                    } else {
                        console.log(err)
                        setIsError(true)
                        setIsLoading(false)
                    }
                }
            )
        }, 1000)
        return () => abortController.abort()    // returns abort in case of abort
        }, [url])
    return { data, isLoading, isErr }
}

export default useFetch