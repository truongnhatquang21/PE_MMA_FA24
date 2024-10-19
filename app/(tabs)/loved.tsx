import Loading from '@/components/ActivityIndicator';
import CardItem from '@/components/CardItem';
import { Item } from '@/types/items';
import {
  getItemFromAsyncStorage,
  removeListFromAsyncStorage,
} from '@/utils/asyncStorage';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {};

const ListItem = (props: Props) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['loved-list'],
    queryFn: getItemFromAsyncStorage,
  });

  const queryCLient = useQueryClient();
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const handleSelectItem = (item: Item) => {
    setSelectedItems((prev) => {
      if (prev.some((i) => i.id === item.id)) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  };
  const checkIsSelected = (item: Item) => {
    return selectedItems.some((i) => i.id === item.id);
  };

  const selectAll = () => {
    if (data) {
      setSelectedItems(data);
    }
  };

  const handleRemoveSelected = async () => {
    Alert.alert('Confirm', 'Are you sure you want to perform this action?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancelled'),
        style: 'destructive',
      },
      {
        text: 'OK',
        onPress: async () => {
          await removeListFromAsyncStorage(selectedItems);
          refetch();
          setSelectedItems([]);
          queryCLient.invalidateQueries({
            queryKey: ['isLiked'],
          });
        },
        style: 'default',
      },
    ]);
  };

  return (
    <View
      style={{
        width: '100%',
        padding: 20,
        gap: 10,
        flex: 1,
      }}
    >
      {selectedItems.length > 0 ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={handleRemoveSelected}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'white',
                padding: 10,
                backgroundColor: 'red',
                borderColor: 'white',
                borderRadius: 40,
              }}
            >
              Unlove selected({selectedItems.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedItems([]);
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'white',
                padding: 10,
                backgroundColor: 'red',
                borderColor: 'white',
                borderRadius: 40,
              }}
            >
              Unselect all
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: 'gray',
            }}
          >
            {selectedItems.length} Items
          </Text>
        </View>
      ) : (
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
            Loved Items
          </Text>
          <TouchableOpacity onPress={selectAll}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'white',
                padding: 10,
                backgroundColor: 'red',
                borderColor: 'white',
                borderRadius: 40,
              }}
            >
              Select all
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: 'gray',
            }}
          >
            {data?.length} Items
          </Text>
        </View>
      )}
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
          {data?.map((item: any) => {
            return (
              <CardItem
                key={item.id}
                item={item}
                canSelect
                handleSelect={handleSelectItem}
                iSelected={checkIsSelected(item)}
              />
            );
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
