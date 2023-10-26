import React, { useEffect, useState } from 'react'
import { getRestaurantList } from '../../api/restaurant'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Restaurant } from '../../api/restaurant/RestaurantType'
import SearchInput from '../../components/Input/SearchInput'
import { Controller, useForm } from 'react-hook-form'

const RestaurantListPage = () => {
  const navigate = useNavigate();
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);
  const [searchParams] = useSearchParams();
  const { control, handleSubmit } = useForm();
  
  const fetchRestaurants = async () => {
    const response = await getRestaurantList({
      name: searchParams.get('search') || ""
    })
    setRestaurantList(response)
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  const handleSubmitSearch = (data: any) => {
    navigate(`/restaurant/?search=${data.name}`)
    navigate(0)
  }

  return (
    <form className='max-w-5xl mx-auto' onSubmit={handleSubmit(handleSubmitSearch)}>
      <Controller
        name='name'
        control={control}
        render={({ field: { value, onChange } }) => (
          <SearchInput
            type='text'
            placeholder='Search by restaurant name'
            value={value}
            onChange={onChange}
          />
        )}
      />
      {
        restaurantList.map((restaurant) => (
          <div key={restaurant.restaurantId}>
            <h1>{restaurant.name}</h1>
          </div>
        ))
      }
    </form>
  )
}

export default RestaurantListPage