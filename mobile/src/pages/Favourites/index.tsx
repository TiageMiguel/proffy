import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import styles from './styles';

const Favourites: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title='Meus proffys favoritos' />
    </View>
  );
};

export default Favourites;
