import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

// import heartOutlineSource from '../../../assets/images/icons/heart-outline.png';
import unfavouriteSource from '../../../assets/images/icons/unfavorite.png';
import whatsappSource from '../../../assets/images/icons/whatsapp.png';
import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://gitlab.com/uploads/-/system/user/avatar/2116570/avatar.png',
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Tiago Miguel</Text>
          <Text style={styles.subject}>Português</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Enthusiast of the best web & mobile development technologies.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'    '}
          <Text style={styles.priceValue}>23 €</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favouriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineSource} /> */}
            <Image source={unfavouriteSource} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappSource} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
