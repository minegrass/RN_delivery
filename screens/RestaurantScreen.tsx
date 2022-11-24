import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import LeftArrowIcon from "../icons/leftArrowIcon";
import StartIcon from "../icons/StarIcon";
import LocationMarkerIcon from "../icons/LocationMarkerIcon";
import NoteIcon from "../icons/noteIcon";
import RightArrowIcon from "../icons/rightArrowIcon";
import DishItem from "../components/DishItem";
import ItemBasket from "../components/itemBasket";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../features/RestaurantSlice";
import { getTotalBasketItem } from "../features/basketSlice";
type dish = {
  id: number;
  attributes: {
    name: string;
    short_description: string;
    price: number;
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
};

type restaurantData = {
  params: {
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: dish[];
    long: number;
    lat: number;
  };
};

export default function RestaurantScreen() {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute() as restaurantData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, []);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const { height, width } = useWindowDimensions();
  const totalBasketItems = useSelector(getTotalBasketItem);
  return (
    <>
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imgUrl }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            className="absolute top-10 left-4 bg-gray-100 p-2 rounded-full"
            onPress={() => {
              navigation.navigate("Home" as never);
            }}
          >
            <LeftArrowIcon width={20} height={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4 flex-shrink ">
            <Text className="text-3xl font-bold">{title}</Text>
            <View
              className={`${
                width <= 450 ? "flex-col space-y-2" : "flex-row space-x-2"
              } my-1`}
            >
              <View className="flex-row space-x-1 items-center">
                <StartIcon height={20} width={20} color="green" opacity={0.5} />
                <Text className="text-gray-500">
                  <Text className="text-green-500">{rating}</Text> • {genre}
                </Text>
              </View>
              <View className="flex-row space-x-1 items-center">
                <LocationMarkerIcon
                  height={22}
                  width={22}
                  color="gray"
                  opacity={0.4}
                />
                <Text className="text-gray-500">Nearby • {address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <NoteIcon height={25} width={25} color="black" opacity={0.6} />
            <Text className="font-bold pl-2 flex-1">
              Order note for merchant
            </Text>

            <RightArrowIcon
              height={25}
              width={25}
              color="black"
              opacity={0.6}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-bold text-xl m-4 mb-3">Menu</Text>
          <View className="pb-36">
            {dishes.map((dish) => {
              return (
                <DishItem
                  key={dish.id}
                  id={dish.id}
                  name={dish.attributes.name}
                  desc={dish.attributes.short_description}
                  price={dish.attributes.price}
                  imgUrl={dish.attributes.image.data.attributes.url}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      {totalBasketItems > 0 && <ItemBasket />}
    </>
  );
}
