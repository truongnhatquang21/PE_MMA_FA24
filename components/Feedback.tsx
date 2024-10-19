import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FeedBackItem from './FeedBackItem';
import { Link } from 'expo-router';

type Props = {};

const Feedback = (props: Props) => {
  return (
    <Link href={'/modal'} asChild>
      <TouchableOpacity
        style={{
          gap: 2,
          margin: 2,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          Feedback
        </Text>
        <FeedBackItem />
      </TouchableOpacity>
    </Link>
  );
};

export default Feedback;
