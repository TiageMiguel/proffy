import React from 'react';
import { Link } from 'react-router-dom';

import classesSource from '../../assets/images/icons/give-classes.svg';
import heartSource from '../../assets/images/icons/purple-heart.svg';
import studySource from '../../assets/images/icons/study.svg';
import heroSource from '../../assets/images/landing.svg';
import logoSource from '../../assets/images/logo.svg';

import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoSource} alt='Proffy' />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={heroSource}
          alt='Plataforma de estudos'
          className='hero-image'
        />
        <div className='buttons-container'>
          <Link to='/study' className='study'>
            <img src={studySource} alt='Estudar' />
            Estudar
          </Link>
          <Link to='/give-classes' className='give-classes'>
            <img src={classesSource} alt='Estudar' />
            Estudar
          </Link>
        </div>
        <span className='total-connections'>
          Total de 200 ligações já realizadas
          <img src={heartSource} alt='Coração Roxo' />
        </span>
      </div>
    </div>
  );
};

export default Landing;
