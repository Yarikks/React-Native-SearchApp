import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View>
      <SearchBar
        searchText={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSearchSubmit={() => console.log('submitted!')}
      />
      <Text>{searchText}</Text>
    </View>
  );
};

export default SearchScreen;
