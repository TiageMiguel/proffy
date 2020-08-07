import React from 'react';

import whatsappSource from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css';

interface TeacherItemProps {
  teacher: {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;
  };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createConnection = () => {
    api.post('/connections', {
      user_id: teacher.id,
    });
  };

  return (
    <article className='teacher-item'>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost} €</strong>
        </p>
        <a
          target='_blank'
          onClick={createConnection}
          href={`https://wa.me/${teacher.whatsapp}?text=`}
        >
          <img src={whatsappSource} alt='Whatsapp' />
          Entrar em Contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
