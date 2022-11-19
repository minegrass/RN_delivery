import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './categoryCard'

export default function categories() {
    return (
        <ScrollView
            className="flex-row"
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test1" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test2" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test3" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="test4" />
        </ScrollView>
    )
}