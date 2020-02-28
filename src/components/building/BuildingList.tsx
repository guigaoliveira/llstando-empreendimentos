import React from 'react'
import styled from 'styled-components'
import { FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import { Icon, LikeButton } from '../ui'
import { Building, Address } from '../../typings/building'

type BuildingListProps = {
  items: Building[]
}

const formatAddress = (address: Address) =>
  [
    `${address.street_type} ${address.street}`,
    `${address.number} - ${address.area}`,
    `${address.city} - ${address.state}`,
  ].join(', ')

const formatRange = (min: number, max: number) => {
  return max === min ? min : `${min} - ${max}`
}

const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return formatter.format(price)
}

const BuildingList = ({ items }: BuildingListProps) => {
  return (
    <ListContainer>
      {items.map(
        ({
          id,
          name,
          min_price: minPrice,
          default_image: defaultImage,
          min_bedrooms: minBedrooms,
          max_bedrooms: maxBedrooms,
          min_bathrooms: minBathrooms,
          max_bathrooms: maxBathrooms,
          max_area: maxArea,
          min_parking: minParking,
          max_parking: maxParking,
          address,
        }) => {
          return (
            <ListItem key={id}>
              <ListImage src={defaultImage['520x280']} />
              <ListInfos>
                <ListPrice>{formatPrice(minPrice)}</ListPrice>
                <ListName>{name}</ListName>
                <ListAddress>{formatAddress(address)}</ListAddress>
                <ListDetails>
                  <div>
                    <Icon>
                      <FaRulerCombined size={16} />
                    </Icon>{' '}
                    {maxArea} m²
                  </div>
                  {!!minBedrooms && (
                    <div>
                      <Icon>
                        <FaBed size={16} />
                      </Icon>{' '}
                      {formatRange(minBedrooms, maxBedrooms)}
                    </div>
                  )}
                  {!!minBathrooms && (
                    <div>
                      <Icon>
                        <FaBath size={16} />
                      </Icon>{' '}
                      {formatRange(minBathrooms, maxBathrooms)}
                    </div>
                  )}
                  {!!minParking && (
                    <div>
                      <Icon>
                        <FaCar size={16} />
                      </Icon>{' '}
                      {formatRange(minParking, maxParking)}
                    </div>
                  )}
                </ListDetails>
                <LikeButton
                  liked={localStorage.getItem(id.toString()) === 'true'}
                  onToggle={state =>
                    state
                      ? localStorage.setItem(id.toString(), 'true')
                      : localStorage.removeItem(id.toString())
                  }
                  size={18}
                  color="red"
                />
              </ListInfos>
            </ListItem>
          )
        },
      )}
    </ListContainer>
  )
}

export default BuildingList

const ListContainer = styled.ul`
  display: grid;
  grid-gap: 12px;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`

const ListItem = styled.li`
  list-style: none;
  border-radius: 6px;
  background: #fff;
  padding: 12px;
`

const ListImage = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 6px;
`

const ListInfos = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-rows: max-content max-content max-content;
  margin-top: 10px;
`

const ListPrice = styled.div`
  font-size: 1.25rem;
`

const ListName = styled.strong`
  font-size: 1.125rem;
`

const ListAddress = styled.span`
  font-size: 1rem;
`

const ListDetails = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  font-size: 0.875rem;
  color: #616161;
`
