import { useEffect, useState } from 'react'

export default function useFetch<T extends unknown>(
  url: string,
  options: RequestInit,
): [
  {
    data: T | undefined
    isError: boolean
    isLoading: boolean
  },
  React.Dispatch<React.SetStateAction<string>>,
] {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<T>()
  const [fetchOptions] = useState(options)
  const [fetchUrl, setFetchUrl] = useState(url)

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    async function fetchData() {
      setIsError(false)
      setIsLoading(true)
      try {
        const response = await fetch(fetchUrl, fetchOptions)
        const result: T = await response.json()
        if (!signal.aborted) setData(result)
      } catch (err) {
        if (!signal.aborted) setIsError(true)
      } finally {
        if (!signal.aborted) setIsLoading(false)
      }
    }

    fetchData()

    return () => {
      abortController.abort()
    }
  }, [fetchUrl, fetchOptions])

  return [{ data, isError, isLoading }, setFetchUrl]
}
