import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Item } from '../types/items';
import RatingComponent from './Rating';
import Ionicons from '@expo/vector-icons/Ionicons';
import LikeButton from './LikeButton';
import { Link } from 'expo-router';

type Props = {
  item: Item;
  iSelected?: boolean;
  canSelect?: boolean;
  handleSelect?: (item: Item) => void;
};
const styles = StyleSheet.create({
  card: {
    width: '48%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    gap: 10,
    position: 'relative',
  },
});
const CardItem = ({
  item,
  iSelected = false,
  canSelect = false,
  handleSelect,
}: Props) => {
  return (
    <Link
      href={`details/${item.id}` as any}
      asChild
      style={{
        width: '48%',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        gap: 10,
        position: 'relative',
        backgroundColor: iSelected ? 'orange' : '#fff',
      }}
    >
      <TouchableOpacity
        style={[styles.card, {}]}
        disabled={iSelected}
        onPress={() => {
          console.log('item', item);
        }}
      >
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 8,
            borderBottomWidth: 2,
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          {item.artName}
        </Text>
        <Text
          style={{
            fontSize: 12,
          }}
        >
          {item.description}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'orange',
          }}
        >
          Limited time deal: {item.limitedTimeDeal}%
        </Text>
        <View
          style={{
            marginTop: 'auto',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              borderRadius: 9999,
            }}
          >
            ${item.price}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'gray',
            }}
          >
            {item.brand}
          </Text>
        </View>
        <RatingComponent />
        {item.glassSurface && (
          <View
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: 'gray',
                gap: 2,
              }}
            >
              <Ionicons name={'checkmark-circle'} color={'green'} size={16} />
            </Text>

            <Text
              style={{
                fontSize: 8,
                color: 'gray',
              }}
            >
              Glassed
            </Text>
          </View>
        )}
        <View
          style={{
            position: 'absolute',
            top: 2,
            right: 2,
          }}
        >
          <LikeButton item={item} />
        </View>
        {canSelect && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Ionicons
              name={iSelected ? 'checkbox' : 'square-outline'}
              color={'black'}
              size={20}
              onPress={() => {
                handleSelect && handleSelect(item);
              }}
            />
          </View>
        )}
      </TouchableOpacity>
    </Link>
  );
};

export default CardItem;
