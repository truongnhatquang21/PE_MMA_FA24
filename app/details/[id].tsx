import { getItem } from "@/apis/item";
import Loading from "@/components/ActivityIndicator";
import Feedback from "@/components/Feedback";
import LikeButton from "@/components/LikeButton";
import RatingComponent from "@/components/Rating";
import { Item } from "@/types/items";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, usePathname, useSegments } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  route: any;
};

const Details = () => {
  const params = useLocalSearchParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["item", params?.id],
    queryFn: () => getItem(params?.id as string),
  });
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      {isLoading && <Loading />}
      {!isLoading && (
        <View
          style={{
            padding: 20,
            gap: 10,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
            }}
          >
            {data?.data?.artName}
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              position: "relative",
            }}
          >
            <Image
              source={{ uri: data?.data?.image }}
              style={{
                width: "100%",
                height: 300,
                borderRadius: 8,
                shadowColor: "#000",
                shadowOffset: { width: 8, height: 2 },
              }}
            />
            {data?.data.glassSurface && (
              <View
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color: "gray",
                    gap: 2,
                  }}
                >
                  <Ionicons
                    name={"checkmark-circle"}
                    color={"green"}
                    size={50}
                  />
                </Text>

                <Text
                  style={{
                    color: "gray",
                  }}
                >
                  Glassed
                </Text>
              </View>
            )}
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <RatingComponent />
            <LikeButton item={data?.data as Item} />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
            }}
          >
            {data?.data?.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                borderRadius: 9999,
              }}
            >
              ${data?.data?.price}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "gray",
              }}
            >
              {data?.data?.brand}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              Limited time deal:
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "gray",
              }}
            >
              {data?.data?.limitedTimeDeal}%
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              borderTopColor: "gray",
              borderTopWidth: 2,
            }}
          ></View>
        </View>
      )}
      <View
        style={{
          padding: 10,
        }}
      >
        <Feedback />
      </View>
    </ScrollView>
  );
};

export default Details;
