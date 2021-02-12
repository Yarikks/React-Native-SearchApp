import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, FlatList, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styels.container}>
      <Text style={styels.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
            <ResultDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styels = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 16,
    marginBottom: 12,
  },
});

ResultsList.propTypes = {
  title: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withNavigation(ResultsList);
