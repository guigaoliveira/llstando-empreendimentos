import { Address } from '../typings/building'

const formatAddress = (address?: Address) =>
  address
    ? [
        `${address.street_type} ${address.street}`,
        `${address.number} - ${address.area}`,
        `${address.city} - ${address.state}`,
      ].join(', ')
    : '-'

export default formatAddress
