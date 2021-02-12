import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Image, Text, View,
} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const MAX_NAME_LENGTH = 20;

const ResultDetail = ({ result }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: result.image_url }} />
    { result.name.length < MAX_NAME_LENGTH
      ? <Text style={styles.name}>{result.name}</Text>
      : <Text style={styles.name}>{result.name.substring(0, MAX_NAME_LENGTH)}...</Text> }
    <View style={styles.info}>
      <View style={styles.info}>
        <AntDesign name="star" size={18} color="black" />
        <Text style={styles.text}>{result.rating}</Text>
      </View>
      <View style={styles.info}>
        <FontAwesome5 name="comment-dots" size={18} color="black" />
        <Text style={styles.text}>{result.review_count}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 8,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    marginLeft: 4,
  },
});

ResultDetail.propTypes = {
  result: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ResultDetail;
