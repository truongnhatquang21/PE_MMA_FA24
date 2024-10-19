import { useQuery } from '@tanstack/react-query';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import CardItem from './CardItem';
import { getItemList } from '../apis/item';
import Loading from './ActivityIndicator';
import { useFocusEffect } from 'expo-router';
import { Item } from '@/types/items';
import { AxiosResponse } from 'axios';

type Props = {
  isLoading: boolean;
  data?: AxiosResponse<Item[]>;
};

const ListItem = ({ isLoading, data }: Props) => {
  return (
    <View
      style={{
        width: '100%',
        padding: 20,
        gap: 10,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          Highlights
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
          }}
        >
          {data?.data?.length} Items
        </Text>
      </View>
      {isLoading && <Loading />}
      {!isLoading && (
        <ScrollView
          style={styles.container}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          {data?.data?.map((item: any) => {
            return <CardItem key={item.id} item={item} />;
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
