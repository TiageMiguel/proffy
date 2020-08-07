import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import giveClassesSource from '../../../assets/images/icons/give-classes.png';
import heartSource from '../../../assets/images/icons/heart.png';
import studySource from '../../../assets/images/icons/study.png';
import landingSource from '../../../assets/images/landing.png';
import styles from './styles';

const Landing: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={landingSource} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer ?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studySource} />
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesSource} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalConnections}>
        Total de 285 ligações já realizadas. <Image source={heartSource} />
      </Text>
    </View>
  );
};

export default Landing;
