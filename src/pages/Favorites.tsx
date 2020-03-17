import * as React from 'react'
import { useCallback, useState } from 'react'
import Buildings from '../components/Building'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import { Building } from '../typings/building'
import { addFavorite, getFavorites, removeFavorite } from '../utils/favoritesHelpers'

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
