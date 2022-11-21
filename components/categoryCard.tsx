import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function categoryCard({
  imgUrl,
  title,
}: {
  imgUrl: string;
  title: string;
}) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="w-20 h-20 rounded" />
      <View className="absolute bottom-1 left-1 bg-green-500 rounded-md p-0.5">
        <Text className=" text-white">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
