import React from 'react'
import MapComponent from '../../components/map/MapComponent'

const MapPage = () => {
  return (
    <MapComponent coordinates={[
        {
            name: 'McDonalds',
            latitude: 43.70,
            longitude: -79.42,
        }
        ]} />
  )
}

export default MapPage