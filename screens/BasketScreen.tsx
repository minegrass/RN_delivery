import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentRestaurant } from "../features/RestaurantSlice";
import XIcon from "../icons/XIcon";
import {
  getBasket,
  getTotalPrice,
  removeFromBasket,
} from "../features/basketSlice";
import { CMS_DOMAIN } from "@env";
import { formatCurrency } from "react-native-format-currency";

type dishItem = {
  id: number;
  amount: number;
  attributes: { name: string; desc: string; price: number; imgUrl: string };
};

export default function BasketScreen() {
  const navigation = useNavigation();
  const currentRestaurant = useSelector(getCurrentRestaurant);
  const basket = useSelector(getBasket);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg text-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {currentRestaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            className="absolute top-5 right-5"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <XIcon width={35} height={35} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center py-2 px-4 space-x-4 bg-white my-5">
          <Image
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
            source={{ uri: "https://links.papareact.com/wru" }}
          />

          <Text className="flex-1">Deliver in 50-75min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB] px-2">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.values(basket).map((value) => {
            return (
              <View
                key={value.id}
                className="flex-row bg-white px-5 py-2 space-x-3 items-center"
              >
                <Text className="text-[#00CCBB]">{value.amount} x</Text>
                <Image
                  className="w-10 h-10 rounded-full"
                  source={{ uri: `${CMS_DOMAIN}${value.attributes.imgUrl}` }}
                />
                <Text className="flex-1">{value.attributes.name}</Text>
                <Text className="text-gray-600">
                  {
                    formatCurrency({
                      amount: value.attributes.price,
                      code: "MYR",
                    })[0]
                  }
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeFromBasket(value.id));
                  }}
                >
                  <Text className="text-[#00CCBB] text-xs">Remove</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View className="p-5 bg-white mt-5 space-y-4">
        {[
          ["Subtotal", totalPrice],
          ["Deliver Fee", 5.99],
          ["Total", Math.round((totalPrice + 5.99) * 100) / 100, "b"],
        ].map((item, index) => {
          return (
            <View key={index} className="flex-row justify-between">
              <Text className={`${item[2] || "text-gray-400"}`}>{item[0]}</Text>
              <Text className={`${item[2] ? "font-bold" : "text-gray-400"}`}>
                {
                  formatCurrency({
                    amount: item[1] as number,
                    code: "MYR",
                  })[0]
                }
              </Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        className="rounded-lg bg-[#00CCBB] m-4 p-4"
        onPress={() => {
          navigation.navigate("Preparing" as never);
        }}
      >
        <Text className="text-center text-white text-xl font-bold">
          Place Order
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
