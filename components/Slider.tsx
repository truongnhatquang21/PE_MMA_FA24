import { Image, View, StyleSheet, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { brandList } from '../constant';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
type Category = {
  brand: string;
  image: string;
};
const { width } = Dimensions.get('window');

export default function Slider() {
  const renderCategory = (item: Category) => (
    <Link
      asChild
      href={{
        pathname: '/search',
        params: {
          brand: item.brand,
        },
      }}
    >
      <TouchableOpacity style={styles.carouselItem}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.carouselImage}
        />
        <View style={styles.textOverlay}>
          <Text style={styles.carouselText}>{item.brand}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View
      style={{
        width: '100%',
        height: 70,
      }}
    >
      <Carousel
        mode='parallax'
        width={width}
        height={100}
        data={brandList}
        renderItem={({ item }) => renderCategory(item)}
        modeConfig={{
          snapDirection: 'right',
          stackInterval: 18,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselItem: {
    width: '95%',
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  textOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  carouselText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
