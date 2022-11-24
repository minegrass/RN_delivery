import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import DownIcon from "../icons/chevronDown";
import UserIcon from "../icons/userIcon";
import AdjustmentIcon from "../icons/adjustmentIcon";
import SearchIcon from "../icons/searchIcon";
import Categories from "../components/categories";
import FeatureRow from "../components/FeatureRow";
import { CMS_DOMAIN } from "@env";
import { featuredSample } from "../apiDataSample";

export default function HomeScreen() {
  const [feautredData, setfeautredData] = useState(featuredSample);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    fetch(`${CMS_DOMAIN}/api/featureds?populate=*`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setfeautredData(result.data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row items-center space-x-2 pb-3 mx-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <DownIcon color="#00CCBB" />{" "}
          </Text>
        </View>
        <View className="bg-gray-200 rounded-full p-1">
          <UserIcon height={35} width={35} color="#00CCBB" />
        </View>
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1 rounded-full items-center">
          <SearchIcon height={20} width={20} color="#00CCBB" />
          <TextInput
            keyboardType="default"
            placeholder="Restaurants or cuisines"
          />
        </View>
        <AdjustmentIcon height={25} width={25} color="#00CCBB" />
      </View>
      <ScrollView className="bg-gray-100">
        <Categories />
        {feautredData.map((item) => {
          return (
            <FeatureRow
              key={item.id}
              id={`${item.id}`}
              title={item.attributes.name}
              description={item.attributes.short_description}
            />
          );
        })}
        <View className="pb-56"></View>
      </ScrollView>
    </SafeAreaView>
  );
}
