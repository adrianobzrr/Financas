import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/Header/Header';

function Home(): JSX.Element {
  return (
    <SafeAreaView>
      <Header name="Adriano Pessoa" />
    </SafeAreaView>
  );
}

export default Home;
