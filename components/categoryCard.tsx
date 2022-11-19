import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'



export default function categoryCard({ imgUrl, title }: {
    imgUrl: string,
    title: string,
}) {
    return (

        <TouchableOpacity className='relative mr-2'>
            <Image source={{ uri: imgUrl }} className="w-20 h-20 rounded" />
            <Text className='absolute bottom-1 left-1 text-white'>{title}</Text>
        </TouchableOpacity>

    )
}