import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalBasketItem, getTotalPrice } from "../features/basketSlice";
import { formatCurrency } from "react-native-format-currency";
import { useNavigation } from "@react-navigation/native";
import { getCurrentRestaurant } from "../features/RestaurantSlice";
export default function itemBasket() {
  const totalBasketItem = useSelector(getTotalBasketItem);
  const totalBasketPrice = useSelector(getTotalPrice);
  const navigation = useNavigation();

  return (
    <View className="absolute z-50 bottom-10 w-full">
      <TouchableOpacity
        className="flex-row bg-[#00CCBB] mx-5 p-2 rounded-lg items-center justify-evenly"
        onPress={() => {
          navigation.navigate("Basket" as never);
        }}
      >
        <View className="bg-[#01A296] px-2 py-1 rounded-sm">
          <Text className="text-white font-extrabold text-lg ">
            {totalBasketItem}
          </Text>
        </View>
        <Text className="text-white font-extrabold text-lg ">View Basket</Text>
        <Text className="text-white font-extrabold text-lg ">
          {formatCurrency({ amount: totalBasketPrice, code: "MYR" })[0]}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
