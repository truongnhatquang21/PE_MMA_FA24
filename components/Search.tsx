import { Link } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {};

const Search = (props: Props) => {
  const [search, setSearch] = React.useState('');

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,
        height: 50,
        marginBottom: 10,
      }}
    >
      <TextInput
        value={search}
        onChangeText={(text) => {
          setSearch(text);
        }}
        style={{
          flex: 1,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10,
          borderRadius: 20,
        }}
        placeholder='Search...'
      />
      <Link
        href={{
          pathname: '/search',
          params: {
            search,
          },
        }}
        asChild
      >
        <TouchableOpacity
          disabled={!search.length}
          style={{
            backgroundColor: 'orange',
            padding: 10,
            borderRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Search;
