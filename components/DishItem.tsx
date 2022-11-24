import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { formatCurrency } from "react-native-format-currency";
import { CMS_DOMAIN } from "@env";
import MinusSolidIcon from "../icons/MinusSolidIcon";
import PlusSolidIcon from "../icons/PlusSolidIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  getOneBasketItem,
  readBasket,
  removeFromBasket,
} from "../features/basketSlice";
import { RootState } from "../store";

type dishProps = {
  id: number;
  name: string;
  desc: string;
  price: number;
  imgUrl: string;
};

export default function DishItem({ id, name, desc, price, imgUrl }: dishProps) {
  const [isPressed, setIsPressed] = useState(false);
  const item = useSelector((state: RootState) => getOneBasketItem(state, id));
  const dispatch = useDispatch();
  const plusHandler = () => {
    if (item) {
      dispatch(
        addToBasket({
          id: id,
          amount: item.amount + 1,
          attributes: { name, desc, price, imgUrl },
        })
      );
    } else {
      dispatch(
        addToBasket({
          id: id,
          amount: 1,
          attributes: { name, desc, price, imgUrl },
        })
      );
    }
  };

  const minusHandler = () => {
    // console.log("minus");
    if (!item?.amount || item?.amount === 0) return;
    dispatch(removeFromBasket(id));
  };

  return (
    <View className="mx-2 mb-0.5 rounded-md px-5 py-2 bg-white border-gray-200 border shadow">
      <TouchableOpacity
        className="flex-row "
        onPress={() => {
          setIsPressed((prev) => !prev);
        }}
      >
        <View className="flex-1">
          <Text className="text-lg">{name}</Text>
          <Text className="text-gray-400">{desc}</Text>
          <Text className="text-gray-400 mt-2">
            {formatCurrency({ amount: price, code: "MYR" })[0]}
          </Text>
        </View>
        <Image
          className="w-20 h-20 border-2 border-blue-800 rounded-md"
          source={{ uri: `${CMS_DOMAIN}${imgUrl}` }}
        />
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white">
          <View className="flex-row items-center space-x-3">
            <TouchableOpacity
              disabled={item ? false : true}
              onPress={() => {
                minusHandler();
              }}
            >
              <MinusSolidIcon
                width={40}
                height={40}
                color={item ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text className="text-xl">{item?.amount || 0}</Text>
            <TouchableOpacity
              onPress={() => {
                plusHandler();
              }}
            >
              <PlusSolidIcon width={40} height={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
