// Dropdown.js
import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Touchable,
  ViewBase,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      title: 'Home',
      href: '/(tabs)/',
    },
    {
      title: 'Loved',
      href: '/loved',
    },
  ];
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
      }}
    >
      <Link href={'/loved'}>
        <Ionicons name='heart' color={'red'} size={23} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  dropdown: {
    zIndex: 1,
    top: 28,
    right: 0,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: 200,
    pointerEvents: 'auto',
  },

  item: {
    padding: 10,
    zIndex: 1,
  },
  itemText: {
    padding: 10,
    fontSize: 16,
  },
});

export default Dropdown;
