import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import StarIcon from '../icons/StarIcon'
import LocationMarkerIcon from '../icons/LocationMarkerIcon'

type ResCardProps = { id: number, imgUrl: string, title: string, rating: number, genre: string, address: string, short_description: string, dishes: string, long: number, lat: number }

export default function RestaurantCard(
    { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }: ResCardProps
) {
    return (
        <TouchableOpacity className='bg-white mr-3 shadow'>
            <Image source={{ uri: imgUrl }} className="h-64 w-64 rounded-sm" />
            <View className='px-3 pb-4'>
                <Text className="font-bold text-lg pt-2">{title} </Text>

                <View className='flex-row items-center space-x-1'>
                    <StarIcon color="green" opacity={0.5} width={22} height={22} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-green-500'>{rating}</Text>  •  {genre}</Text>



                </View>
                <View className='flex-row space-x-1 items-center'>
                    <LocationMarkerIcon width={22} height={22} color='gray' opacity={0.4} />
                    <Text className='text-xs text-gray-500'>Nearby  •  {address}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}