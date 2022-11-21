import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import CategoryCard from "./categoryCard";
import { CMS_DOMAIN } from "@env";
export default function categories() {
  const [categoriesData, setCategoriesData] = useState([
    {
      id: 1,
      attributes: {
        type: "test",
        Image: {
          data: [
            {
              attributes: { name: "testtt", url: "https://picsum.photos/200" },
            },
          ],
        },
      },
    },
    {
      id: 2,
      attributes: {
        type: "test",
        Image: {
          data: [
            {
              attributes: { name: "testtt", url: "https://picsum.photos/200" },
            },
          ],
        },
      },
    },
  ]);

  useLayoutEffect(() => {
    fetch(`${CMS_DOMAIN}/api/types?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoriesData(data.data);
      });
  }, []);

  return (
    <ScrollView
      className="flex-row bg-white-500"
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categoriesData.map((item) => {
        return (
          <CategoryCard
            key={item.id}
            imgUrl={`${CMS_DOMAIN}${item.attributes.Image.data[0].attributes.url}`}
            title={item.attributes.type}
          />
        );
      })}
    </ScrollView>
  );
}
