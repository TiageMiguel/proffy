import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesSource from '../../../assets/images/icons/give-classes.png';
import heartSource from '../../../assets/images/icons/heart.png';
import studySource from '../../../assets/images/icons/study.png';
import landingSource from '../../../assets/images/landing.png';
import api from '../../services/api';
import styles from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const [totalConnection, setTotalConnections] = useState(0);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={landingSource} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer ?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyPages}
        >
          <Image source={studySource} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigateToGiveClassesPage}
        >
          <Image source={giveClassesSource} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de {totalConnection} ligações já realizadas.{' '}
        <Image source={heartSource} />
      </Text>
    </View>
  );
};

export default Landing;
