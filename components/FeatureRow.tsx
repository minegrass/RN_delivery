import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import RightArrowIcon from "../icons/rightArrowIcon";
import RestaurantCard from "./RestaurantCard";
import { CMS_DOMAIN } from "@env";
import { RestaurantSample } from "../apiDataSample";
export default function FeatureRow({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  const [restaurantData, setRestaurantData] = useState(RestaurantSample);

  useEffect(() => {
    fetch(`${CMS_DOMAIN}/api/featureds/${id}?populate=deep`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.data.attributes.restaurants.data);
        setRestaurantData(result.data.attributes.restaurants.data);
        // console.log(
        //   `${
        //     CMS_DOMAIN +
        //     result.data.attributes.restaurants.data[0].attributes.image.data
        //       .attributes.url
        //   }`
        // );
      });
  }, []);

  return (
    <View className="bg-white m-2 shadow rounded-md">
      <View className="mt-4 flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-lgs">{title}</Text>
        <RightArrowIcon width={25} height={25} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsVerticalScrollIndicator={false}
        className="pt-4"
      >
        {restaurantData.map((item) => {
          return (
            <RestaurantCard
              key={item.id}
              id={item.id}
              imgUrl={`${
                CMS_DOMAIN + item.attributes.image.data.attributes.url
              }`}
              title={item.attributes.name}
              rating={item.attributes.Rating}
              genre={item.attributes.type.data.attributes.type}
              address={item.attributes.address}
              short_description={item.attributes.short_description}
              dishes={item.attributes.dishes.data}
              long={item.attributes.long}
              lat={item.attributes.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
