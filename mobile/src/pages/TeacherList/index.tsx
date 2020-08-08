import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
} from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import api from '../../services/api';
import styles from './styles';

export interface TeacherProps {
  name: string;
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  subject: string;
  whatsapp: string;
}

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [favourites, setFavourites] = useState<number[]>([]);
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const params = {
      subject,
      week_day: weekDay,
      time,
    };

    const { data } = await api.get('/classes', {
      params,
    });

    if (data?.length > 0) {
      setIsFiltersVisible(false);
    } else {
      Alert.alert('Erro', 'Nenhum resultado encontrado.');
    }

    setTeachers(data);
  }

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeacherIds = favoritedTeachers.map(
          (teacher: TeacherProps) => teacher.id
        );

        setFavourites(favoritedTeacherIds);
      }
    });
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title='Proffys disponíveis'
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name='filter' size={20} color='#fff' />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor='#c1bccc'
              style={styles.input}
              placeholder='Qual a matéria?'
              value={subject}
              onChangeText={text => setSubject(text)}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  placeholderTextColor='#c1bccc'
                  style={styles.input}
                  placeholder='Qual o dia?'
                  value={weekDay}
                  onChangeText={text => setWeekDay(text)}
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor='#c1bccc'
                  style={styles.input}
                  placeholder='Qual horário?'
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: TeacherProps, index) => (
          <TeacherItem
            key={index}
            teacher={teacher}
            favorited={favourites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
