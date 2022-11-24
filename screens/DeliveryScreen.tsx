import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import XoutlineIcon from "../icons/XOutlineIcon";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { getCurrentRestaurant } from "../features/RestaurantSlice";
import MapView, { Marker } from "react-native-maps";

export default function DeliveryScreen() {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();
  const currentRestaurant = useSelector(getCurrentRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home" as never);
            }}
          >
            <XoutlineIcon color="white" height={30} width={30} />
          </TouchableOpacity>
          <Text className="text-white font-light text-lg">Order Help</Text>
        </View>

        <View className="bg-white p-5 rounded-md shadow-md my-2 mx-5 z-50 flex-row justify-center ">
          <View className="space-y-2 flex-col">
            <Text className="text-gray-400">Estimated Arrival</Text>

            <Text className="text-3xl">45-55 Minutes</Text>
            <Progress.Bar color="#00CCBB" indeterminate={true} />
            <View className={` max-w-[${width - 260}]`}>
              <Text className={`text-gray-500 mt-3`}>
                Your order at {currentRestaurant.title} {width - 250} is being
                prepared
              </Text>
            </View>
          </View>
          <Image
            className="w-20 h-20"
            source={{ uri: "https://links.papareact.com/fls" }}
          />
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: currentRestaurant.lat,
          longitude: currentRestaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: currentRestaurant.lat,
            longitude: currentRestaurant.long,
          }}
          title={currentRestaurant.title}
          description={currentRestaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row justify-center items-center space-x-5 pb-5">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View>
          <Text className="text-lg">Tomato Wilbur</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
