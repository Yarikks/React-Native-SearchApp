import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, FlatList, Image, StyleSheet,
} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState({});
  const id = navigation.getParam('id');

  const getResult = async () => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <>
      <View>
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.text}>Gallery</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
        />
        <View>
          <Text style={styles.text}>Info</Text>
          { result.location
            ? (
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>City: {result.location.city}</Text>
                <Text style={styles.infoText}>Address: {result.location.address1}</Text>
              </View>
            )
            : null }
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 8,
  },
  image: {
    height: 200,
    width: 300,
    marginHorizontal: 8,
  },
  infoContainer: {
    padding: 8,
    backgroundColor: '#EFEDED',
    margin: 16,
    marginTop: 0,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 8,
  },
  text: {
    marginVertical: 12,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

ResultsShowScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ResultsShowScreen;
