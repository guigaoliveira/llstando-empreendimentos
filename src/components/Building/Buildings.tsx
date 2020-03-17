import React from 'react'
import styled from 'styled-components'
import { FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import Icon from '../Icon'
import LikeButton from '../LikeButton'
import { Building } from '../../typings/building'
import { getFavorite } from '../../utils/favoritesHelpers'
import { formatAddress, formatPrice, formatRange } from '../../utils'

type BuildingProps = {
  items: Building[]
  onToggleLike: (state: boolean, item: Building) => void
}

const Buildings = ({ items, onToggleLike }: BuildingProps) => {
  return (
    <Container>
      {items.map(item => {
        const {
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
        } = item

        return (
          <Item key={id}>
            <Image src={defaultImage && defaultImage['520x280']} />
            <Infos>
              <Price>{formatPrice(minPrice)}</Price>
              <Name>{name}</Name>
              <StyledAddress>{formatAddress(address)}</StyledAddress>
              <Details>
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
              </Details>
              <LikeButton
                liked={!!getFavorite(id)}
                onToggle={state => onToggleLike(state, item)}
                size={18}
                color="red"
              />
            </Infos>
          </Item>
        )
      })}
    </Container>
  )
}

export default Buildings

const Container = styled.ul`
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

const Item = styled.li`
  list-style: none;
  border-radius: 6px;
  background: ${props => props.theme.colors.white};
  padding: 12px;
`

const Image = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 6px;
  background: #eceff1;
`

const Infos = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-rows: max-content max-content max-content;
  margin-top: 10px;
`

const Price = styled.div`
  font-size: 1.25rem;
`

const Name = styled.strong`
  font-size: 1.125rem;
`

const StyledAddress = styled.span`
  font-size: 0.95rem;
`

const Details = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  font-size: 0.875rem;
  color: #616161;
`
