import React, { FC } from 'react';
import { Item } from '../types/items';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  isExistItemInAsyncStorage,
  toggleItemToAsyncStorage,
} from '../utils/asyncStorage';
import { Alert } from 'react-native';

type Props = {
  item: Item;
};

const LikeButton: FC<Props> = ({ item }) => {
  const { data, refetch } = useQuery({
    queryKey: ['isLiked', item?.id],
    queryFn: () => isExistItemInAsyncStorage(item?.id),
  });
  const queryClient = useQueryClient();
  return (
    <Ionicons
      name={data ? 'heart' : 'heart-outline'}
      color={'red'}
      size={30}
      onPress={async () => {
        Alert.alert(
          'Confirm',
          'Are you sure you want to perform this action?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancelled'),
              style: 'destructive',
            },
            {
              text: 'OK',
              onPress: async () => {
                await toggleItemToAsyncStorage(item);
                refetch();
                queryClient.invalidateQueries({
                  queryKey: ['loved-list'],
                });
              },
              style: 'default',
            },
          ]
        );
      }}
    />
  );
};

export default LikeButton;
