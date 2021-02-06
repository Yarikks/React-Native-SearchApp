import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ searchText, onChangeText, onSearchSubmit }) => (
  <View style={styles.container}>
    <AntDesign style={styles.icon} name="search1" size={28} color="black" />
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      placeholder="Search..."
      value={searchText}
      onChangeText={onChangeText}
      onEndEditing={onSearchSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E5E4E4',
    height: 48,
    borderRadius: 8,
    margin: 20,
  },
  icon: {
    marginHorizontal: 12,
    alignSelf: 'center',
  },
  input: {
    fontSize: 20,
    flex: 1,
  },
});

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
