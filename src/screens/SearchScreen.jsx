import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        searchText={searchText}
        onChangeText={setSearchText}
        onSearchSubmit={() => searchApi(searchText)}
      />
      { error ? <Text>{error}</Text> : null }
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
