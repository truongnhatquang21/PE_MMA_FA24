import React, { FC, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  onRatingChange?: (rating: number) => void;
  intialRating?: number;
};

const RatingComponent: FC<Props> = ({ onRatingChange, intialRating = 3 }) => {
  const [rating, setRating] = useState(intialRating);

  const handleRatingPress = (index: number) => {
    setRating(index + 1);
    onRatingChange && onRatingChange(index + 1);
  };

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleRatingPress(index)}
          style={[styles.star, index < rating ? styles.activestar : null]}
        >
          <Ionicons
            name={'star'}
            color={rating > index ? '#fec76f' : 'gray'}
            size={24}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    marginHorizontal: 4,
    transform: [{ scale: 0.8 }],
  },
  activestar: {
    transform: [{ scale: 1.2 }],
  },
});

export default RatingComponent;
