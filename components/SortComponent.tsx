import { View, Text, Touchable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  sort: "asc" | "desc";
  setSort: () => void;
  label?: string;
};
const SortComponent = ({ sort, setSort, label = "Sorted" }: Props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "lightgrey",
        borderRadius: 5,
      }}
      onPress={() => {
        setSort();
      }}
    >
      <Text>{label}</Text>
      {sort === "asc" ? (
        <Ionicons name="arrow-up" size={30} />
      ) : (
        <Ionicons name="arrow-down" size={30} />
      )}
    </TouchableOpacity>
  );
};

export default SortComponent;
