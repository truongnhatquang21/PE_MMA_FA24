import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FeedBackItem() {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        gap: 2,
      }}
    >
      <Image
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
        style={{ width: 50, height: 50, borderRadius: 9999 }}
      />
      <View>
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >
          Pepe Silvia
        </Text>
        <Text
          style={{
            fontSize: 8,
          }}
        >
          3 days ago
        </Text>
      </View>
      <View
        style={{
          gap: 2,
          margin: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
          }}
        >
          ⭐️⭐️⭐️⭐️⭐️
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
          }}
        >
          Great product
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
