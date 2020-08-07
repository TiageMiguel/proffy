import React, { FormEvent, useState } from 'react';

import Input from '../../components/input';
import PageHeader from '../../components/pageHeader';
import Select from '../../components/select';
import TeacherItem from '../../components/teacherItem';
import api from '../../services/api';

import './styles.css';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    const { data } = await api.get('/classes', {
      params: {
        week_day: weekDay,
        subject,
        time,
      },
    });

    setTeachers(data);
  }

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Esses são os Proffys disponíveis.'>
        <form id='search-teachers' onSubmit={searchTeachers}>
          <Select
            name='subject'
            label='Matéria'
            value={subject}
            onChange={event => setSubject(event.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Geografia' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Select
            name='week_day'
            label='Dia da Semana'
            value={weekDay}
            onChange={event => setWeekDay(event.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type='time'
            name='time'
            label='Hora'
            value={time}
            onChange={event => setTime(event.target.value)}
          />
          <button type='submit'>Procurar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher, index) => (
          <TeacherItem key={index} teacher={teacher} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
