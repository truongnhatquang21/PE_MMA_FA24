import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getItemList } from "@/apis/item";
import ListItem from "@/components/ListItem";
import { AxiosResponse } from "axios";
import { Item } from "@/types/items";
import SortComponent from "@/components/SortComponent";

const special = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["list"],
    queryFn: getItemList,
  });
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  const specialItems = useMemo(() => {
    if (data?.data) {
      const newData = data.data.filter((item) => item.glassSurface);
      return sort === "asc"
        ? newData.sort((a, b) => a.limitedTimeDeal - b.limitedTimeDeal)
        : newData.sort((a, b) => b.limitedTimeDeal - a.limitedTimeDeal);
    }
    return [];
  }, [data, sort]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
      }}
    >
      <SortComponent
        label="Sorted by time"
        sort={sort}
        setSort={() => {
          setSort(sort === "asc" ? "desc" : "asc");
        }}
      />

      <ListItem
        isLoading={isLoading}
        data={
          {
            data: specialItems,
          } as AxiosResponse<Item[]>
        }
      />
    </View>
  );
};

export default special;
