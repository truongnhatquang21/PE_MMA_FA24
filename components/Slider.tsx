import { Image, View, StyleSheet, Dimensions, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { getItemList } from "@/apis/item";
import { useMemo } from "react";
import { brandList } from "@/constant";
import Loading from "./ActivityIndicator";
type Category = {
  brand: string;
  image: string;
};
const { width } = Dimensions.get("window");

export default function Slider() {
  const { data: list, isLoading } = useQuery({
    queryKey: ["list"],
    queryFn: getItemList,
  });

  const brandList = useMemo(() => {
    if (list?.data) {
      return list.data.map((item) => ({
        brand: item.brand,
        image:
          item.image ||
          "https://www.google.com/url?sa=i&url=https%3A%2F%2F4kwallpapers.com%2Fabstract%2Fdark-background-abstract-background-network-3d-background-8324.html&psig=AOvVaw1bjruwUaa3Pox4N_qmHqUx&ust=1730647868792000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCUj_j7vYkDFQAAAAAdAAAAABAJ",
      }));
    }
    return [];
  }, [list?.data?.length]);
  console.log(list?.data, "Sadfsda");

  const renderCategory = (item: Category) => (
    <Link
      asChild
      href={{
        pathname: "/search",
        params: {
          brand: item.brand,
        },
      }}
    >
      <TouchableOpacity style={styles.carouselItem}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.carouselImage}
        />
        <View style={styles.textOverlay}>
          <Text style={styles.carouselText}>{item.brand}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View
      style={{
        width: "100%",
        height: 70,
      }}
    >
      {isLoading && <Loading />}
      {!isLoading && !!brandList?.length && (
        <Carousel
          mode="parallax"
          width={width}
          height={100}
          data={brandList}
          renderItem={({ item }) => renderCategory(item)}
          modeConfig={{
            snapDirection: "right",
            stackInterval: 18,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  carouselItem: {
    width: "95%",
    height: 80,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  textOverlay: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  carouselText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
