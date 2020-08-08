import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backSource from '../../../assets/images/icons/back.png';
import logoSource from '../../../assets/images/logo.png';
import styles from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backSource} resizeMode='contain' />
        </BorderlessButton>
        <Image source={logoSource} resizeMode='contain' />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PageHeader;
