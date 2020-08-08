import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineSource from '../../../assets/images/icons/heart-outline.png';
import unfavouriteSource from '../../../assets/images/icons/unfavorite.png';
import whatsappSource from '../../../assets/images/icons/whatsapp.png';
import styles from './styles';

interface TeacherProps {
  name: string;
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  favorited: boolean;
  teacher: TeacherProps;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  const { name, avatar, bio, cost, subject, whatsapp } = teacher;

  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites as string);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: TeacherProps) => teacherItem.id === teacher.id
      );

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subject}>{subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'    '}
          <Text style={styles.priceValue}>{cost} €</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[
              styles.favouriteButton,
              isFavorited ? styles.favorited : {},
            ]}
          >
            {isFavorited ? (
              <Image source={unfavouriteSource} />
            ) : (
              <Image source={heartOutlineSource} />
            )}
          </RectButton>
          <RectButton
            style={styles.contactButton}
            onPress={handleLinkToWhatsapp}
          >
            <Image source={whatsappSource} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
