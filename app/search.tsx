import { filterByBrand, searchItem } from '@/apis/item';
import Loading from '@/components/ActivityIndicator';
import ListItem from '@/components/ListItem';
import { Item } from '@/types/items';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

type Props = {};

const search = (props: Props) => {
  const params = useLocalSearchParams();
  const search = params.search;
  const catogery = params.brand;
  const { data, isLoading, error } = useQuery({
    queryKey: ['search', search],
    queryFn: () => searchItem(search as string),
    enabled: search?.length > 0,
  });
  const {
    data: catogeryData,
    isLoading: catogeryIsLoading,
    error: catogeryError,
  } = useQuery({
    queryKey: ['category', catogery],
    queryFn: () => filterByBrand(catogery as string),
    enabled: catogery?.length > 0,
  });
  console.log('search', search, error);

  const dataRes = search ? data : catogeryData;
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>
        Search Results for "{search || catogery}"
      </Text>
      {isLoading || catogeryIsLoading ? <Loading /> : <View></View>}
      <ListItem isLoading={isLoading || catogeryIsLoading} data={dataRes} />
    </View>
  );
};

export default search;
