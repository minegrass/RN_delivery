import { View, Text, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import CategoryCard from './categoryCard'
import { CMS_DOMAIN } from '@env'
export default function categories() {

    const [categoriesData, setCategoriesData] = useState([])

    useLayoutEffect(() => {
        fetch(`${CMS_DOMAIN}/api`).then((res) => res.json()).then((data) => {
            console.log(data);
        })
    }, [])


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