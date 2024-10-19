import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FeedBackItem from '@/components/FeedBackItem';

const modal = () => {
  return (
    <View
      style={{
        flex: 1,

        width: '100%',
        alignItems: 'stretch',
      }}
    >
      <FlatList
        data={new Array(20).fill(0)}
        renderItem={({ index }) => (
          <View
            style={{
              gap: 2,
              margin: 2,
              shadowColor: 'black',
              borderBlockColor: 'gray',
              borderWidth: 1,
              borderRadius: 20,
            }}
          >
            <FeedBackItem />
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default modal;

const styles = StyleSheet.create({});
