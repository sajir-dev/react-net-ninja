
import { useState, useEffect } from 'react'


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isErr, setIsError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
                    console.log(err)
                    setIsError(true)
                    setIsLoading(false)
                }
            )
        }, 1000)
        }, [url])
    return { data, isLoading, isErr }
}

export default useFetch