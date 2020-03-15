import * as React from 'react'
import { useState, useCallback } from 'react'
import { Buildings } from '../components/building'
import { Header, MainContainer } from '../components/ui'
import { getFavorites, addFavorite, removeFavorite } from '../utils/favoritesHelpers'
import { Building } from '../typings/building'

const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState(getFavorites())

  const whenRemoveFavorite = useCallback((buidlingToremove: Building) => {
    removeFavorite(buidlingToremove)
    setFavoriteItems(buildings => buildings.filter(building => building.id !== buidlingToremove.id))
  }, [])

  return (
    <MainContainer>
      <Header>Empreendimentos favoritos</Header>
      <Buildings
        items={favoriteItems}
        onToggleLike={(liked, buildingData) =>
          liked ? addFavorite(buildingData) : whenRemoveFavorite(buildingData)
        }
      />
    </MainContainer>
  )
}

export default Favorites
