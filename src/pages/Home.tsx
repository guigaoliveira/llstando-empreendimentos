import * as React from 'react'
import { useCallback } from 'react'
import styled from 'styled-components'
import { useFetch } from '../utils'
import { Building } from '../typings/building'
import { Pagination, LoadingSpinner } from '../components/ui'
import { BuildingList } from '../components/building'

type ResponseData = {
  buildings?: Building[]
  total_pages: number
}

const BUILDINGS_URL = `${process.env.REACT_APP_ORULO_URL}/api/v2/buildings?results_per_page=6`

const Home = () => {
  const [{ data, isLoading, isError }, setFetchUrl] = useFetch<ResponseData>(BUILDINGS_URL, {
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_ORULO_TOKEN}`,
    }),
  })

  const onPageChanged = useCallback(page => setFetchUrl(`${BUILDINGS_URL}&page=${page + 1}`), [
    setFetchUrl,
  ])

  return (
    <Container>
      <Title>Empreendimentos</Title>
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}
      {isError && <div>Ops...houve algum erro ao tentar listar os empreendimentos :(</div>}
      {data && data.buildings && <BuildingList items={data.buildings} />}
      {data && data.total_pages && (
        <Pagination totalPages={data.total_pages} onPageChanged={onPageChanged} />
      )}
    </Container>
  )
}

export default Home

const Title = styled.h2`
  margin: 0;
  padding: 0 0 15px 0;
`

const Container = styled.div`
  padding: 16px 28px;
  margin-left: auto;
  margin-right: auto;
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`
