import { getItemList } from '@/apis/item';
import ListItem from '@/components/ListItem';
import Search from '@/components/Search';
import Slider from '@/components/Slider';
import { useQuery } from '@tanstack/react-query';
import { View } from 'react-native';

export default function Index() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['list'],
    queryFn: getItemList,
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
      }}
    >
      <Search />
      <Slider />
      <ListItem isLoading={isLoading} data={data} />
    </View>
  );
}
