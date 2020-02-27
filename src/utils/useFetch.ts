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
    async function fetchData() {
      setIsError(false)
      setIsLoading(true)
      try {
        const response = await fetch(fetchUrl, fetchOptions)
        setIsLoading(false)
        const result: T = await response.json()
        setData(result)
      } catch (err) {
        setIsError(true)
      }
    }

    try {
      fetchData()
    } catch (err) {
      setIsError(true)
    }
  }, [fetchUrl, fetchOptions])

  return [{ data, isError, isLoading }, setFetchUrl]
}
