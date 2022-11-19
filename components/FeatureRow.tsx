import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RightArrowIcon from '../icons/rightArrowIcon'
import RestaurantCard from './RestaurantCard'
export default function FeatureRow({ id, title, description }: { id: string, title: string, description: string }) {
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lgs'>{title}</Text>
                <RightArrowIcon width={25} height={25} color="#00CCBB" />
            </View>
            <Text className='text-xs text-gray-500 px-4'>{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,

                }}
                showsVerticalScrollIndicator={false}
                className="pt-4">
                <RestaurantCard
                    id={123} imgUrl="https://links.papareact.com/gn7" title="salmonshop" rating={3.2} genre="japanese" address="Tanjung Aru" short_description="only have salmon" dishes="salmon kan lao mee" long={100.22} lat={123.22} />
                <RestaurantCard
                    id={123} imgUrl="https://links.papareact.com/gn7" title="salmonshop" rating={3.2} genre="japanese" address="Tanjung Aru" short_description="only have salmon" dishes="salmon kan lao mee" long={100.22} lat={123.22} />
                <RestaurantCard
                    id={123} imgUrl="https://links.papareact.com/gn7" title="salmonshop" rating={3.2} genre="japanese" address="Tanjung Aru" short_description="only have salmon" dishes="salmon kan lao mee" long={100.22} lat={123.22} />

            </ScrollView>
        </View>
    )
}