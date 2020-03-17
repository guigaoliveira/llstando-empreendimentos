import * as React from 'react'
import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Buildings from '../components/Building'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import LoadingSpinner from '../components/LoadingSpinner'
import Pagination from '../components/Pagination'
import { Building } from '../typings/building'
import { useFetch } from '../utils'
import { getTotalFavorites, addFavorite, removeFavorite } from '../utils/favoritesHelpers'

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

  const [favoriteTotal, setFavoriteTotal] = useState(getTotalFavorites())

  return (
    <MainContainer>
      <Header>
        Empreendimentos
        {favoriteTotal > 0 && (
          <FavoritesLink>
            <Link to="/favorites">Favoritos ({favoriteTotal})</Link>
          </FavoritesLink>
        )}
      </Header>
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}
      {isError && <div>Ops...houve algum erro ao tentar listar os empreendimentos :(</div>}
      {data?.buildings &&
        (data.buildings.length ? (
          <Buildings
            items={data.buildings}
            onToggleLike={(liked, buildingData) => {
              if (liked) addFavorite(buildingData)
              else removeFavorite(buildingData)
              return setFavoriteTotal(getTotalFavorites())
            }}
          />
        ) : (
          <div>Sem dados para exibir</div>
        ))}
      {data?.buildings && data.total_pages && (
        <Pagination totalPages={data.total_pages} onPageChanged={onPageChanged} />
      )}
    </MainContainer>
  )
}

export default Home

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

const FavoritesLink = styled.span`
  justify-self: flex-end;
`
